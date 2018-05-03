import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User, Tracker, Profile } from '../model/tracker';

@Injectable()
export class TrackerService {
  private _api = "http://localhost:8080/fitTracker";

  //Model = new Tracker();
  Me : User;
  success: boolean = true;
  zone:NgZone;
  //model = new Tracker();
  
  constructor(private http:Http, private _Router:Router) { 
    this.zone = new NgZone({enableLongStackTrace: false});

    //this.model.Members.push()
    //setInterval(() => this.refresh(), 1000)
    //this.Me = { UserId:'', UserProfile: <Profile>{}, Workout: [], CurrentWorkout: '', Password:'', AvailableExercises:[]};
  }

  

  refresh(){
    this.http.get(this._api + "/state")
      .subscribe()
  }

  signup(name: string, password: string) {

      //this.Model.Members.push(this.Me);

      console.log('signup successful')
      //this._Router.navigate(['/signin'])
      this.http.post(this._api + "/join", {UserId:name, Password:password})
        .subscribe(data =>{

          console.log('successful sign up')

          //if(data.json().sucess){//if there was no error, this is going to be true //passing status to the body//duplicate unneccessary
            
            this.Me = data.json();//Me becomes nothing
            //this.Me.AvailableExercises = [];
            this.getExercisesList();
          //}
        }, err => { //handling errors -> if there was an error on the server side, this is going to be executed
          console.log(err);//passing the status to the header
        })
  }


  login(name: string, password: string) {
    //var success:boolean;
    this.http.get(this._api + "/login", { params : {  name:name, password:password} })
    .subscribe(data=> {      
      if(!data.json()){
        this.success = false;
        console.log('in datajson ' + this.success)
        return;
      }
      this.Me = data.json()
      //this.Me.AvailableExercises = [];
      this._Router.navigate(['/home'])
      this.success = true;
      console.log('when is correct ' + this.success)
    })
    console.log('after all ' + this.success)
  }

  /* login(name: string, password: string) {
    if(this.Model.Members.find( x => x.UserId == name )){
      var user = this.Model.Members.find( x => x.UserId == name );
      if(user.Password == password)
        this.Me = user;
      console.log("login successful")
      this._Router.navigate(['/home'])
    }else{
      console.log("login failed")
      return false;
      //this._Router.navigate(['/home'])
    }
    

  } */

  submitInitialProfile(name:string, age:number, heightft:number, heightin:number, weight:number, bmi:number, email:string){
    /* this.Me.UserProfile.Name = name;
    this.Me.UserProfile.Age = age;
    this.Me.UserProfile.Heightft = heightft;
    this.Me.UserProfile.Heightin = heightin;
    this.Me.UserProfile.Weight = weight;
    this.Me.UserProfile.Email = email; */
    

    this.http.post(this._api + "/saveProfile", { UserId:this.Me.UserId, Name:name, Age:age, Heightft: heightft, Heightin: heightin, Weight: weight, Goal: '', Bmi: bmi, Email:email} )
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

   

  saveProfile(name:string, age:number, heightft:number, heightin:number, weight:number, goal:string, bmi:number, email:string){
    /* this.Me.UserProfile.Name = name;
    this.Me.UserProfile.Age = age;
    this.Me.UserProfile.Heightft = heightF;
    this.Me.UserProfile.Heightin = heightI;
    this.Me.UserProfile.Weight = weight;
    this.Me.UserProfile.Goal = goal;
    this.Me.UserProfile.Email = email;
 */

    this.http.post(this._api + "/saveProfile", { UserId:this.Me.UserId, Name:name, Age:age, Heightft: heightft, Heightin: heightin, Weight: weight, Goal: goal, Bmi: bmi, Email:email} )
    .subscribe(data=> {
      this.Me = data.json();
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

    })
  }

  selectExercise(text:string) {
    //var item = this.Me.AvailableExercises.splice( this.Me.AvailableExercises.indexOf(text), 1 );//Only if there's one quote submitted
    this.Me.CurrentWorkout = text;
    console.log(text)
    console.log(this.Me.CurrentWorkout)
  }

  submitExercise(duration:number, cycle:number){
    var thisExercise = this.Me.Workout.find( x => x.ActivityName == this.Me.CurrentWorkout);
        if(thisExercise){
            thisExercise.Duration += duration;
            thisExercise.Cycle += cycle;
        }else{
            this.Me.Workout.push({ ActivityName:this.Me.CurrentWorkout, Duration:duration, Cycle:cycle })
        } 
    //this.Me.Workout.push({ActivityName:this.Me.CurrentWorkout, Duration: duration, Cycle:cycle});
    this.http.post(this._api + "/exercises/submitExercise",{ Workout:this.Me.Workout, UserId:this.Me.UserId })
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

  calculateTotalToday() {
    this.http.post(this._api + "/exercises/calculateToday",{ UserId: this.Me.UserId })
        .subscribe(data => {
          this.Me = data.json();  
          //var item = this.Me.AvailableExercises.splice( this.Me.AvailableExercises.indexOf(text), 1 );//Only if there's one quote submitted
          //this.Me.CurrentWorkout = item[0];
          console.log('in calctoday' )
          console.log( this.Me.Today.TotalWorkout)
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
  
}
