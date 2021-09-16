const tasklist = require('./../factory/index');

const addTask = async (req, res) => {
  try {
    const { text } = req.body;

    await tasklist.addTask(text);
    
    res.status(204).end();
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = addTask;