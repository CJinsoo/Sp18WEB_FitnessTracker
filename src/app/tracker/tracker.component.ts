import { Component, OnInit } from '@angular/core';
import { User, Profile, Activity, TotalToday } from '../model/tracker';
import { Router } from '@angular/router';
import { TrackerService } from '../services/tracker.service';
import { MessagesService } from '../services/messages.service';

@Component({
    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  
    Me:User ;

    choice:boolean = false;
    date:Date;
    today:string;
    
    hideme=[];
    thisHistory: TotalToday; // Currently selected workout history/log via prev/next button
    minusLength:number = 1;
    isNoPrev:boolean = false; // Tells if there's no more previous workout history
    
    constructor(
        private _Tracker: TrackerService, 
        private _Router:Router,
        private _Messages: MessagesService
    ) { 
    
        this.Me = _Tracker.Me;
        this.date = new Date();
        this.today = this.date.toDateString();

        if(!this.Me){
            _Router.navigate(['/signin']);
        }
        
        if(this.Me){
            // Make the AvailableExercises list populated.
            this._Tracker.getExercisesList();

            // Set initial value to CurrentWorkout
            this.Me.CurrentWorkout = 'not selected';
            // Create in an array -1 element to flag that the array has reached the beginning(using prev, next button).
            this.Me.WorkoutHistory[-1] = {Date: 'No history yet!', TotalTime:0, TotalWorkoutType: 0, TotalWorkout: []};
            
            /* If the user's last workout history date does not match with today(actual date given by the computer system), 
            reset the summary and workout done list to give user a new day. */
            if(this.Me.WorkoutHistory[this.Me.WorkoutHistory.length-1].Date != this.today){
                this.Me.Today = {Date:this.today, TotalTime: 0, TotalWorkoutType:0, TotalWorkout:[]};
                this.Me.Workout = [];
                this.Me.WorkoutHistory.push(this.Me.Today);
            }

            // Set thisHistory with the user's last workout log/history(last element in the array of history).
            this.thisHistory = this.Me.WorkoutHistory[this.Me.WorkoutHistory.length-1];
        }
    }

    ngOnInit() {
    }

    /* Let user select exercise from the options, and it sets the CurrentWorkout with the item.
    Submission allowed only after at least once an exercise has been selected by the user. */
    selectExercise(e: MouseEvent, item: string){
        e.preventDefault();
        this.Me.CurrentWorkout = item;
        this.choice = true;
    }

    // Let user submit exercise with duration and cycle, by calling submitExercise() from service.
    submitWorkout(e: MouseEvent, duration:number, cycle:number, text: string){
        this._Tracker.submitExercise(duration, cycle);
        this._Messages.saveExerciseSuccessMessage();
    }

    /* It calculates the total summary of the workout done today by calling calculateTotalToday() 
    from service each time save button is clicked. */
    calculateTotalToday(e:MouseEvent) {
        e.preventDefault();
        this._Tracker.calculateTotalToday(this.today);
    }

    /* It pushes to the user's workout history the current day summary + workout list 
    every time save button is clicked by calling putHistory() from service. */
    putHistory(){
        this._Tracker.putHistory(this.today);
    }

    /* Invoked when the user tries to see the previous day workout history.
    The change in minusLength disables the button if there is no more previous history.
    It switchs display to previous history if there is one. */
    showPrev() {
        this.minusLength += 1;
        if(this.Me.WorkoutHistory.length - this.minusLength == -1){
            this.isNoPrev = true;
        }
        this.thisHistory = this.Me.WorkoutHistory[this.Me.WorkoutHistory.length - this.minusLength];
    }
    
    /* Invoked when the user tries to see the next day workout history.
    The change in minusLength enables the button if there is more previous history.
    It switchs display to next history if there is one. */
    showNext() {
        this.minusLength -= 1;
        if(this.Me.WorkoutHistory.length - this.minusLength != -1){
            this.isNoPrev = false;
        }
        this.thisHistory = this.Me.WorkoutHistory[this.Me.WorkoutHistory.length - this.minusLength];
    }
}
