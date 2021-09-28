module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    order: DataTypes.DOUBLE
  }, {});
  return Task;
};