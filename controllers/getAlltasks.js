const tasklist = require('./../factory/index');

const getAllTasks = async (req, res) => {
                                          try {
                                                                                    const tasks =
                                                                                                                              await tasklist.getTasks();

                                                                                    res.json(
                                                                                                                              tasks,
                                                                                    );
                                          } catch (e) {
                                                                                    console.log(
                                                                                                                              e,
                                                                                    );
                                                                                    res.sendStatus(
                                                                                                                              500,
                                                                                    );
                                          }
};

module.exports = getAllTasks;
