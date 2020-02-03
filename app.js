const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./models/db.js');

const userRouter = require('./routes/users');

app.get("/", (req, res) => {
  res.json({ message: "Simple Application." });
});

app.use("/api/", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});