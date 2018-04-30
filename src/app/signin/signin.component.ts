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
  }

  ngOnInit() {
  }

  login(name: string, password: string){
    this.http.get(this._api + "/login", { params : {  name:name, password:password} })
    .subscribe(data=> {
      if(!data.json()){
        this.success = !this.success;
        return;
      }
      this._Tracker.Me = data.json()
      this._Router.navigate(['/home'])
    })

    //if(this.Me == null)
      //return false;
    
    /* var success = this._Tracker.login(name, password);//delegate to service
    if(!success){
      this.success = false;
    } */
    
  }

}
