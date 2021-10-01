const tasklist = require('./../factory/index');

const deleteTask = async (req, res) => {
                                          try {
                                                                                    await tasklist.deleteTask(
                                                                                                                              req
                                                                                                                                                                        .params
                                                                                                                                                                        .id,
                                                                                    );

                                                                                    res.status(
                                                                                                                              204,
                                                                                    ).end();
                                          } catch (e) {
                                                                                    res.sendStatus(
                                                                                                                              500,
                                                                                    );
                                          }
};

module.exports = deleteTask;
