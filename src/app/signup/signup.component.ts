import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TrackerService } from '../services/tracker.service';
import { User } from '../model/tracker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Me: User;
  isClick:boolean = false;
  //isJoined:boolean = false;

  private _api = "http://localhost:8080/fitTracker";

  constructor(private http: Http, private _Tracker: TrackerService) { 
    this.Me = _Tracker.Me;
    this._Tracker.isIdAvailable = false;
    
  }

  ngOnInit() {
  }

  

  signup(name: string, password: string){
      this._Tracker.signup(name, password);//delegate to service
      // this._Tracker.isIdAvailable = false;
  }

  
  isIdTaken(userId: string){
    this._Tracker.isIdTaken(userId);

  }

  submitInitialProfile(e: MouseEvent, name:string, age:number, heightft:number, heightin:number, weight:number, email:string) {
      e.preventDefault();
      var bmi = this.bmiCalculator(heightft, heightin, weight);
      this._Tracker.submitInitialProfile(name, age, heightft, heightin, weight, bmi, email);
      console.log('initialization success')
    
  }//need to do something here, or the profile won't work.

  toggleSignup(){
    this.isClick = !this.isClick;
  }

  bmiCalculator(heightft:number, heightin:number, weight:number){
    var height = heightft*12 + heightin;
    var bmi = Math.round((weight/height/height*703) * 10000)/100;
    return bmi;
    //console.log('user bmi ' + this.Me.UserProfile.Age)
  }

}
