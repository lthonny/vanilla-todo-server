require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "vanilla_todo",
    host: "127.0.0.1",
    port: 5431,
    dialect: "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "vanilla_todo",
    host: "127.0.0.1",
    port: 5431,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "vanilla_todo",
    host: "127.0.0.1",
    port: 5431,
    dialect: "postgres"
  }
};