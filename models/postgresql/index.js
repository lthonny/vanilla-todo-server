require('dotenv/config');
const Sequelize = require('sequelize');

const db = new Sequelize('app-todo', 'postgres', 'viryssmir21', {
  dialect: 'postgres',
  host: "localhost"
});

db.authenticate()
  .then(() => console.log('Database connected Postgresql...'))
  .catch(err => console.log('Error', err))

module.exports = { db, Sequelize };