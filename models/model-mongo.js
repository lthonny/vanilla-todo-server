require('dotenv/config');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
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
      // const task = Task.findOne({ _id: taskId });

      if (text !== undefined && text !== null) {
        tasks.updateOne({ _id: taskId }, {
          $set: { text: text }
        })
      }

      if (status !== undefined && status !== null) {
        tasks.updateOne({ _id: taskId }, {
          $set: { status: !status }
        })
      }

      if (order !== undefined && order !== null) {
        tasks.updateOne({ _id: taskId }, {
          $set: { order: order }
        })
      }

      resolve(tasks);
    })
  }

  async deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      const tasks = Task.find();

      tasks.deleteOne({ _id: taskId })

      // const subscriber = Task.findByIdAndDelete({ _id: taskId });
      // tasks.deleteOne({ _id: taskId });

      // tasks.save()
      resolve(tasks);
    })
  }
}

module.exports = ModelMongo;