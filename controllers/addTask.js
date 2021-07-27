const tasklist = require('./../models/index');
// make this controller async use await
// response of this controller shoould be e 204 in caase of success 

const addTask = async (req, res) => {
  const { text } = await req.body;

  try {
    const tasks = await tasklist.addTask(text);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = addTask;