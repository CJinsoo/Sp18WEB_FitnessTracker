var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker(); 

module.exports = app 
    // added during the final exam
    .get('/getSearchUser', (req, res) => res.send( tracker.ReturnSearchUser(req.query.PARAMS) ))
    .get('/state', (req, res) => res.send(tracker) )
    .get('/getHomePic', (req, res) => 
        res.send( tracker.ReturnHomePics() ))
    .post('/join', (req, res) =>{
        try{
            res.send( tracker.SignUp(req.body.User));
        } catch(error) {
            res.status(403).send({ success: false, message: error.message });
        }
    } )
    .get('/join/taken', (req, res) => 
        res.send( tracker.IsIdTaken(req.query.UserId, req.query.Password) ))
    .get('/exercises/getExercises', (req, res) =>
        res.send( tracker.GetExercises()))    
    .get('/login', (req, res) =>
        res.send( tracker.Login(req.query.name, req.query.password) ))
    .post('/saveProfile', (req, res) => 
        res.send( tracker.SaveProfile(req.body.UserProfile, req.body.UserId) ))
    .post('/uploadImg', (req, res) => 
        res.send( tracker.UploadImg(req.body.UserId, req.body.ProfileImg) ))
    .post('/exercises/submitExercise', (req, res) => 
        tracker.SubmitExercise(req.body.Workout, req.body.UserId) )
    .post('/exercises/calculateToday', (req, res) => 
        res.send( tracker.CalculateTotal( req.body.UserId, req.body.Today) ))
    .post('/putHistory', (req, res) => tracker.PutHistory(req.body.UserId, req.body.History) )
    .get('/returnShowList', (req, res) => 
        res.send( tracker.ReturnShowList(req.query.UserId) ))
    .post('/friend/req', (req, res) => 
        res.send( tracker.SendFriendReq( req.body.UserId, req.body.MyUserId) ))
    .post('/friend/accept', (req, res) => 
        tracker.AcceptFriend(req.body.UserId, req.body.MyUserId, req.body.RequestsToMe) )