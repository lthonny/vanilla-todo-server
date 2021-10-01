const tasklist = require('./../factory/index');

const editTask = async (req, res) => {
                                          try {
                                                                                    const {
                                                                                                                              text,
                                                                                                                              status,
                                                                                                                              order,
                                                                                    } =
                                                                                                                              req.body;
                                                                                    const {
                                                                                                                              id,
                                                                                    } =
                                                                                                                              req.params;

                                                                                    await tasklist.editTask(
                                                                                                                              id,
                                                                                                                              {
                                                                                                                                                                        text,
                                                                                                                                                                        status,
                                                                                                                                                                        order,
                                                                                                                              },
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

module.exports = editTask;
