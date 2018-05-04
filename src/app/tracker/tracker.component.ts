import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker, Profile, Activity } from '../model/tracker';
import { Router } from '@angular/router';
import { TrackerService } from '../services/tracker.service';
//import { Observable } from 'rxjs/Observable';

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
   //this.initListeners();
    if(this.Me){
      this.putHistory();
      this._Tracker.Me.WorkoutHistory[-1] = {Date: '', TotalTime:0, TotalWorkoutType: 0, TotalWorkout: []};
      console.log(this.Me.WorkoutHistory[length-1].Date)
      console.log(this.today)
      if(this._Tracker.Me.WorkoutHistory[length-1].Date != this.today){
        this._Tracker.Me.Today = {Date:'', TotalTime: 0, TotalWorkoutType:0, TotalWorkout:[]}
        console.log('reset complete')
        console.log(this._Tracker.Me.Today)
      }
  }
    
  }


  ngOnInit() {
  }


/*   getIndicatorsStream(): Observable {
    return Observable.create((observer) => {
      let eventSource = this.sseService
                          .createEventSource('http://localhost:8080/fitTracker');
      eventSource.onmessage = (event) => {
        this.zone.run(() => observer.next(JSON.parse(event.data)));
      };
      eventSource.onerror = (error) => observer.error(error);
  });
} */

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

  calculateTotalToday(e:MouseEvent) {
    e.preventDefault();
    this._Tracker.calculateTotalToday(this.today);
    this.Me.Workout = this._Tracker.Me.Workout;
    //return true; 
  }

  putHistory(){
    this._Tracker.putHistory(this.today);
  }

}
