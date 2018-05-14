import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import { User, TotalToday, Friends, Profile } from '../model/tracker';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from '../services/messages.service';
import {Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge} from 'rxjs/operators';


@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit, OnDestroy{

    Me:User;

    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);


    date:Date;
    today:string;

    Members:User[];
    ShowList:any[] = [];
    myFriends:User[];
    myReq:string[];
    reqToMe:User[];

    interval:any;
    result:Subscription = new Subscription();
    
    selectedFriend:User; // Currently selected friend by the user to see the workout log
    thisHistory: TotalToday; // Currently selected friend's current workout history/log
    minusLength:number = 1;
    isNoPrev:boolean = false; // Tells if there's no more previous workout history
    
    hideme = [];

    constructor(
        private _Tracker: TrackerService, 
        private _Router:Router, 
        private _Messages: MessagesService,
        private http: Http
    ) { 
        this.Me = _Tracker.Me;
        this.date = new Date();
        this.today = this.date.toDateString();
        
        this.selectedFriend = this.Me;

        if(!this.Me){
            _Router.navigate(['/signin']);
        }

        if(this.Me){
            this.interval = setInterval(() => {  
                this.refreshData();  
            }, 1000); 

            // Initialize thisHistory to empty object
            this.thisHistory = {Date:'No friend selected yet', TotalTime:0, TotalWorkoutType:0, TotalWorkout:[]}
            this.minusLength = 1;
            this.isNoPrev = true;
            // Initialize selectedFriend to empty object
            this.selectedFriend = {UserId:'Selected Friend', UserProfile: <Profile>{ProfileImg:''},
                Workout:[], CurrentWorkout:'', Password:'', AvailableExercises:[], Today: <TotalToday>{}, 
                WorkoutHistory:[], Friend:<Friends>{}};
        }
    }

    // Added the search function during the final exam
    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap(term =>
                this._Tracker.search(term).pipe(
                tap(() => this.searchFailed = false),
                catchError(() => {
                    this.searchFailed = true;
                    return of([]);
                }))
            ),
            tap(() => this.searching = false),
            merge(this.hideSearchingWhenUnsubscribed)
    );

    ngOnInit() {
    }

    ngOnDestroy() {
        this.result.unsubscribe();
        clearInterval(this.interval);
    }

    formatter = (x: {name: string}) => x.name;

    /* Every second it receives mapped data of all users from the server,
    and distributes data to local variables accordingly to display in view. */
    refreshData(){
        this.result = this._Tracker.getShowList().subscribe(data=>{
            this.Members = data;
            this.ShowList = data.filter(x=>
                !x.isMe && !x.isFriend && !x.isRequestsToMe && !x.isMyRequest
            );
            this.reqToMe = data.filter(x=> x.isRequestsToMe)
            this.myFriends = data.filter(x=> x.isFriend)
            this.myReq = data.filter(x=> x.isMyRequest)
        })
    }

    // Invoked when user sends a friend request by a click. Calls function in service.
    sendFriendReq(e:MouseEvent, userId:string) {
        this._Tracker.sendFriendReq(userId);
    }

    // When the user sends a request, this function calls a function in MessagesService and display an alert box.
    public requestSuccessMessage(userId:string) {
        this._Messages.requestSuccessMessage(userId);
    }

    // Invoked when user accepts a friend request by a click. Calls function in service.
    acceptFriendReq(e:MouseEvent, userId:string) {
        this._Tracker.acceptFriendReq(userId);    
    }

    // When the user accepts a request, this function calls a function in MessagesService and display an alert box.
    public acceptSuccessMessage(userId:string) {
        this._Messages.acceptSuccessMessage(userId);
    }

    /* Invoked when the user selects a friend to view their workout log.
    If the friend has no workout history yet, it sets thisHistory to an empty object
    If the friend has workout history, it sets the last element in the friend's history to thisHistory. */
    selectFriend(friend: User) {
        this.selectedFriend = friend;
        //Friend should have a -1 array element that shows that there's no more history.
        if(friend.WorkoutHistory.length == 0){
            this.thisHistory = {Date:'Your friend has no history yet', TotalTime:0, 
                TotalWorkoutType:0, TotalWorkout:[]}
            this.isNoPrev= true;
        }
        else{
            this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length-1];
            this.isNoPrev = false;
        }
    }

    /* Invoked when the user tries to see the previous day workout history of the selected friend.
    The change in minusLength disables the button if there is no more previous history.
    It switchs display to previous history if there is one. */
    showPrev(friend:User) {
        this.minusLength += 1;
        if(friend.WorkoutHistory.length - this.minusLength < 0){
            this.isNoPrev = true;
        }
        this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length - this.minusLength];
    }
    
    /* Invoked when the user tries to see the next day workout history of the selected friend.
    The change in minusLength enables the button if there is more previous history.
    It switchs display to next history if there is one. */
    showNext(friend:User) {
        this.minusLength -= 1;
        if(friend.WorkoutHistory.length - this.minusLength != -1){
            this.isNoPrev = false;
        }
        this.thisHistory = friend.WorkoutHistory[friend.WorkoutHistory.length - this.minusLength];
    }
}