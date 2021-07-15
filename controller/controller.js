const path = require('path');
const fs = require('fs');

const pathToJSON = path.join(__dirname + './../tasks.json');

const getAllTasks = (request, response) => {
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            const tasks = JSON.parse(data);
            response.json(tasks);
        });
    } catch (e) {
        response.sendStatus(500);
    }
}


function writeFile(pathToJSON, res, tasks) {
    const myJsonString = JSON.stringify(tasks);

    fs.writeFile(pathToJSON, myJsonString, (err) => {
        if (err) {
            res.sendStatus(500).end();
            return;
        }

        res.json(tasks);
    })
}


const addTask = (request, response) => {
    const {text} = request.body;
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
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

            writeFile(pathToJSON, response, tasks);
        });
    } catch (e) {
        response.sendStatus(500);
    }
}

const editTask = (request, response) => {
    const {text, status} = request.body;
    const taskId = request.params.id;
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            const tasks = JSON.parse(data);

            const index = tasks.findIndex(function (task) {
                return task.id === taskId;
            })
            console.log('\n\n task', tasks[index]);
            if (text !== undefined && text !== null) {
                tasks[index].text = text;
            }

            if (status !== undefined && status !== null) {
                tasks[index].status = status;
            }

            writeFile(pathToJSON, response, tasks);
        })
    } catch (e) {
        response.sendStatus(500);
    }
}

const deleteTask = (request, response) => {
    const taskId = request.params.id;
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            const tasks = JSON.parse(data);

            const id = tasks.findIndex(function (task) {
                return task.id === taskId;
            })
            tasks.splice(id, 1);

            writeFile(pathToJSON, response, tasks);
        })
    } catch (e) {
        response.sendStatus(500);
    }
}


module.exports = {getAllTasks, addTask, editTask, deleteTask};