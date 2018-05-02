import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User, Tracker, Profile } from '../model/tracker';

@Injectable()
export class TrackerService {
  private _api = "http://localhost:8080/fitTracker";

  //Model = new Tracker();
  Me : User;

  constructor(private http:Http, private _Router:Router) { 

  }

  signup(name: string, password: string) {

      this.Me = { UserId: name, UserProfile: <Profile>{}, Workout: [], CurrentWorkout: '', Password:password};//Me becomes nothing
      //this.Model.Members.push(this.Me);

      console.log('signup successful')
      //this._Router.navigate(['/signin'])
      this.http.get(this._api + "/join", { params : { userId:this.Me.UserId, password:this.Me.Password} })
        .subscribe()
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

  submitInitialProfile(name:string, age:number, heightft:number, heightin:number, weight:number, email:string){
    /* this.Me.UserProfile.Name = name;
    this.Me.UserProfile.Age = age;
    this.Me.UserProfile.Heightft = heightft;
    this.Me.UserProfile.Heightin = heightin;
    this.Me.UserProfile.Weight = weight;
    this.Me.UserProfile.Email = email; */
    

    this.http.get(this._api + "/join/initialize", { params : { id:this.Me.UserId, name:name, age:age, heightft: heightft, heightin: heightin, weight: weight, email:email} })
    .subscribe(data=> {
      this.Me = data.json();
      //this.Me = obj;
      /* if(data.json())
        return;
       */
      this.bmiCalculator();

      this._Router.navigate(['/home']);
      
    });
    
  
  }

  bmiCalculator(){
    var height = this.Me.UserProfile.Heightft*12 + this.Me.UserProfile.Heightin;
    this.Me.UserProfile.Bmi = Math.round((this.Me.UserProfile.Weight/height/height*703) * 10000)/100;
    console.log('user bmi ' + this.Me.UserProfile.Age)
  } 

  saveProfile(name:string, age:number, heightF:number, heightI:number, weight:number, goal:string, email:string){
    this.Me.UserProfile.Name = name;
    this.Me.UserProfile.Age = age;
    this.Me.UserProfile.Heightft = heightF;
    this.Me.UserProfile.Heightin = heightI;
    this.Me.UserProfile.Weight = weight;
    this.Me.UserProfile.Goal = goal;
    this.Me.UserProfile.Email = email;

  }

  
}
