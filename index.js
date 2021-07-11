const express = require('express');
const app = express();

const todoRoutes = require('./routes/todo');

app.use(todoRoutes);


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is up ${PORT}`);
});