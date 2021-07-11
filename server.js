const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

const port = 3333;

app.get('/', cors(), function (req, res) {
    res.sendFile(path.normalize(__dirname + '/tasks.json'));
})


app.listen(port, () => {
    console.log(`Server is up ${port}`);
});