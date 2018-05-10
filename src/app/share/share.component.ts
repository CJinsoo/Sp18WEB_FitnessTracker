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
  Members:User[];
  ShowList:User[];
  data: any;
  interval:any;
  result:Subscription = new Subscription();
  result1:Subscription = new Subscription();
  //isSelectedFriend:boolean = false;
  thisFriend:string;
  myFriends:User[];
  selectedFriend:User;
  myReq:string[];
  reqToMe:User[];
  hideme=[];
  minusLength:number=1;
  thisHistory: TotalToday;
  isNeg1:boolean = false;


  constructor(private _Tracker: TrackerService, private _Router:Router) { 
    this.Me = _Tracker.Me;
    this.selectedFriend = this.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }

    if(this.Me){

      this.refreshData(); 
      this.interval = setInterval(() => {  
          this.refreshData();  
      }, 1000); 
      // setInterval(() => 
      // this.refreshData(), 1000);
      //console.log(this._Tracker.Users)
      //this.reReceiveMe();
      //this.getAllMember();
      //this.getFriends();
      this.thisHistory = {Date:'No friend selected yet', TotalTime:0, TotalWorkoutType:0, TotalWorkout:[]}
      this.minusLength = 1;
      this.isNeg1 = false;
      this.selectedFriend = {UserId:'', UserProfile:<Profile>{}, Workout:[], CurrentWorkout:'', Password:'', AvailableExercises:[], Today:<TotalToday>{}, WorkoutHistory:[], Friend:<Friends>{}};
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



  showPrev(friend:User) {
    this.minusLength += 1;
    console.log(this._Tracker.Me.WorkoutHistory.length)
    console.log(this._Tracker.Me.WorkoutHistory.length - this.minusLength)
    if(friend.WorkoutHistory.length - this.minusLength == -1){
      this.isNeg1 = true;
      // return;
    }
      
    this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length - this.minusLength];
  }
  
  showNext(friend:User) {
    this.minusLength -= 1;
    if(friend.WorkoutHistory.length - this.minusLength != -1){
      this.isNeg1 = false;
      // return;
    }
    this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length - this.minusLength];

  }
  
  selectFriend(friend: User) {
    this.selectedFriend = friend;
    //Friend should have a -1 array element that shows that there's no more history.
    if(friend.WorkoutHistory.length == 0)
      this.thisHistory = {Date:'Your friend has no history yet', TotalTime:0, TotalWorkoutType:0, TotalWorkout:[]}
    else
      this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length-1];
    console.log(this.thisHistory)
  }

  refreshData(){
    this.result = this._Tracker.getAllMembers()
        .subscribe(data => {
          this.Members = data;
            /* var myFriends = this.Members.filter(x=> 
                x.UserId != this.Me.UserId &&
                !this.Me.Friend.Friends.find(y=> x.UserId == y) &&
                !this.Me.Friend.MyRequests.find(y=> x.UserId == y) &&
                !this.Me.Friend.RequestsToMe.find(y=> x.UserId == y))
            this.ShowList = myFriends; */



       /*  var index = this.Users.findIndex( x => x.UserId == this.Me.UserId)
        //console.log(index)
        if(index != -1)
          this.Users.splice(index, 1); */
        // this.myReq = this.Me.Friend.MyRequests;
        // this.reqToMo = this.Me.Friend.RequestsToMe;
            
    })

    this._Tracker.getShowList().subscribe(data => {
          this.ShowList = data;
    })

    this._Tracker.reGiveMe().subscribe(data=> {
      if(!data)
        return;
      this.Me = data;
      this.reqToMe = this.Members.filter(x=> 
        this.Me.Friend.RequestsToMe.find(y=> x.UserId == y))

      this.myFriends = this.Members.filter(x=> 
        this.Me.Friend.Friends.find(y=> x.UserId == y))
    })

    
    
  }

  getAllMember() {
    this.result = this._Tracker.getAllMembers()
        .subscribe(data => {
          /* if(!data)
            return; */
            console.log(data)
          this.Members = data;
        }
        )}

  reReceiveMe() {
    this._Tracker.reGiveMe();
  }

  sendFriendReq(e:MouseEvent, userId:string) {
   /*  var index = this.Users.findIndex(x => x.UserId == userId);
    this.Users.splice(index, 1);
    if(this.Me.Friend.MyRequests.find(x => x == userId) || this.Me.Friend.Friends.find(x => x == userId))
      return;  */   
    this._Tracker.sendFriendReq(userId).subscribe(data => {
      //var index = this.Users.findIndex(x => x.UserId == this.thisFriend);
        //this.Users.splice( this.Users.findIndex(x => x.UserId == this.thisFriend), 1);
      })
    //this.thisFriend = userId;
  }

  acceptFriendReq(e:MouseEvent, userId:string) {
    this._Tracker.acceptFriendReq(userId);    
  }

  getFriends() {
    this._Tracker.getFriends();
  }

  showFriend(friend:string) {
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
  inRequestToMe = (userId) => (this.reqToMe.includes(userId))
  
  inMyRequests = (userId) => (this.myReq.includes(userId))
  /* select(e:MouseEvent, user:User) {
    this._Tracker.selectFriend(user);
  } */
}
