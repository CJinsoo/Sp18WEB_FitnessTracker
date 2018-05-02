var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker();

module.exports = app
    .get('/join', (req, res) =>
        res.send( tracker.SignUp( req.query.userId, req.query.password) )
        //res.send( tracker ) 
    )
    .get('/login', (req, res) =>
        res.send(tracker.Login(req.query.name, req.query.password))
    )
    .get('/join/initialize', (req, res) =>{
        res.send( tracker.SaveInitialProfile(req.query.id, req.query.name, req.query.age, req.query.heightft, req.query.heightin, req.query.weight, req.query.email))
    })
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


