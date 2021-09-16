const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:2717', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Database connected Mongodb...'));
mongoose.set('useFindAndModify', false);


const Task = require('./modelMongodb');

class ModelMongo {

  async getTasks() {
    return Task.find();
  }


  async addTask(text) {
    const tasks = await Task.find();

    let order = 1;
    if (tasks.length) {
      order = tasks.reduce((acc, curr) => {
        return acc > curr.order ? acc : curr.order;
      }, 1) + 1;
    }

    const date = new Date();
    date.toLocaleString();

    const task = new Task({ text, status: false, date, order });

    task.save();
    return;
  }


  async editTask(id, dataset) {
    const updateObj = {};

    Object.entries(dataset).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
          updateObj[key] = value;
      }
    })

    await Task.findByIdAndUpdate(id, updateObj);
    return;
  }


  async deleteTask(id) {
    await Task.findByIdAndDelete(id);
    return;
  }
}

module.exports = ModelMongo;