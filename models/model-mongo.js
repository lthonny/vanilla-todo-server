require('dotenv/config');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to db'));
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const Task = require('../models/Task.model');

class ModelMongo {
  async getAllTasks() {
    const tasks = await Task.find();
    return tasks;
  }

  async addTask(text) {
    const tasks = await Task.find();

    let order = 1;
    if (tasks.length) {
      order = tasks.reduce(function (acc, curr) {
        return acc > curr.order ? acc : curr.order;
      }, 1) + 1;
    }

    const date = new Date();
    date.toLocaleString();

    const task = new Task({
      text: text,
      status: false,
      date: date,
      order: order
    })

    task.save();
    return [];
  }

  async editTask(text, status, order, taskId) {
    const updateObj = {};

    if (text !== undefined && text !== null) {
      updateObj.text = text;
    }

    if (status !== undefined && status !== null) {
      updateObj.status = !status;
    }

    if (order !== undefined && order !== null) {
      updateObj.order = order;
    }

    await Task.findByIdAndUpdate(taskId, updateObj);
    return [];
  }

  async deleteTask(taskId) {
    const task = await Task.findByIdAndDelete(taskId);
    return [];
  }
}

module.exports = ModelMongo;