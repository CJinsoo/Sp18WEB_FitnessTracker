import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isClick:boolean = false;
  constructor(private http: Http, private _Tracker: TrackerService) { }

  ngOnInit() {
  }

  signup(name: string, password: string){
    this._Tracker.signup(name, password);//delegate to service
    
  }

  submitInitialProfile(name:string, age:number, heightft:number, heightin:number, weight:number, email:string) {
    this._Tracker.submitInitialProfile(name, age, heightft, heightin, weight, email);
    console.log('initialization success')
  }

  toggleSignup(){
    this.isClick = !this.isClick;
  }
}
