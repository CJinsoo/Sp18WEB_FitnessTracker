var express = require('express');
var Tracker = require('./model');
var app = express.Router();

var tracker = new Tracker(); 

module.exports = app 
    .post('/join', (req, res) =>{
        try{
            res.send( tracker.SignUp(req.body.User, req.body.Friends));
            //res.send( { success: true });
        } catch(error) {
            res.status(403).send({ success: false, message: error.message });
        }
    } )
    .get('/join/taken', (req, res) =>{
        res.send( tracker.IsIdTaken(req.query.UserId, req.query.Password))
    })
    .get('/login', (req, res) =>
        res.send(tracker.Login(req.query.name, req.query.password))
    )
    /* .post('/saveProfile', (req, res) =>{
        res.send( tracker.SaveProfile(req.body.UserId, req.body.Name, req.body.Age, req.body.Heightft, req.body.Heightin, req.body.Weight, req.body.Goal, req.body.Bmi, req.body.Email))
    }) */
    .get('/exercises/getExercises', (req, res) =>
        res.send( tracker.GetExercises() )

    )
    //.get('/state', (req, res) => res.send(tracker))
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
        res.send( tracker.CalculateTotal( req.body.UserId, req.body.Today) )
    })
    .post('/uploadImg', (req, res) => res.send( tracker.UploadImg(req.body.UserId, req.body.ProfileImg)))
    .post('/putHistory', (req, res) => tracker.PutHistory(req.body.UserId, req.body.History))
    .post('/returnMember', (req, res) => res.send( tracker.ReturnMember(req.body.UserId)))
    .post('/friend/req', (req, res) => res.send(tracker.SendFriendReq( req.body.User, req.body.MyUser , req.body.MyRequests)))
    .get('/giveMe', (req, res) => res.send( tracker.GiveMe(req.query.UserId) ))
    .post('/friend/accept', (req, res) => res.send(tracker.AcceptFriend(req.body.UserId, req.body.MyUserId, req.body.RequestsToMe)))
    //.post('/propagateFriend', (req, res) => res.send(tracker.PropagateFriend(req.body.UserId)))
    .get('/getFriendsData', (req, res) => res.send(tracker.FriendData(req.query.Friend)))