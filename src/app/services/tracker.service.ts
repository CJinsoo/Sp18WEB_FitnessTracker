import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User, Tracker, Profile } from '../model/tracker';

@Injectable()
export class TrackerService {
  private _api = "http://localhost:8080/fitTracker";

  //Model = new Tracker();
  Me : User;
  success: boolean = true;
  //model = new Tracker();
  
  constructor(private http:Http, private _Router:Router) { 
    //this.model.Members.push()
    setInterval(() => this.refresh(), 1000)
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

  
}
