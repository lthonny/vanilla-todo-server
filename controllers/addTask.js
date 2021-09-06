const tasklist = require('./../factory/index');

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