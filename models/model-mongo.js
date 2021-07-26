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
    const tasks = Task.find();

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
    return tasks;
  }

  async editTask(text, status, order, taskId) {
    const updateObj = {};

    if (text !== undefined && text !== null) {
      updateObj.text = text;
    }

    if (status !== undefined && status !== null) {
      updateObj.status = status;
    }

    if (order !== undefined && order !== null) {
      updateObj.order = order;
    }

    console.log('updateObj', updateObj);

    await Task.findByIdAndUpdate(taskId, updateObj);
    //const task = await Task.findById(taskId);
    //console.log(task);
    // if (task.status !== undefined && task.status !== null) {
    //   task.status = !task.status;
    // }$set: { text: text }

    // await updateText.save();
    return [];
  }

  async deleteTask(taskId) {
    const task = await Task.findByIdAndDelete(taskId);
    return task;
  }
}

module.exports = ModelMongo;