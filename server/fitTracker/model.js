
//var axios = require("axios");
//axios.get(' https://wger.de/api/v2/exerciseinfo')
//    .then( response => TipsStack = response.data.data.exerciseinfo)
const ExerciseStack = [
    "Squat", "Leg Press", "Lunge", "Deadlift", "Leg Extension", "Leg Curl", "Standing Calf Raise", "Seated Calf Raise",
    "Bench Press", "Chest fly", "Push Up", "Pull Down", "Pull Up", "Shoulder Press", "Triceps Extension", "Biceps Curl",
    "Crunch", "Lunge", "Plank", "Running", "Mild Walking", "Fast Walking", "Yoga", "Tabata", "Dance", "Step"
]
const PicStack = [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb4481aac50fea7917a2c6ad4617c94f&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-0.3.5&s=e0412f6131d734fc08414df85c30fec9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1517498559795-28a423c31125?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d40d06e284aae2df1f87cd17be6e68f7&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c15305e72c1ead61b6b23d4b0041de66&auto=format&fit=crop&w=2102&q=80",
    "https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1259fd925b084840234a8d8d43e842b8&auto=format&fit=crop&w=2167&q=80",
    "https://images.unsplash.com/photo-1484583066749-c2129489f52f?ixlib=rb-0.3.5&s=08a5c659fcc4b2d3a6b5d5441b37702c&auto=format&fit=crop&w=2090&q=80",
    "https://images.unsplash.com/photo-1468471463214-871d4633005d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6937b5dfece3f5c1d7346609d515ef33&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1487161874013-35eede6cca03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74c90c952406cf3550fb25729c749d53&auto=format&fit=crop&w=2089&q=80",
    "https://images.unsplash.com/photo-1480264104733-84fb0b925be3?ixlib=rb-0.3.5&s=25ec5368a0f13e529c1f04c9878d6682&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1516922654979-6833a58a1b83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81c8acc08372891e76bd00e973bbbeb7&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-0.3.5&s=a6c1d04bc196c7f04da02f525e696fae&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1507761906261-d31a39975ce4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a9c332b97c7de0174f4fc9c8057f140&auto=format&fit=crop&w=2100&q=80"
    ];

function Tracker() {
  
        this.Members = [];

        this.ReturnHomePics = () => {
            return [1, 2, 3, 4, 5].map(() => {
                const randomId = PicStack[Math.floor(Math.random() * PicStack.length)];
                return randomId;
            });        
        }

        this.IsIdTaken = (userId, password) => {
            if(this.Members.find( x => x.UserId == userId ))
                return false;
            else
                return true;
        }

        this.SignUp = ( user) => {
            /* var a=0;
            for(a in this.Members){
                this.Members[a].PossibleFriends.push(user.UserId);
                console.log(this.Members[a].PossibleFriends)
            } 
            //console.log(this.Members[0].PossibleFriends)
            //user.Friend = Friends[this.Members.len]
            var b=0;
            for(b in this.Members)
                user.PossibleFriends.push(this.Members[b].UserId) */
            //user.Friend = {Friends= new Array(), MyRequests = new Array(), RequestsToMe = new Array()}
            var len = this.Members.push(user);
            // console.log(user.PossibleFriends)
            //var thisUser = this.Members.find(x=>x.UserId == user.UserId)
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
                    return foundUser;
                }else{
                    console.log("wrong password")
                    return false;
                }
            }else{
                console.log("could not find user")
                return false;
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
            var thisExercise = thisUser.Workout.find( x => x.ActivityName == workout.ActivityName);
            if(thisExercise){
                thisExercise.Duration += workout.duration;
                thisExercise.Cycle += workout.cycle;
            }else{
                thisUser.Workout.push(workout)
            } 
            // thisUser.Workout = workout;
            //Should I just push here as well?

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
        } 
        
        this.ReturnMembers = () => {
            return this.Members;
        }

        this.ReturnShowList = (userId) => {
            var thisUser = this.Members.find(x=>x.UserId == userId)
            // console.log(thisUser.Friend)
            var myFriends = this.Members.map(x=> ({
                User: { UserId: x.UserId, UserProfile:{ ProfileImg: x.UserProfile.ProfileImg, Name: x.UserProfile.Name, Age: x.UserProfile.Age, Email: x.UserProfile.Email}, WorkoutHistory:x.WorkoutHistory },
                isMe: x.UserId == userId,
                isFriend: thisUser.Friend.Friends.some(y=> x.UserId == y),
                isMyRequest: thisUser.Friend.MyRequests.some(y=> x.UserId == y),
                isRequestsToMe: thisUser.Friend.RequestsToMe.some(y=> x.UserId == y)

            }))

            
            // console.log('current myFriends')
            // console.log(thisUser.Friend.MyRequests)
            // console.log(myFriends)
            return myFriends;
           

            /* var thisUser = this.Members.find( x => x.UserId == userId );
            
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
            return this.PossibleFriends */
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

        this.PutHistory = (userId, history) => {
            var thisUser = this.Members.find( x => x.UserId == userId );
            thisUser.WorkoutHistory = history;
            //return thisUser;
        }

        this.SendFriendReq = ( userId, myId, myRequests ) => {
            var thisUser = this.Members.find( x => x.UserId == myId );
            var otherUser = this.Members.find( x => x.UserId == userId );
            otherUser.Friend.RequestsToMe.push(myId);
            thisUser.Friend.MyRequests.push(userId);
            console.log(thisUser.Friend.MyRequests)
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
            //console.log(friendList)
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