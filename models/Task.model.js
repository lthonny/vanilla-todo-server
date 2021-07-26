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
},
  { versionKey: false }
);

taskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { delete ret._id }
});


module.exports = mongoose.model("task", taskSchema);