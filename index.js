const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });

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
});
