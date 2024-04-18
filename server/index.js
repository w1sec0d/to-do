const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./models/Todo");

const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();

async function connectDB() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log("DB connected");
}

connectDB().catch(console.error);

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel
    .create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
