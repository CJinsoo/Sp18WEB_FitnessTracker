import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { User } from '../model/tracker';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
    Me:User;
    public isCollapsed = true;

    constructor(private _Tracker: TrackerService) {}

    ngOnInit() {
    }

    // let user sign out after asking for a confirmation. Calls signOut() from service.
    // if they cancel, it doesn't do anything.
    signOut(){
        if(confirm("Are you sure you want to sign out?"))
            this._Tracker.signOut();
        else
            return;
    }
}
