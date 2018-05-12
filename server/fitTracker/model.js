
//var axios = require("axios");
//axios.get(' https://wger.de/api/v2/exerciseinfo')
//    .then( response => TipsStack = response.data.data.exerciseinfo)
const ExerciseStack = [
    "Squat", "Leg Press", "Lunge", "Deadlift", "Leg Extension", "Leg Curl", "Standing Calf Raise", "Seated Calf Raise",
    "Bench Press", "Chest fly", "Push Up", "Pull Down", "Pull Up", "Shoulder Press", "Triceps Extension", "Biceps Curl",
    "Crunch", "Lunge", "Plank", "Running", "Mild Walking", "Fast Walking", "Yoga", "Tabata", "Dance", "Step"
]
var TipsStack = [
];
var iCurrentTips = 0;
function Tracker() {
  
        this.Members = [];
        this.UserProfile;
        this.Tips = null;
        this.PossibleFriends = [];
 
        //this.SetProfile

        this.IsIdTaken = (userId, password) => {
            if(this.Members.find( x => x.UserId == userId ))
                return false;
            else
                return true;
        }
        this.SignUp = ( user) => {
            //user.Friend = Friends[this.Members.len]
            var len = this.Members.push(user);
            return this.Members[len-1];
            /* if(this.Members.some(x=> x.UserId == userId)){
                //console.log('user is' + this.Members.find(function (obj) {return obj.UserId === userId;}).UserId)
                return this.Members.find(function (obj) {return obj.UserId === userId;});
                
            }else{
                this.Members.push({ User:user });
                //console.log('creating new user')
            }
            return []; */ 
                   
        }
        this.Login = ( name, password ) => {
            if(this.Members.find( x => x.UserId == name )){
                var foundUser = this.Members.find( x => x.UserId == name );
                if(foundUser.Password == password){
                    console.log("login successful")
                    //this._Router.navigate(['/home'])
                    return foundUser;
                }else{
                    console.log("wrong password")
                    return false;
                }
            }else{
                
                console.log("could not find user")
                return false;
                
            //return false;
            //this._Router.navigate(['/home'])
            }
        }   
        //this.flipWelcome = () =>
        //this.Tips = TipsStack[iCurrentPicture = (iCurrentPicture +1) % TipsStack.length];

        this.GetExercises = () => {return ExerciseStack}
        this.SaveProfile = ( userProfile, id) => { 
            if(this.Members.find( x => x.UserId == id )){
                var thisUser = this.Members.find( x => x.UserId == id );
                thisUser.UserProfile = userProfile;
                return thisUser;
            }else{
                return false;
            }
            //this.Members.push({UserId: id, Age: age, Gender:gender, Email:email, Heightft: heightft, Heightin: heighti, Weight:weight, Bmi: bmi, Goal:goal})
        }

        this.SubmitExercise = (workout, userId) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            thisUser.Workout = workout;
            /* var thisExercise = thisUser.Workout.find( x => x.ActivityName == activityName);
            if(thisExercise){
                thisExercise.Duration += duration;
                thisExercise.Cycle += cycle;
            }else{
                thisUser.Workout.push({ ActivityName:activityName, Duration:duration, Cycle:cycle })
            } 
            //thisUser.AvailableExercises.splice( this.Me.)
            return thisUser; */
        } 

        this.CalculateTotal = (userId, today) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            thisUser.Today = today;
            return thisUser;
        }

        this.UploadImg = (userId, url) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            thisUser.UserProfile.ProfileImg = url;
            console.log('uploaded')
            //console.log(thisUser.UserProfile.ProfileImg)
        } 
        
        this.ReturnMember = (userId) => {
            
            //return this.Members;
            var thisUser = this.Members.find( x => x.UserId == userId );
            
            var i;
            for(i in this.Members)
                this.PossibleFriends.push(this.Members[i].UserId);
            //console.log(thisUser.PossibleFriends)
            var index = this.PossibleFriends.findIndex(x=>x.UserId == userId)
            this.PossibleFriends.splice(index, 1)
            var a;
            for (a in thisUser.Friend.Friends) {
                var exist = this.PossibleFriends.find(x => x.UserId == thisUser.Friend.Friends[a])
                if(exist){
                  this.PossibleFriends.splice( this.PossibleFriends.findIndex(x => x.UserId == thisUser.Friend.Friends[a]), 1 );
                }
            }
            var b;
            for (b in thisUser.Friend.MyRequests) {
                var existb = this.PossibleFriends.find(x => x.UserId == thisUser.Friend.MyRequests[b])
                if(existb){
                  this.PossibleFriends.splice( this.PossibleFriends.findIndex(x => x.UserId == thisUser.Friend.MyRequests[b]), 1 );
                }
            }
            var c;
            for (c in thisUser.Friend.RequestsToMe) {
                var existc = this.PossibleFriends.find(x => x.UserId == thisUser.Friend.RequestsToMe[c])
                if(existc){
                  this.PossibleFriends.splice( this.PossibleFriends.findIndex(x => x.UserId == thisUser.Friend.RequestsToMe[c]), 1 );
                }
            }

            //console.log(this.PossibleFriends) 
            return this.PossibleFriends
        }

        /* this.PropagateFriend = (userId) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            //console.log(thiUser)
            var a;
            for (a in this.Members) {
                thisUser.Friend.push({User:this.Members[a], AreYouMyFriend:false, DidYouRequest:false, DidIRequest:false});
            }
        } */
         
        //this.CurrentExercise = (text) => this.Members.find(function obj)
        /*
        this.FlipPicture = () => this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture+1) % PicturesStack.length ];

        this.SubmitQuote = (text, playerId) => this.PlayedQuotes.push({ Text: text, PlayerId: playerId });
        this.ChooseQuote = text => {
            this.PlayedQuotes.find(x=> x.Text == text).Chosen = true;
            this.DealerId = this.Players[this.DealerId = (this.DealerId + 1) % this.Players.length ] 
        }  
        */ 

        this.PutHistory = (userId, history) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            thisUser.WorkoutHistory = history;
            //return thisUser;
        }

        this.SendFriendReq = ( userId, myId, myRequests ) => {
            //console.log(this.Members)
            var thisUser = this.Members.find( x => x.UserId == myId );
            var otherUser = this.Members.find( x => x.UserId == userId );
            //console.log(thisUser)
            //console.log('otheruser found with j')
            //console.log(otherUser)
                //console.log(otherUser)
            otherUser.Friend.RequestsToMe.push(myId);
            thisUser.Friend.MyRequests = myRequests;
            //console.log()
            return thisUser;
        }

        this.AcceptFriend = (userId, myId, requests) => {
            var thisUser = this.Members.find( x => x.UserId == myId );
            var otherUser = this.Members.find( x => x.UserId == userId );
            
            var index = thisUser.Friend.RequestsToMe.findIndex( x=> x == userId);
            thisUser.Friend.RequestsToMe.splice(index, 1);
            thisUser.Friend.Friends.push(userId);
            otherUser.Friend.Friends.push(myId);

            var index1 = otherUser.Friend.MyRequests.findIndex( x=> x == myId);
            otherUser.Friend.MyRequests.splice(index1, 1);
            
        }

        this.FriendData = (friendList) => {
            console.log(friendList)
            if(friendList != undefined){
                var a;
                var friends = [];
                for (a in this.Members){
                    friends.push(this.Members.find( x => x.UserId == friendList[a] ))
                }
                return friends;
            }
           // var friend = this.Members.find( x => x.UserId == userId );
            return false;
        }

        this.GiveMe = (userId) => {
            var me = this.Members.find( x=> x.UserId == userId)
            return me;
        }

} 

module.exports = Tracker;  