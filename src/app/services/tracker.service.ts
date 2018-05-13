import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User, Tracker, Profile, TotalToday, Friends } from '../model/tracker';
import 'rxjs/add/operator/map';
import { MessagesService } from './messages.service';

@Injectable()
export class TrackerService {
  private _api = "http://localhost:8080/fitTracker";

  Me : User;
  Users:User[] = [];
  success: boolean = true;
  myFriend: User[] = [];
  isIdAvailable:boolean = false;

  constructor(private http:Http, private _Router:Router, private _Messages:MessagesService) { 

    //this.Me = { UserId:'', UserProfile: <Profile>{}, Workout: [], CurrentWorkout: '', Password:'', AvailableExercises:[]};
  }

  

  /* refresh(){
    this.http.get(this._api + "/state")
      .subscribe()
  } */

  signOut(){
    this.Me = null;
    this._Messages.signOutSuccessMessage();
  }

  onReadOnly() {
    document.getElementById('userIdInput').setAttribute("readonly", "true");
  }

  isLoginFail(text:string) {
    document.getElementById('isLoginFail').textContent= text;

  }

  getHomePics() {
    return this.http.get(this._api + "/getPic", {})
      .map((response:Response) => response.json());
  }

  isIdTaken(name: string) {
    this.http.get(this._api + "/join/taken", { params: { UserId:name}})
    .subscribe(data => {
      if(!data.json()){
        alert('User name already taken');
        this.isIdAvailable = false;
      }
      else{
        this.isIdAvailable = true;
        this.onReadOnly();
      }
      /* if(!data.json()){
        alert('UserId already exists');
        return;
      } */
      return data.json();
    });
  }

  signup(name: string, password: string) {

      this.Me = { UserId:name, Workout:[], CurrentWorkout:'', UserProfile: <Profile>{}, 
                  Password: password, AvailableExercises:[], Today:{Date:'', TotalTime:0, 
                  TotalWorkoutType:0, TotalWorkout:[]}, WorkoutHistory:[], 
                  Friend:<Friends>{Friends:[], MyRequests:[], RequestsToMe:[]}};
      //this.Me = {UserId:name, Workout:[], CurrentWorkout:'', UserProfile: <Profile>{}, Password: password, AvailableExercises:[], Today:{Date:'', TotalTime:0, TotalWorkoutType:0, TotalWorkout:[]}, WorkoutHistory:[], Friend:[]};
      console.log(this.Me.Friend)
      this.http.post(this._api + "/join", {User:this.Me})
        .subscribe(data =>{
          console.log('successful sign up')

          //this.Me.Friend = Friends[data.json()]
          //if(data.json().sucess){//if there was no error, this is going to be true //passing status to the body//duplicate unneccessary
            this._Messages.signUpSuccessMessage(this.Me.UserId);

            //this.Me = data.json();//Me becomes nothing
            //this.Me.AvailableExercises = [];
            this.getExercisesList();
            // console.log('in sign up in service: my possible freinds list is:')
            // console.log(this.Me.PossibleFriends)
          //}
        }, err => { //handling errors -> if there was an error on the server side, this is going to be executed
          console.log(err);//passing the status to the header
        });
        
        
  }

  login(name: string, password: string) {

    this.http.get(this._api + "/login", { params : {  name:name, password:password} })
    .subscribe(data=> {      
      if(!data.json()){
        this._Messages.logInFailMessage();
        // this.success = false;
        // console.log('in datajson ' + this.success)
        this.isLoginFail("Log in Failed");
        setTimeout(() => this.isLoginFail(""), 3000);
        return;
      }
      this.Me = data.json()
      //this.Me.AvailableExercises = [];
      // this.success = true;
      // document.getElementById('isLoginFail').textContent= "";

      this._Router.navigate(['/home'])
      this._Messages.logInSuccessMessage(this.Me.UserId);
      
      // console.log('when is correct ' + this.success)
    })
    // console.log('after all ' + this.success)
  }

  uploadImage(url:string){
    this.Me.UserProfile.ProfileImg = url;
    try{    
      this.http.post(this._api + "/uploadImg", { UserId:this.Me.UserId, ProfileImg:url }).subscribe();
    }catch(error){
      alert('Should be no larger than 50mb.')
    }
    console.log('uploadImage in service clicked')
  }

  submitInitialProfile(name:string, age:number, heightft:number, heightin:number, weight:number, bmi:number, email:string){
    this.Me.UserProfile.Name = name;
    this.Me.UserProfile.Age = age;
    this.Me.UserProfile.Heightft = heightft;
    this.Me.UserProfile.Heightin = heightin;
    this.Me.UserProfile.Weight = weight;
    this.Me.UserProfile.Bmi = bmi;
    this.Me.UserProfile.Email = email; 
    this.Me.UserProfile.ProfileImg = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
    
    this.http.post(this._api + "/saveProfile",  { UserProfile:this.Me.UserProfile, UserId: this.Me.UserId } )
    .subscribe(data=> {
      this.Me = data.json();
      //this.Me = obj;
      /* if(data.json())
        return;
       */
      //this.bmiCalculator();

      this._Router.navigate(['/home']);
    });
  }

  saveProfile(me:User){
    
 
    this.http.post(this._api + "/saveProfile", { UserProfile:me.UserProfile, UserId: this.Me.UserId } )
    .subscribe(data=> {
      //this.Me = data.json();
      //this.Me = obj;
      /* if(data.json())
        return;
      */
      //this.bmiCalculator();

      //this._Router.navigate(['/home']);
      //this.refresh();
      
    });
  }

  getExercisesList() {
    this.http.get(this._api + "/exercises/getExercises", {})
    .subscribe(data=>{
      this.Me.AvailableExercises = data.json();
      // this.Me.AvailableExercises.some
    })
  }

  selectExercise(text:string) {
    //var item = this.Me.AvailableExercises.splice( this.Me.AvailableExercises.indexOf(text), 1 );//Only if there's one quote submitted
    this.Me.CurrentWorkout = text;
    console.log(text)
    console.log(this.Me.CurrentWorkout)
  }

  //just send thisExercise
  submitExercise(duration:number, cycle:number){
    var thisExercise = this.Me.Workout.find( x => x.ActivityName == this.Me.CurrentWorkout);
        if(thisExercise){
            thisExercise.Duration += duration;
            thisExercise.Cycle += cycle;
        }else{
            thisExercise = { ActivityName:this.Me.CurrentWorkout, Duration:duration, Cycle:cycle };
            this.Me.Workout.push(thisExercise)
        } 
    //this.Me.Workout.push({ActivityName:this.Me.CurrentWorkout, Duration: duration, Cycle:cycle});
    this.http.post(this._api + "/exercises/submitExercise",{ Workout:thisExercise, UserId:this.Me.UserId })
        .subscribe(data => {
          ///this.Me = data.json();  
          //var item = this.Me.AvailableExercises.splice( this.Me.AvailableExercises.indexOf(text), 1 );//Only if there's one quote submitted
          //this.Me.CurrentWorkout = item[0];
          //console.log(this.Me.Workout)
          //}
        }, err => {
          console.log(err);
        });
      
  } 

  calculateTotalToday(date:string) {
    this.Me.Today.TotalWorkout = this.Me.Workout;
    this.Me.Today.TotalTime = 0;
    this.Me.Today.TotalWorkoutType = this.Me.Today.TotalWorkout.length;
    this.Me.Today.Date = date;
    console.log(this.Me.Today.TotalWorkout.length)
    var x;
    for (x in this.Me.Today.TotalWorkout) {
        this.Me.Today.TotalTime += this.Me.Today.TotalWorkout[x].Duration;
    }
    console.log(this.Me.Today.TotalTime)
    this.http.post(this._api + "/exercises/calculateToday",{ UserId: this.Me.UserId, Today: this.Me.Today})
        .subscribe(data => {
          //this.Me = data.json();  
          //var item = this.Me.AvailableExercises.splice( this.Me.AvailableExercises.indexOf(text), 1 );//Only if there's one quote submitted
          //this.Me.CurrentWorkout = item[0];
          //console.log('in calctoday' )
          //console.log( this.Me.Today.TotalWorkout)
          //}
        }, err => {
          console.log(err);
        });
  }
  /* initListeners() {
    this.socketSvc.socket.on('success', (data) => {
        this.zone.run(() => {
            this.myList = data;
            console.log('Updated List: ', this.myList);
        });
    });
} */
  
  putHistory(date:string) {
    var thisDate = this.Me.WorkoutHistory.find( x => x.Date == date);
    if(!thisDate)
      this.Me.WorkoutHistory.push(this.Me.Today);
    else{
      thisDate.TotalTime = this.Me.Today.TotalTime;
      thisDate.TotalWorkout = this.Me.Today.TotalWorkout;
      thisDate.TotalWorkoutType = this.Me.Today.TotalWorkoutType;
    }
      this.http.post(this._api + "/putHistory",{ UserId: this.Me.UserId, History: this.Me.WorkoutHistory})
        .subscribe(data => {
          
        }, err => {
          console.log(err);
        });
      console.log(this.Me.WorkoutHistory)
  }

  getAllMembers() {
    /* this.http.post(this._api + "/propagateFriend", { UserId: this.Me.UserId })
    .subscribe(data=> {
      this.Users = data.json();
      var index = this.Users.findIndex( x => x.UserId == this.Me.UserId)
      if(index != -1)
        this.Users.splice(index, 1);
     
    }) */
   return this.http.get(this._api + "/returnMember", { })
    .map((response:Response) => response.json());
     /* .subscribe(data=> {
      this.Users = data.json();
      //console.log(this.Users)
      var index = this.Users.findIndex( x => x.UserId == this.Me.UserId)
      //console.log(index)
      if(index != -1)
        this.Users.splice(index, 1);
      var a;
      for (a in this.Me.Friend.RequestsToMe) {
        var exist = this.Users.find(x => x.UserId == this.Me.Friend.RequestsToMe[a])
        if(exist){
          this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.RequestsToMe[a]), 1 );
        }
      } 
      //console.log(this.Users)
    })   */

    
  }

  getShowList() {
    return this.http.get(this._api + "/returnShowList", {params: {UserId:this.Me.UserId} })
    .map((response:Response) => response.json());
  }

  acceptFriendReq(userId:string){
    var thisReq = this.Me.Friend.RequestsToMe.findIndex( x => x == userId)
    this.Me.Friend.RequestsToMe.splice(thisReq, 1)
    this.http.post(this._api + "/friend/accept", { UserId: userId, MyUserId: this.Me.UserId, RequestsToMe:this.Me.Friend.RequestsToMe })
    .subscribe(data => {
    })
  }

  sendFriendReq(userId:string) {
    /* if(this.Me.Friend.MyRequests.find(x => x == userId) || this.Me.Friend.Friends.find(x => x == userId))
      return;
    this.Me.Friend.MyRequests.push(userId); */
    console.log('UserId passed from component ts')
    console.log(userId)
    return this.http.post(this._api + "/friend/req", { UserId: userId, MyUserId: this.Me.UserId, MyRequests:this.Me.Friend.MyRequests })
    .map((response:Response) => response.json())
    /* .subscribe(data => {
    }) */
  }

  getFriends(){
    this.http.get(this._api + "/getFriendsData", {params: {Friend:this.Me.Friend.Friends}})
    .subscribe(data => {
      if(!data.json())
        return;
      this.myFriend = data.json();
      console.log('in getFriends service.ts myFriend is')
      console.log(this.myFriend)
    });
  }

  reGiveMe(){
    return this.http.get(this._api + "/giveMe", {params: {UserId:this.Me.UserId}})
    .map((response:Response) => response.json());
    /* .subscribe(data=> {
      if(!data.json())
        return;
      this.Me = data.json()
    }) */
  }
}
