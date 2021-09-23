require('dotenv/config');
const {sequelize} = require('../models');
const mongoose = require('mongoose');
const ModelJson = require('./model-json');
const ModelMongo = require('./model-mongo');
const ModelPostgresql = require('./model-postgresql');


class FactoryTaskList {

    constructor() {
        this.tasklist;
    }

    create(type) {

        if (this.tasklist) {
            return this.tasklist;
        }

        if (type === 'mongodb') {
            mongoose.connect('mongodb://localhost:2717', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, () => console.log('Database connected Mongodb...'));

            this.tasklist = new ModelMongo();
        } else if (type === 'postgresqldb') {
            sequelize.authenticate()
                .then(() => console.log('Connection has been established successfully.'))
                .catch((err) => console.log(err));

            this.tasklist = new ModelPostgresql();
        } else {
            this.tasklist = new ModelJson();
        }

        return this.tasklist;
    }
}

const taskListFactory = new FactoryTaskList();
const tasklist = taskListFactory.create(process.env.DB_TYPE);

module.exports = tasklist;

