const express = require('express');
const passport = require('passport');
require('dotenv').config();

const passportConfig = require('./config/passport')

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
passportConfig();

const frontRouter = require('./src/routes/front-route');
const todoRouter = require('./src/routes/todo-route');
const userRouter = require('./src/routes/user-route');

// app.use("/api/", userRouter);
app.use("/", frontRouter);
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, () => {
});