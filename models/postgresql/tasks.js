const { db, Sequelize } = require('./index');

module.exports = db.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  // date: {
  //   type: Sequelize.DATE,a
  //   allowNull: false
  // },
  order: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});