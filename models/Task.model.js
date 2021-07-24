const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date
  },
  order: {
    type: Number
  }
});

module.exports = mongoose.model("task", taskSchema);