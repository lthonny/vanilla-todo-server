const { QueryTypes } = require('sequelize');
const { sequelize } = require("../models");
const models = require("../models");
const Task = models.Task;

class ModelPostgresql {

  async getTasks() {
    return Task.findAll();
  }

  async addTask(text) {

    // let order = 1;
    // let maxOrder = await Task.max('order');

    // if(!isNaN(maxOrder)) {
    //   console.log('maxOrder', maxOrder);
    //   return order = maxOrder + order;
    // }

    // if(!isNaN(maxOrder)) {
    //   return order = order + maxOrder + 1;
    // }

    const tasks = await Task.findAll();

    let order = 1;
    if (tasks.length) {
      order = tasks.reduce((acc, curr) => {
        return acc > curr.order ? acc : curr.order;
      }, 1) + 1;
    }

    await Task.create({ text, status: false, order});
  }

  async editTask(id, dataset) {

    await Task.update({ ...dataset}, { where: { id } });
  }

  async deleteTask(id) {
    await Task.destroy({
      where: { id },
    });
  }
}

module.exports = ModelPostgresql;
