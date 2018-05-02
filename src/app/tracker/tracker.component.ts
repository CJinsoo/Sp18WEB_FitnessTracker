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
  choice:boolean = false;
  //initiation:boolean = false;
  date:Date;
  today:string;
  //today = "" + this.date.getMonth() + this.date.getDate() + this.date.getUTCMonth;

  private _api = "http://localhost:8080/fitTracker";
  constructor(private http:Http, private _Tracker: TrackerService, private _Router:Router) { 
    this.messages = ['Choose activities and start recording your workout results']
    //http.get(this._api + "/exercises/getExercises").subscribe(data=> this.Me.MyQuotes = data.json())
    this.Me = _Tracker.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }
    if(this.Me){
      this.getExercisesList();
      this.Me.CurrentWorkout = 'not selected';
    }
    this.date = new Date();
    this.today = this.date.toDateString();
   //this.today = 
  }

  ngOnInit() {
  }

  selectExercise(e: MouseEvent, item: string){
    e.preventDefault();
    this._Tracker.selectExercise(item);
    /* this.http.post(this._api + "/exercises/selectWorkout",{ ActivityName: item})
        .subscribe(data => {//if successful, don't do anything - because it refreshes automatically

        }, err => {//check error
          console.log(err);
        }); */
    this.Me.CurrentWorkout = this._Tracker.Me.CurrentWorkout;
    this.choice = true;
    //console.log('reacting' + item)
    //console.log()
  }

  getExercisesList(){
    this._Tracker.getExercisesList();
    //this.initiation = true;
  }

  submitWorkout(e: MouseEvent, duration:number, cycle:number, text: string){
    this._Tracker.submitExercise(duration, cycle);
    /*   this.http.post(this._api + "/exercises/selectWorkout",{ CurrentWorkout: item })
        .subscribe(data => {

        }, err => {
          console.log(err);
        }); */
    //this.Me.CurrentWorkout = text;
    this.choice = false;
    this.Me.CurrentWorkout = 'not selected';
  }

  calculateTotalToday(e: MouseEvent) {
    this._Tracker.calculateTotalToday();
  }

}
