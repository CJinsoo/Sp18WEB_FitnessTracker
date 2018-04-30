import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker, Profile, Activity } from '../model/tracker';
import { Router } from '@angular/router';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  Me:User ;
  messages:string[];

  private _api = "http://localhost:8080/fitTracker";
  constructor(private http:Http, private _Tracker: TrackerService, private _Router:Router) { 
    this.messages = ['Choose activities and start recording your workout results']
    //http.get(this._api + "/exercises/getExercises").subscribe(data=> this.Me.MyQuotes = data.json())
    this.Me = _Tracker.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }
  }

  ngOnInit() {
  }

  selectWorkout(e: MouseEvent, item: string){
    this.http.post(this._api + "/exercises/selectWorkout",{ ActivityName: item})
        .subscribe(data => {//if successful, don't do anything - because it refreshes automatically

        }, err => {//check error
          console.log(err);
        });
  }

  select(e: MouseEvent, item: string){
    this.http.post(this._api + "/exercises/selectWorkout",{ CurrentWorkout: item })
        .subscribe(data => {

        }, err => {
          console.log(err);
        });
  }
}
