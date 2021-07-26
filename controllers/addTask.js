const tasklist = require('./../models/index');
// make this controller async use await
// response of this controller shoould be e 204 in caase of success 

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