const path = require('path');

// как лучше назвать функции?
const getAllTasks = (request, response) => {
    response.sendFile(path.normalize(__dirname + './../tasks.json'));
}

const postAddTask = (request, response) => {
    response.json(request.body);
    console.log('postAddTask body', request.body)
}

const putEditTask = (request, response) => {
    //request.params.id
    response.send('edit');
}

const deleteTask = (request, response) => {
    response.send('delete');
}


module.exports = { getAllTasks, postAddTask, putEditTask, deleteTask };