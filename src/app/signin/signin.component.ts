import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //Model = new Tracker();
  Me:User;
  private _api = "http://localhost:8080/fitTracker";
  success:boolean = true;
  staticAlertClosed = false;

  constructor(private http: Http, private _Tracker: TrackerService, private _Router: Router) { 
    this.Me = _Tracker.Me;
    this.success = this._Tracker.success;

  }

  ngOnInit() {
      setTimeout(() => this.staticAlertClosed = true, 5000);
 /* 
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null); */
  }

  login(name: string, password: string){
    this._Tracker.login(name, password);
    //this.success = this._Tracker.success;
    console.log('in component' + this.success);
    /* if(!this.success)
      this.success = false; */
    
  }

  isLoginSuccess(){
    if(this.Me)
      this.success = true;
    else  
      this.success = false;
  }
}
