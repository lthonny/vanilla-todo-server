const tasklist = require('./../models/index');

const addTask = (req, res) => {
  const { text } = req.body;

  try {
    const tasks = tasklist.addTask(text);
    return tasks.then(tasks => {
      return res.json(tasks);
    })
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = addTask;