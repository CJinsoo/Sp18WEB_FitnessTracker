import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker, Profile, Activity, TotalToday } from '../model/tracker';
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
  hideme=[];
  thisHistory: TotalToday;
  minusLength:number = 1;
  isNeg1:boolean = false;
  
  private _api = "http://localhost:8080/fitTracker";
  constructor(private http:Http, private _Tracker: TrackerService, private _Router:Router) { 
  
    this.messages = ['Choose activities and start recording your workout results']
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
    
    if(this.Me){
      this._Tracker.Me.WorkoutHistory[-1] = {Date: 'No history yet!', TotalTime:0, TotalWorkoutType: 0, TotalWorkout: []};
      
      if(this._Tracker.Me.WorkoutHistory[this.Me.WorkoutHistory.length-1].Date != this.today){
        this._Tracker.Me.Today = {Date:this.today, TotalTime: 0, TotalWorkoutType:0, TotalWorkout:[]}
        this._Tracker.Me.Workout = [];
        this._Tracker.Me.WorkoutHistory.push(this._Tracker.Me.Today)
      }
      this.thisHistory = this.Me.WorkoutHistory[this.Me.WorkoutHistory.length-1];
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

  showPrev() {
    this.minusLength += 1;
    console.log(this._Tracker.Me.WorkoutHistory.length)
    console.log(this._Tracker.Me.WorkoutHistory.length - this.minusLength)
    if(this._Tracker.Me.WorkoutHistory.length - this.minusLength == -1){
      this.isNeg1 = true;
      // return;
    }
      
    this.thisHistory = this._Tracker.Me.WorkoutHistory[this._Tracker.Me.WorkoutHistory.length - this.minusLength];
  }
  
  showNext() {
    this.minusLength -= 1;
    if(this._Tracker.Me.WorkoutHistory.length - this.minusLength != -1){
      this.isNeg1 = false;
      // return;
    }
    this.thisHistory = this._Tracker.Me.WorkoutHistory[this._Tracker.Me.WorkoutHistory.length - this.minusLength];

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
