import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import { User } from '../model/tracker';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  Me:User;
  Users:User[];
  constructor(private _Tracker: TrackerService, private _Router:Router) { 
    this.Me = _Tracker.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }

    if(this.Me){
      this.getAllMembers();
    }
  }

  ngOnInit() {
  }

  getAllMembers() {
    this._Tracker.getAllMembers();
    this.Users = this._Tracker.Users;
  }
}
