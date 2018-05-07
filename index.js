const config = require('./config.js');
const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', function (req, res) {
    function readData(err, data) {
        res.send(data)
    }

    fs.readFile('igo.html', 'utf8', readData);
});

app.listen(config.server.port, function () {
    console.log('App Igo listening on port ' + config.server.port + '!')
});
