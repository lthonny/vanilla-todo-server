const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2717', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to db'))
const db = mongoose.connection;

const Task = require('../models/Task.model');



class ModelMongo {
  async getAllTasks() {
    return new Promise((resolve, reject) => {
      const tasks = Task.find();
      resolve(tasks);
    })
  }

  async addTask(text) {
    return new Promise((resolve, reject) => {
      // if (err) reject(err);

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
      resolve(tasks);
    })
  }

  async editTask(text, status, order, taskId) {
    return new Promise((resolve, reject) => {
      const tasks = Task.find();

      // const task = new

      // tasks.deleteOne({ _id: taskId });
      // task.save();
      resolve();
    })
  }

  async deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      // if (err) reject(err);

      const tasks = Task.find();
      tasks.deleteOne({ _id: taskId });
      resolve(tasks);
    })
  }
}

module.exports = ModelMongo;