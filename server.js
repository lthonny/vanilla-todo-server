const express = require('express');
const path = require('path');
const app = express();

const artists = [
  {
    id: 1,
    name: 'Metalica'
  },
  {
    id: 2,
    name: 'etaa'
  },
  {
    id: 3,
    name: 'ica'
  },
]

app.get('/', function (req, res) {
  res.send('Hello API');
})


app.get('/artists', function (req, res) {
  res.send(artists);
})


app.get('/artists/:id', function (req, res) {
  console.log(req.params)
  const artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id)
  })
  res.send(artist)
})


app.listen(3012, function () {
  console.log('Server has been...');
})
