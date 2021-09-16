const { sequelize } = require("../models");
const models = require("../models");
const Task = models.Task;

const { QueryTypes } = require('sequelize');

class ModelPostgresql {
  async getTasks() {

    // const [results, metadata] = await sequelize.query('SELECT...'); // Raw query - use array destructuring

    const results = await sequelize.query("SELECT * FROM `Tasks`", { type: QueryTypes.SELECT });
    console.log(results)

    return Task.findAll();
  }

  async addTask(text) {
    const tasks = await Task.findAll();

    // const sql = await sequelize.query("SELECT * FROM `Tasks`", { type: QueryTypes.SELECT });
    // console.log(sql);

    let order = 1;
    if (tasks.length) {
      order = tasks.reduce((acc, curr) => {
        return acc > curr.order ? acc : curr.order;
      }, 1) + 1;
    }

    await Task.create({ text, status: false, order });
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
