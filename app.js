const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./models/db.js');

const userRouter = require('./routes/users');

app.use("/api/", userRouter);

app.listen(3000, () => {
});