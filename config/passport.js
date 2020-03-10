const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
let UserService = require('../src/services/user-service');
require('dotenv').config()

module.exports = () => {
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {
        return UserService.getUser(email, password)
        .then(user => {
            if(!user) {
                return done(null, false, {message: 'Incorrect email or password.'});
            }
            return done(null, {email :user[0].email});
            // return done(null, {email: user[0].email }, {message: 'Logged In Successfully'});
        })
        .catch(err => done(err));
    }
    ));
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET
    },
    function (jwtPayload, done) {
        return UserService.getUserByEmail(jwtPayload.email)
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }
));

}