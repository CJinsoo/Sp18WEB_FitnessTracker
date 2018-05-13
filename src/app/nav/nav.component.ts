import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { User } from '../model/tracker';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isCollapsed = true;
  Me:User;
  constructor(private _Tracker: TrackerService) { 
    // this.Me = this._Tracker.Me;
  }

  ngOnInit() {
  }

  signOut(){
    if(confirm("Are you sure you want to sign out?"))
      this._Tracker.signOut();
    else
      return;
  }
}
