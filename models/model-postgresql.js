const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "viryssmir21",
  host: "localhost",
  port: 5432,
})

class ModelPostgresql {
  async getAllTasks() {
  }

  async addTask(text) {
  }

  async editTask(text, status, order, taskId) {
  }

  async editTask(taskId) {
  }
}

module.exports = ModelPostgresql;
