import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import { User, TotalToday, Friends, Profile } from '../model/tracker';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit, OnDestroy{

  Me:User;
  Users:User[];
  data: any;
  interval:any;
  result:Subscription = new Subscription();
  result1:Subscription = new Subscription();
  //isSelectedFriend:boolean = false;
  thisFriend:string;
  myFriends:User[];
  public selectedFriend:User;

  constructor(private _Tracker: TrackerService, private _Router:Router) { 
    this.Me = _Tracker.Me;
    this.selectedFriend = this.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }

    if(this.Me){
      //console.log(_Tracker.myFriend.PossibleFriends)
      setInterval(() => 
      this.refreshData(), 1000);
      //console.log(this._Tracker.Users)
      //this.reReceiveMe();
      //this.getAllMember();
      //this.getFriends();
    }

    
  }

  ngOnDestroy() {
    this.result.unsubscribe();
    this.result1.unsubscribe();
    clearInterval(this.interval);
  }

  ngOnInit() {

    
    
    /* this._Tracker.getAllMembers().subscribe(data => {
      this.Users = data;
      var a;
      for (a in this.Me.Friend.RequestsToMe) {
        var exist = this.Users.find(x => x.UserId == this.Me.Friend.RequestsToMe[a])
        if(exist){
          this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.RequestsToMe[a]), 1 );
        }
      } 
    }); */
  }


  refreshData(){
    this.result = this._Tracker.getAllMembers()
        .subscribe(data => {
          this._Tracker.myFriend.PossibleFriends = data;
        /* var index = this.Users.findIndex( x => x.UserId == this.Me.UserId)
        if(index != -1)
          this.Users.splice(index, 1); */
        
        
            
    })

    this._Tracker.reGiveMe().subscribe(data=> {
      if(!data)
        return;
      this.Me = data;
       var a;
      /* for (a in this.Me.Friend.Friends) {
        var exist = this.Users.find(x => x.UserId == this.Me.Friend.Friends[a])
        if(exist){
          this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.Friends[a]), 1 );
        }
      } 

      var b;
      for (b in this.Me.Friend.MyRequests) {
        var exist1 = this.Users.find(x => x.UserId == this.Me.Friend.MyRequests[b])
        if(exist1){
          this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.MyRequests[b]), 1 );
        }
      }

      var c;
      for (c in this.Me.Friend.RequestsToMe) {
        var exist2 = this.Users.find(x => x.UserId == this.Me.Friend.RequestsToMe[c])
        if(exist2){
          this.Users.splice( this.Users.findIndex(x => x.UserId == this.Me.Friend.RequestsToMe[c]), 1 );
        }
      }  */
    })

    
    
  }

  getAllMember() {
    this._Tracker.getAllMembers();
 
    this.Users = this._Tracker.Users;
    //console.log(this._Tracker.Users)
    

   
  }

  reReceiveMe() {
    this._Tracker.reGiveMe();
  }

  sendFriendReq(e:MouseEvent, user:User) {
    /* var index = this.Users.findIndex(x => x.UserId == userId);
    this.Users.splice(index, 1);
    if(this.Me.Friend.MyRequests.find(x => x == userId) || this.Me.Friend.Friends.find(x => x == userId))
      return;  */   
    this._Tracker.sendFriendReq(user).subscribe(data => {
      //var index = this.Users.findIndex(x => x.UserId == this.thisFriend);
        //this.Users.splice( this.Users.findIndex(x => x.UserId == this.thisFriend), 1);
      })
    //this.thisFriend = userId;
  }

  /* acceptFriendReq(e:MouseEvent, userId:string) {
    this._Tracker.acceptFriendReq(userId);    
  }

  getFriends() {
    this._Tracker.getFriends();
  }

  showFriends(friend:string) {
    console.log(this._Tracker.myFriend)
    var thisFriend = this._Tracker.myFriend.find(x => x.UserId == friend);
    //this.isSelectedFriend = true;

    this.selectedFriend = thisFriend;
  }

  isThisUser = (userId) => ( this.Me.UserId == userId );

  isSelectedFriend = (friend) => { 
    if(this.selectedFriend != undefined)
      this.selectedFriend.UserId == friend 
    }


  returnMyFriends = () => {
    var x;
    for(x in this.Me.Friend.Friends){
      //this.myFriends.push( this.Me.Friend.Friends)
    }
  }
  inRequestToMe = (userId) => (this.Me.Friend.RequestsToMe.includes(userId))
  
  inMyRequests = (userId) => (this.Me.Friend.MyRequests.includes(userId))
   *//* select(e:MouseEvent, user:User) {
    this._Tracker.selectFriend(user);
  } */
}
