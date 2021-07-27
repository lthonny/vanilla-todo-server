const tasklist = require('./../models/index');
// make this controller async use await
// response of this controller shoould be e 204 in caase of success 

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