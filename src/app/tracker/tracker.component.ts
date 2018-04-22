import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  Model = new Tracker();
  Me:User ;
  private _api = "http://localhost:8080/fitTracker";
  constructor(private http:Http) { 
    
    //http.get(this._api + "/exercises/getExercises").subscribe(data=> this.Me.MyQuotes = data.json())
  }

  ngOnInit() {
  }

}
