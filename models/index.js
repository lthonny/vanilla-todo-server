const ModelJson = require('./model-json');
const ModelMongo = require('./model-mongo');
const ModelPostgresql = require('./model-postgresql');


class TaskListFactory {
  create(type) {
    let tasklist;
    if (type === 'json') {
      tasklist = new ModelJson()
    }
    else if (type === 'mongodb') {
      tasklist = new ModelMongo()
    }
    else if (type === 'postgresqldb') {
      tasklist = new ModelPostgresql()
    }
    return tasklist;
  };
}

const tasklistFactory = new TaskListFactory();
const tasklist = tasklistFactory.create('postgresqldb');

module.exports = tasklist;

