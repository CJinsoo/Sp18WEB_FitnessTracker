var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker();

module.exports = app
    .get('/exercises', (req, res) =>
        res.send( tracker.GetProfile(req.query.userId, req.query.User) )
        //res.send( tracker ) 
    )
    .get('/exercises/getExercises', (req, res) =>
        res.send( tracker.GetExercises() )

    )
    .get('/state', (req, res) => res.send(tracker))
    .post('/exercises/save', (req, res) => {
        res.send( tracker.SaveProfile(req.body.UserId, req.body.Name, req.body.Age, req.body.Gender, req.body.Email, req.body.Heightft, req.body.Heightin, req.body.Weight, req.body.Bmi, req.body.Goal) )
    })
    //.post('/picture', (req, res) => res.send( tracker.FlipPicture() ))
    .post('/exercises', (req, res) => {
        console.log(req.body);
        
        //tracker.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send( { success: true } );
    })
    //.post('/exercises/selectWorkout', (req, res) => res.send( tracker. ))


