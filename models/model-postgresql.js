const { Sequelize, db } = require('./postgresql');
const Task = require('./postgresql/tasks');

class ModelPostgresql {
  async getAllTasks() {
    console.log('SequelizeSequelize', Task);
    const tasks = Task.findAll();
    return tasks;
  }

  async addTask(text) {
    // let order = 1;
    // if (tasks.length) {
    //   order = tasks.reduce(function (acc, curr) {
    //     return acc > curr.order ? acc : curr.order;
    //   }, 1) + 1;
    // }
    const task = await Task.create({
      text: text,
      status: false,
      order: 1
    })

    return task;
  }

  async editTask(text, status, order, taskId) {

  }

  async deleteTask(taskId) {
    await Task.destroy({
      where: { id: taskId },
    });
  }
}

module.exports = ModelPostgresql;
