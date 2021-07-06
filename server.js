const express = require('express');
const path = require('path')
const app = express();

const port = 3333;

// app.get('/', (req, res) => {
//   res.send("Hello, rest api");
//   res.sendFile(path.join(__dirname, '/tasks.json'))
// });

// app.use(express.static('index.html'));

app.get('/', function (req, res) {
  res.sendFile(path.normalize(__dirname + '/tasks.json'))
})



app.listen(port, () => {
  console.log(`Server is up ${port}`);
});