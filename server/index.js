const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const fitTracker = require('./fitTracker/controller');

var app = express()

const servername = "localhost";
const port = 8080;

app
    .use(bodyParser.json({limit: '50mb'})) //Do not let user send in file larger than 50Mb
    .use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();      
    })
    .use('/', express.static(path.join(__dirname, "../dist/")))
    .use('/fitTracker', fitTracker)
    .use('/', (req, res, next) => res.sendFile(path.join(__dirname, "../dist/index.html")))
    .listen(port);

console.log("running on http://" + servername + ":" + port)