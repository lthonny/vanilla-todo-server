const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');


router.get('/', cors(), function (req, res) {
    res.sendFile(path.normalize(__dirname + './../tasks.json'));
})

module.exports = router;
