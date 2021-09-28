const path = require('path');
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// console.log('path', path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`));
//require('dotenv/config');
require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });
//
const express = require('express');
const app = express();
const cors = require('cors');
const todoRoutes = require('./routes/routes.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(todoRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is up ${PORT}`);
  //console.log('env', process.env['NODE_ENV']);
  
});


// if (process.env && process.env.NODE_ENV) {
//   dotenv.config({path: '.env.' + process.env.NODE_ENV});
// } else {
//   dotenv.config({path: '.env.development'});
// }