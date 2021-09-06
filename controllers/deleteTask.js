const tasklist = require('./../factory/index');

const deleteTask = async (req, res) => {
  const taskId = await req.params.id;
  try {
    const tasks = await tasklist.deleteTask(taskId);
    await res.json([]);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = deleteTask;