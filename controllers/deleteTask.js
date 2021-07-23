const tasklist = require('./../models/index');

const deleteTask = (req, res) => {
  const taskId = req.params.id;

  try {
    const tasks = tasklist.deleteTask(taskId);
    return tasks.then(tasks => {
      return res.json(tasks);
    })
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = deleteTask;