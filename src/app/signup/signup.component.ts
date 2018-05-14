import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { User } from '../model/tracker';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    Me: User;

    staticAlertClosed = false;

    constructor(private _Tracker: TrackerService) { 
        this.Me = _Tracker.Me;
        
        // Prevent showing the initial profile forms after a user sign out and tries to sign up.
        this._Tracker.isIdAvailable = false;
    }

    ngOnInit() {
        // Using ng-bootstrap auto dismissing static alert message box method.
        setTimeout(() => this.staticAlertClosed = true, 5000);
    }

    // Checks if the user desired id is already in use. Calls isIdTaken() from service.
    isIdTaken(userId: string){
        this._Tracker.isIdTaken(userId);
    }

    // Let a user sign up using user id and password. Calls signup() from service.
    signup(name: string, password: string){
        this._Tracker.signup(name, password);
    }
    
    /* It submits the user's initial profile at the sign up. Calls submitInitialProfile() from service.
    Calls bmiCalculator() to calculate the bmi of the user. */
    submitInitialProfile(
        e: MouseEvent, name:string, age:number, heightft:number, 
        heightin:number, weight:number, email:string
    ){
        e.preventDefault();
        var bmi = this.bmiCalculator(heightft, heightin, weight);
        this._Tracker.submitInitialProfile(name, age, heightft, heightin, weight, bmi, email);
    }

    // Calculates the bmi of the user using their height and weight.
    bmiCalculator(heightft:number, heightin:number, weight:number){
        var height = (heightft*12 + heightin*1);
        var bmi = Math.round((weight/height/height*703) * 100)/100;
        return bmi;
    }
}
