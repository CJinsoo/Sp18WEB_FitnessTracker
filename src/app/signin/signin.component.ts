import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';

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

  constructor(private http: Http, private _Tracker: TrackerService, private _Router: Router) { 
    this.Me = _Tracker.Me;
    this.success = this._Tracker.success;

  }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._Tracker.login(name, password);
    //this.success = this._Tracker.success;
    console.log('in component' + this.success);
    /* if(!this.success)
      this.success = false; */
    
  }

}
