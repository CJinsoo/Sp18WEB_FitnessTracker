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
     
      console.log(this._Tracker.Users)
      this.reReceiveMe();
      this.getAllMember();
    }
  }

  ngOnInit() {
  }

  getAllMember() {
    this._Tracker.getAllMembers();
 
    this.Users = this._Tracker.Users;
    //console.log(this._Tracker.Users)
    var a;
    for (a in this.Me.Friend.RequestsToMe) {
      var exist = this.Users.find(x => x.UserId == this.Me.Friend.RequestsToMe[a])
      if(exist){
        this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.RequestsToMe[a]), 1 );
      }
    }
    //console.log(this._Tracker.Users)

   
  }

  reReceiveMe() {
    this._Tracker.reGiveMe();
  }

  sendFriendReq(e:MouseEvent, userId:string) {
    this._Tracker.sendFriendReq(userId);
  }

  acceptFriendReq(e:MouseEvent, userId:string) {
    this._Tracker.acceptFriendReq(userId);    
  }

  isThisUser = (userId) => ( this.Me.UserId == userId );
  
  /* select(e:MouseEvent, user:User) {
    this._Tracker.selectFriend(user);
  } */
}
