const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const fitTracker = require('./fitTracker/controller');

var app = express()

const servername = "localhost";
const port = 8080;



app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();      
    })
    .use('/', express.static(path.join(__dirname, "../dist/")))
    .use('/simple', simple)
    .use('/fitTracker', fitTracker)
    .use('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, "../dist/index.html"));
    })
    .listen(port);

console.log("running on http://" + servername + ":" + port)