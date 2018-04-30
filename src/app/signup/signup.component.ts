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

    setInterval(() => this.refresh(), 1000)
  }

  ngOnInit() {
  }

  signup(name: string, password: string){
    this._Tracker.signup(name, password);//delegate to service
    this.join();
  }

  refresh(){
    this.http.get(this._api + "/state")
      .subscribe()
  }

  submitInitialProfile(e: MouseEvent, name:string, age:number, heightft:number, heightin:number, weight:number, email:string) {
    e.preventDefault();
    this._Tracker.submitInitialProfile(name, age, heightft, heightin, weight, email);
    console.log('initialization success')
  }

  toggleSignup(){
    this.isClick = !this.isClick;
  }

  join(){
    this.http.get(this._api + "/join", { params : { userId:this._Tracker.Me.UserId, password:this._Tracker.Me.Password} })
    .subscribe()
  }
}
