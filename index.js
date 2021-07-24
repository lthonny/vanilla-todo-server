require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const todoRoutes = require('./routes/routes.js');


app.use(cors());
app.use(express.json());
app.use(todoRoutes);

const PORT = process.env.SERVER_PORT ?? 3333;

app.listen(PORT, () => {
    console.log(`Server is up ${PORT}`);
});