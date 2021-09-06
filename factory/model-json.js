const path = require('path');
const fs = require('fs');
const pathToJSON = path.join(__dirname + './../tasks.json');

class ModelJson {
  async getTasks() {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);
        resolve(tasks);
      });
    })
  }

  async addTask(text) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);

        const id = Math.random().toString(36).substr(2, 9);
        let order = 1;
        if (tasks.length) {
          order = tasks.reduce(function (acc, curr) {
            return acc > curr.order ? acc : curr.order;
          }, 1) + 1;
        }

        const date = new Date();
        date.toLocaleString();

        const obj = {
          id: id,
          text: text,
          status: false,
          date: date,
          order: order
        }

        tasks.push(obj);

        const myJsonString = JSON.stringify(tasks);
        fs.writeFile(pathToJSON, myJsonString, (err) => {
          if (err) reject(err);
          resolve([]);
        });
      });
    })
  }

  async editTask(text, status, order, taskId) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);

        const index = tasks.findIndex(function (task) {
          return task.id === taskId;
        })

        if (text !== undefined && text !== null) {
          tasks[index].text = text;
        }

        if (status !== undefined && status !== null) {
          tasks[index].status = !status;
        }

        if (order !== undefined && order !== null) {
          tasks[index].order = order;
        }

        const myJsonString = JSON.stringify(tasks);
        fs.writeFile(pathToJSON, myJsonString, (err) => {
          if (err) reject(err);
          resolve([]);
        });
      })
    });
  }

  async deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);

        const id = tasks.findIndex(function (task) {
          return task.id === taskId;
        })
        tasks.splice(id, 1);

        const myJsonString = JSON.stringify(tasks);
        fs.writeFile(pathToJSON, myJsonString, (err) => {
          if (err) reject(err);
          resolve([]);
        });
      })
    })
  }
}

module.exports = ModelJson;
