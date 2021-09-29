module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    order: DataTypes.DOUBLE
  }, {});
};