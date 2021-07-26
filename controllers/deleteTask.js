const tasklist = require('./../models/index');
// make this controller async use await
// response of this controller shoould be e 204 in caase of success 

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