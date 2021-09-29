const fs = require('fs');
const path = require('path');
const pathToJSON = path.join(__dirname + '../tasks.json');

const { generateId } = require('../utils');

class ModelJson {
  async getTasks() {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }
        
        try {
          const tasks = JSON.parse(data);

          resolve(tasks);
        } catch(e) {
          console.log(e);
        }
      });
    })
  }

  async addTask(text) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }

        const tasks = JSON.parse(data);

        const id = generateId();

        let order = 1;
        if (tasks.length) {
          order = tasks.reduce((acc, curr) => {
            return acc > curr.order ? acc : curr.order;
          }, 1) + 1;
        }

        const date = new Date();
        date.toLocaleString();

        const obj = { id, text, status: false, date, order };

        tasks.push(obj);

        const myJsonString = JSON.stringify(tasks);
        fs.writeFile(pathToJSON, myJsonString, (err) => {
          if (err) reject(err);
          resolve();
        });
      });
    })
  }

  async editTask(id, dataset) {

    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }

        try {
          const tasks = JSON.parse(data);

          const index = tasks.findIndex(task => task.id === id);
        
          if(index > -1) {
            Object.entries(dataset).forEach(([key, value]) => {
              if (value !== undefined && value !== null) {
                  tasks[index][key] = value;
              }
            })
          }

          const myJsonString = JSON.stringify(tasks);
          fs.writeFile(pathToJSON, myJsonString, (err) => {
            if (err) reject(err);
            resolve();
          }); 

        } catch(e) {
          console.log(e);
        }
      })
    });
  }

  async deleteTask(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);

        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);

        const myJsonString = JSON.stringify(tasks);
        fs.writeFile(pathToJSON, myJsonString, (err) => {
          if (err) reject(err);
          resolve();
        });
      })
    })
  }
}

module.exports = ModelJson;
