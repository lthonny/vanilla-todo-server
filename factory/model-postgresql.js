const models = require("../models");
const Task = models.Task;

class ModelPostgresql {
  async getTasks() {
    const tasks = Task.findAll();
    return tasks;
  }

  async addTask(text) {
    const tasks = await Task.findAll();

    let order = 1;
    if (tasks.length) {
      order = tasks.reduce(function (acc, curr) {
        return acc > curr.order ? acc : curr.order;
      }, 1) + 1;
    }

    const task = await Task.create({
      text: text,
      status: false,
      order: order
    })

    return task;
  }

  async editTask(text, status, order, taskId) {
    if (text !== undefined && text !== null) {
      Task.update({ text: text }, { where: { id: taskId } });
    }

    if (status !== undefined && status !== null) {
      Task.update({ status: !status }, { where: { id: taskId } });
    }

    if (order !== undefined && order !== null) {
      Task.update({ order: order }, { where: { id: taskId } });
    }

    return [];
  }

  async deleteTask(taskId) {
    await Task.destroy({
      where: { id: taskId },
    });
  }
}

module.exports = ModelPostgresql;
