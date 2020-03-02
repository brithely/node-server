const express = require('express');
require('dotenv').config();

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

const frontRouter = require('./src/routes/front-route');
const todoRouter = require('./src/routes/todo-route');

// app.use("/api/", userRouter);
app.use("/", frontRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, () => {
});