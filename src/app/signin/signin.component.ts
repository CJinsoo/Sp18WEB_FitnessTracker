import { Component, OnInit } from '@angular/core';
import { User } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
    Me:User;
    staticAlertClosed = false;

    constructor(private _Tracker: TrackerService) { 
        this.Me = _Tracker.Me;
    }

    ngOnInit() {
        // Using ng-bootstrap auto dismissing static alert message box method.
        setTimeout(() => this.staticAlertClosed = true, 5000);
    }

    // Let a user log in by calling login function in service.
    login(name: string, password: string){
        this._Tracker.login(name, password);
    }
}
