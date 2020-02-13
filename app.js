const express = require('express');
require('dotenv').config();

const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd',
  session: false,
  function(username, password, done) {
  }
}));



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./models/db.js');

const userRouter = require('./routes/users');

app.use("/api/", userRouter);

app.listen(3000, () => {
});