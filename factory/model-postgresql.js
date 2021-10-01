const { Task } = require('../models');

class ModelPostgresql {
                                          async getTasks() {
                                                                                    return Task.findAll();
                                          }

                                          async addTask(text) {
                                                                                    const tasks =
                                                                                                                              await Task.findAll();

                                                                                    let order = 1;
                                                                                    if (
                                                                                                                              tasks.length
                                                                                    ) {
                                                                                                                              order =
                                                                                                                                                                        tasks.reduce(
                                                                                                                                                                                                                  (
                                                                                                                                                                                                                                                            acc,
                                                                                                                                                                                                                                                            curr,
                                                                                                                                                                                                                  ) => {
                                                                                                                                                                                                                                                            return acc >
                                                                                                                                                                                                                                                                                                      curr.order
                                                                                                                                                                                                                                                                                                      ? acc
                                                                                                                                                                                                                                                                                                      : curr.order;
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  1,
                                                                                                                                                                        ) +
                                                                                                                                                                        1;
                                                                                    }

                                                                                    await Task.create(
                                                                                                                              {
                                                                                                                                                                        text,
                                                                                                                                                                        status: false,
                                                                                                                                                                        order,
                                                                                                                              },
                                                                                    );
                                          }

                                          async editTask(id, dataset) {
                                                                                    await Task.update(
                                                                                                                              {
                                                                                                                                                                        ...dataset,
                                                                                                                              },
                                                                                                                              {
                                                                                                                                                                        where: {
                                                                                                                                                                                                                  id,
                                                                                                                                                                        },
                                                                                                                              },
                                                                                    );
                                          }

                                          async deleteTask(id) {
                                                                                    await Task.destroy(
                                                                                                                              {
                                                                                                                                                                        where: {
                                                                                                                                                                                                                  id,
                                                                                                                                                                        },
                                                                                                                              },
                                                                                    );
                                          }
}

module.exports = ModelPostgresql;
