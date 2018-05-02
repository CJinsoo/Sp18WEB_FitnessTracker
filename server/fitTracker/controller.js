var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker();

module.exports = app
    .post('/join', (req, res) =>{
        try{
            res.send( tracker.SignUp(req.body.UserId, req.body.Password));
            //res.send( { success: true });
        } catch(error) {
            res.status(403).send({ success: false, message: error.message });
        }
    } 
    )
    .get('/login', (req, res) =>
        res.send(tracker.Login(req.query.name, req.query.password))
    )
    .post('/saveProfile', (req, res) =>{
        res.send( tracker.SaveInitialProfile(req.body.UserId, req.body.Name, req.body.Age, req.body.Heightft, req.body.Heightin, req.body.Weight, req.body.Goal, req.body.Bmi, req.body.Email))
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


