require('dotenv/config');
const ModelJson = require('./model-json');
const ModelMongo = require('./model-mongo');
const ModelPostgresql = require('./model-postgresql');

class TaskListFactory {
  create(type) {
    let tasklist;
    if (type === 'mongodb') {
      tasklist = new ModelMongo();
    }
    else if (type === 'postgresqldb') {
      tasklist = new ModelPostgresql();
    }
    else {
      tasklist = new ModelJson();
    }
    
    return tasklist;
  };
}

const tasklistFactory = new TaskListFactory();
const tasklist = tasklistFactory.create(process.env.DB_TYPE);

module.exports = tasklist;

