const tasklist = require('./../models/index');
// make this controller async use await
// response of this controller shoould be e 204 in caase of success 

const editTask = (req, res) => {
  const { text, status, order } = req.body;
  const taskId = req.params.id;

  try {
    const tasks = tasklist.editTask(text, status, order, taskId);
    // tasks.then(task => console.log(task));
    return tasks.then(tasks => {
      return res.json(tasks);
    })
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = editTask;