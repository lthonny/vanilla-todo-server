require('dotenv/config');
const ModelJson = require('./model-json');
const ModelMongo = require('./model-mongo');
const ModelPostgresql = require('./model-postgresql');

class TaskListFactory {
  create(type) {
    let tasklist;
    if (type === process.env.DB_JSON) {
      tasklist = new ModelJson();
    }
    else if (type === process.env.DB_MONGO) {
      tasklist = new ModelMongo();
    }
    else if (type === process.env.DB_POSTGRES) {
      tasklist = new ModelPostgresql();
    }
    
    return tasklist;
  };
}

const tasklistFactory = new TaskListFactory();
const tasklist = tasklistFactory.create(process.env.DB_POSTGRES);

module.exports = tasklist;

