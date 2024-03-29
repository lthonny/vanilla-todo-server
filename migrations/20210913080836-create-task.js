'use strict';
module.exports = {
                                          up: async (
                                                                                    queryInterface,
                                                                                    Sequelize,
                                          ) => {
                                                                                    await queryInterface.createTable(
                                                                                                                              'Tasks',
                                                                                                                              {
                                                                                                                                                                        id: {
                                                                                                                                                                                                                  allowNull: false,
                                                                                                                                                                                                                  autoIncrement: true,
                                                                                                                                                                                                                  primaryKey: true,
                                                                                                                                                                                                                  type: Sequelize.INTEGER,
                                                                                                                                                                        },
                                                                                                                                                                        text: {
                                                                                                                                                                                                                  type: Sequelize.STRING,
                                                                                                                                                                        },
                                                                                                                                                                        status: {
                                                                                                                                                                                                                  type: Sequelize.BOOLEAN,
                                                                                                                                                                        },
                                                                                                                                                                        order: {
                                                                                                                                                                                                                  type: Sequelize.DOUBLE,
                                                                                                                                                                        },
                                                                                                                                                                        createdAt: {
                                                                                                                                                                                                                  allowNull: false,
                                                                                                                                                                                                                  type: Sequelize.DATE,
                                                                                                                                                                        },
                                                                                                                                                                        updatedAt: {
                                                                                                                                                                                                                  allowNull: false,
                                                                                                                                                                                                                  type: Sequelize.DATE,
                                                                                                                                                                        },
                                                                                                                              },
                                                                                    );
                                          },
                                          down: async (
                                                                                    queryInterface,
                                                                                    Sequelize,
                                          ) => {
                                                                                    await queryInterface.dropTable(
                                                                                                                              'Tasks',
                                                                                    );
                                          },
};
