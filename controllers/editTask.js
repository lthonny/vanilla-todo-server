const tasklist = require('./../factory/index');

const editTask = async (req, res) => {
  const { text, status, order } = await req.body;
  const taskId = await req.params.id;

  try {
    const tasks = await tasklist.editTask(text, status, order, taskId);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = editTask;