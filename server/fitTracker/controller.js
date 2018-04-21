var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker();

module.exports = app
    .get('/exercises', (req, res) =>
        res.send( tracker.GetProfile(req.query.userId) ) 
    )
    .get('/state', (req, res) => res.send(tracker))
    //.post('/picture', (req, res) => res.send( tracker.FlipPicture() ))
    .post('/exercises', (req, res) => {
        console.log(req.body);
        
        //tracker.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send( { success: true } );
    })


