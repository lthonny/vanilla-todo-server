const path = require('path');
const fs = require('fs');

const pathToJSON = path.join(__dirname + './../tasks.json');

const getAllTasks = (request, response) => {
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
            const tasks = JSON.parse(data);
            response.json(tasks);
        });
    } catch (e) {
        response.sendStatus(500);
    }
}


const addTask = (request, response) => {
    const { text, status } = request.body;
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            const tasks = JSON.parse(data);

            // make id
            const id = Math.random().toString(36).substr(2, 9);

            // make order. get max order of current tasks + 1
            let order = 1;
            if (tasks.length) {
                order = tasks.reduce(function (acc, curr) {
                    return acc > curr.order ? acc : curr.order;
                }, 1) + 1;
            }

            // make date
            const date = new Date();
            date.toLocaleString();

            // create object and add id, order, date, text and status to this object

            const obj = {
                id: id,
                text: text,
                status: status,
                date: date,
                order: order
            }

            // add object to tasks array
            tasks.push(obj);

            // Convert result array to JSON

            const myJsonString = JSON.stringify(tasks);

            // write JSON into file async

            // fs.writeFileSync()
            fs.writeFile(pathToJSON, myJsonString, (err, data) => {
                if (err) throw err;
                else {
                    try {
                        return data
                    } catch (err) {
                        response.send('err', err);
                    }
                }
            })

            response.json(tasks)

            // fs.writeFileSync(pathToJSON, myJsonString);

            // try {
            //     // on success send tasks as json
            //     response.json(tasks);
            // } catch (err) {
            //     // on error send status
            //     response.send('err', err)
            // }
        });
    } catch (e) {
        response.sendStatus(500);
    }
}

const editTask = (request, response) => {
    //request.params.id
    response.send('edit');
}

const deleteTask = (request, response) => {
    const taskId = request.params.id;
    try {
        fs.readFile(pathToJSON, 'utf-8', (err, data) => {
            if (err) throw err;
            const tasks = JSON.parse(data);


            const elementIndex = tasks.findIndex(function (task) {
                return task.id === taskId;
            })

            tasks.splice(elementIndex, 1);

            // const obg = {
            //
            //     }
            // ;

            // tasks.push(deleteTasks);

            const myJsonString = JSON.stringify(tasks);

            fs.writeFile(pathToJSON, myJsonString, (err, data) => {
                if (err) throw err;
                else {
                    try {
                        return data
                    } catch (err) {
                        response.send('err', err);
                    }
                }
            })


            response.json(tasks);
            // response.send('delete');
        })
    } catch (e) {
        response.sendStatus(500);
    }
}


module.exports = {getAllTasks, addTask, editTask, deleteTask};