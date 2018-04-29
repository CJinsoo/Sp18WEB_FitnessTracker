import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User, Tracker } from '../model/tracker';

@Injectable()
export class TrackerService {
  
  Model = new Tracker();
  Me : User;

  constructor(private http:Http, private _Router:Router) { 

  }

  signup(name: string, password: string) {

      this.Me = { UserId: name, UserProfile: null, Workout: [], CurrentWorkout: '', Password:password};//Me becomes nothing
      this.Model.Members.push(this.Me);

      console.log('signup successful')
      this._Router.navigate(['/signin'])
  }

  login(name: string, password: string) {
    if(this.Model.Members.find( x => x.UserId == name )){
      var user = this.Model.Members.find( x => x.UserId == name );
      if(user.Password == password)
        this.Me = user;
      console.log("login successful")
      this._Router.navigate(['/profile'])
    }else{
      console.log("login failed")
      this._Router.navigate(['/home'])
    }
    

  }
}
