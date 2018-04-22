var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker();

module.exports = app
    .get('/exercises', (req, res) =>
        res.send( tracker.GetProfile(req.query.userId) )
        //res.send( tracker ) 
    )
    .get('/exercises/getExercises', (req, res) =>
        res.send( tracker.GetExercises() )

    )
    .get('/state', (req, res) => res.send(tracker))
    .post('/exercises/save', (req, res) => {
        res.send( tracker.SaveProfile() )
    })
    //.post('/picture', (req, res) => res.send( tracker.FlipPicture() ))
    .post('/exercises', (req, res) => {
        console.log(req.body);
        
        //tracker.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send( { success: true } );
    })


