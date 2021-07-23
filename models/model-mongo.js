// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');

// await mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// MongoClient.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb', function (err, db) {
//   if (err) {
//     throw err;
//   }
//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });


class ModelMongo {
  async getAllTasks() {

  }

  async addTask(text) {
  }

  async editTask(text, status, order, taskId) {
  }

  async editTask(taskId) {
  }
}

module.exports = ModelMongo;