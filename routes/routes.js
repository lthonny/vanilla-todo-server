const express = require('express');
const router = express.Router();

const getAllTasks = require('./../controllers/getAlltasks');
const addTask = require('./../controllers/addTask');
const editTask = require('./../controllers/editTask');
const deleteTask = require('./../controllers/deleteTask');

router.get('/tasks', getAllTasks);
router.post('/tasks', addTask);
router.put('/tasks/:id', editTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
