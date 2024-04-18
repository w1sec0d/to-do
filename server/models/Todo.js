const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: String,
  isDone: Boolean,
});

module.exports = mongoose.model("Todo", todoSchema);
