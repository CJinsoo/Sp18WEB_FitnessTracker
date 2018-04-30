import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //Model = new Tracker();
  //Me:User;
  //private _api = "http://localhost:8080/fitTracker";

  success:boolean = true;
  constructor(private http: Http, private _Tracker: TrackerService) { }

  ngOnInit() {
  }

  login(name: string, password: string){
    var success = this._Tracker.login(name, password);//delegate to service
    if(!success){
      this.success = false;
    }
  }
}
