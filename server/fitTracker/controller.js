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
    /* .post('/saveProfile', (req, res) =>{
        res.send( tracker.SaveProfile(req.body.UserId, req.body.Name, req.body.Age, req.body.Heightft, req.body.Heightin, req.body.Weight, req.body.Goal, req.body.Bmi, req.body.Email))
    }) */
    .get('/exercises/getExercises', (req, res) =>
        res.send( tracker.GetExercises() )

    )
    .get('/state', (req, res) => res.send(tracker))
    .post('/saveProfile', (req, res) => {
        res.send( tracker.SaveProfile(req.body.UserProfile, req.body.UserId) )
    })
    //.post('/picture', (req, res) => res.send( tracker.FlipPicture() ))
    /* .post('/exercises/submitExercise', (req, res) => {
        //console.log(req.body);
        res.send( tracker. )
        //tracker.SubmitQuote(req.body.Text, req.body.PlayerId);
        //res.send( { success: true } );
    }) */
    .post('/exercises/submitExercise', (req, res) => res.send( tracker.SubmitExercise(req.body.Workout, req.body.UserId) ))
    .post('/exercises/calculateToday', (req, res) => {
        res.send( tracker.CalculateTotal( req.body.UserId) )
    })
    .post('/uploadImg', (req, res) => res.send( tracker.UploadImg(req.body.UserId, req.body.ProfileImg)))
 
