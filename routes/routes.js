const express = require('express');
const router = express.Router();

const { getAllTasks, addTask, editTask, deleteTask } = require('../controller/controller.js');


// view tasks
router.get('/tasks', getAllTasks);

// add task
router.post('/tasks', addTask);

// edit task
router.put('/tasks/:id', editTask);

// delete task
router.delete('/tasks/:id', deleteTask);

module.exports = router;