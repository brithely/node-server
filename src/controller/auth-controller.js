const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();
exports.login = function (req, res) {
    passport.authenticate('local', {session: false}, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user,
                err    : err.toString()
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // jwt.sign('token내용', 'JWT secretkey')
            const token = jwt.sign(user, process.env.JWT_SECRET);
            return res.json({user, token});
        });
    })(req, res);
};