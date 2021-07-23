const tasklist = require('./../models/index');

const editTask = (req, res) => {
  const { text, status, order } = req.body;
  const taskId = req.params.id;

  try {
    const tasks = tasklist.editTask(text, status, order, taskId);

    return tasks.then(tasks => {
      return res.json(tasks);
    })
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = editTask;