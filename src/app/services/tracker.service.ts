import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { User, Profile, TotalToday, Friends } from '../model/tracker';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge} from 'rxjs/operators';


@Injectable()
export class TrackerService {

    private _api = "http://localhost:8080/fitTracker";

    Me : User;
    Users:User[] = [];
    isIdAvailable:boolean = false;

    /* PARAMS = new HttpParams({
        fromObject: {
          action: 'opensearch',
          format: 'json',
          origin: '*'
        }
      }); */

    constructor(
        private http:Http, 
        private _Router:Router, 
        private _Messages:MessagesService
    ) {}

/*     getSearchUser(query: string) {
        return this.http.get(this._api+"/getSearchUser", { params: { Text: query } })
            .map((response:Response) => response.json());
    } */

    // Added search during the final exam
    search(term: string) {
        if (term === '') {
          return of([]);
        }
    
        return this.http
          .get(this._api+"/getSearchUser", {params: {PARAMS: term}}).pipe(
            map(response => response[1])
          );
      }

    // Grabs 5 random pictures from the PicStack in the server, and returns them to home component.
    getHomePics() {
        return this.http.get(this._api + "/getHomePic", {})
            .map((response:Response) => response.json());
    }

    // Checks if the user desired id is already taken or not in the server
    isIdTaken(name: string) {
        this.http.get(this._api + "/join/taken", { params: { UserId:name }})
            .subscribe(data => {
                if(!data.json()){
                    alert('User name is already in use. Try another user name.');
                    this.isIdAvailable = false;
                }
                else{
                    this.isIdAvailable = true;
                    this.onReadOnly();
                }
            });
    }

    // Set the userIdInput id inside signUpComponent.html to readonly once the user clicks on create.
    onReadOnly() {
        document.getElementById('userIdInput').setAttribute("readonly", "true");
    }

    // Create initial Me and push it in Member in the server.
    signup(name: string, password: string) {
        this.Me = { UserId:name, Workout:[], CurrentWorkout:'', UserProfile: <Profile>{}, 
                    Password: password, AvailableExercises:[], Today:{Date:'', TotalTime:0, 
                    TotalWorkoutType:0, TotalWorkout:[]}, WorkoutHistory:[], 
                    Friend:<Friends>{Friends:[], MyRequests:[], RequestsToMe:[]}};
        
        this.http.post(this._api + "/join", {User:this.Me})
            .subscribe(data =>{
                console.log('successful sign up')
                this._Messages.signUpSuccessMessage(this.Me.UserId);
            }, err => { 
                console.log(err);
            });
            
    }

    /* At the sign up, the user's initial profile is sent to the server 
    and this user's profile is updated in the server. */
    submitInitialProfile(name:string, age:number, heightft:number, heightin:number, 
        weight:number, bmi:number, email:string){
            this.Me.UserProfile.Name = name;
            this.Me.UserProfile.Age = age;
            this.Me.UserProfile.Heightft = heightft;
            this.Me.UserProfile.Heightin = heightin;
            this.Me.UserProfile.Weight = weight;
            this.Me.UserProfile.Bmi = bmi;
            this.Me.UserProfile.Email = email; 
            this.Me.UserProfile.ProfileImg = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
            
            this.http.post(this._api + "/saveProfile",  { UserProfile:this.Me.UserProfile, UserId: this.Me.UserId } )
            .subscribe(data=> {
                this._Router.navigate(['/home']);
            });
    }

    /* When the user logs in, it checks in the server if the id and password matches in the system. 
    Logs the user in with the user data found using the userId if the id and password match in the system,
    or if they don't match in the system, display an alert message. */
    login(name: string, password: string) {
        this.http.get(this._api + "/login", { params : { name:name, password:password } })
        .subscribe(data=> {      
            if(!data.json()){
                this._Messages.logInFailMessage();
                this.isLoginFail("Log in Failed");
                setTimeout(() => this.isLoginFail(""), 3000);
                return;
            }
            this.Me = data.json()
            this._Router.navigate(['/home'])
            this._Messages.logInSuccessMessage(this.Me.UserId);
        })
    }

    // If the log in fails, insert a text into a paragraph in signin.component.html notifying that it failed.
    isLoginFail(text:string) {
        document.getElementById('isLoginFail').textContent= text;
    }

    // Let the user sign out and reset Me to null.
    signOut(){
        this.Me = null;
        this._Messages.signOutSuccessMessage();
    }

    // Upload the user profile picture to the server.
    uploadImage(url:string){
        this.Me.UserProfile.ProfileImg = url;
        this.http.post(this._api + "/uploadImg", { UserId:this.Me.UserId, ProfileImg:url }).subscribe();
    }

    // Update user profile in the server.
    saveProfile(me:User){
        this.http.post(this._api + "/saveProfile", { UserProfile:me.UserProfile, UserId: this.Me.UserId } )
        .subscribe();
    }

    // Grab the exercise list from the ExerciseStack from the server.
    getExercisesList() {
        this.http.get(this._api + "/exercises/getExercises", {})
        .subscribe(data=>{
            this.Me.AvailableExercises = data.json();
        })
    }

    /* Update the user workout done list in the server
        :If the workout already exist in the workout done list, just update the duration and cycle.
        :If doesn't exist, push to the workout done list. */
    submitExercise(duration:number, cycle:number){
        var thisExercise = this.Me.Workout.find( x => x.ActivityName == this.Me.CurrentWorkout);
            if(thisExercise){
                thisExercise.Duration += duration;
                thisExercise.Cycle += cycle;
            }else{
                thisExercise = { ActivityName:this.Me.CurrentWorkout, Duration:duration, Cycle:cycle };
                this.Me.Workout.push(thisExercise)
            } 

        this.http.post(this._api + "/exercises/submitExercise",{ Workout:thisExercise, UserId:this.Me.UserId })
            .subscribe();
    } 

    // Calculat total time and workout number of today's workout, and update Today in the server.
    calculateTotalToday(date:string) {
        this.Me.Today.TotalWorkout = this.Me.Workout;
        this.Me.Today.TotalTime = 0;
        this.Me.Today.TotalWorkoutType = this.Me.Today.TotalWorkout.length;
        this.Me.Today.Date = date;

        var x;
        for (x in this.Me.Today.TotalWorkout) {
            this.Me.Today.TotalTime += this.Me.Today.TotalWorkout[x].Duration;
        }

        this.http.post(this._api + "/exercises/calculateToday",{ UserId: this.Me.UserId, Today: this.Me.Today})
            .subscribe();
    }
    
    /* Keep updating workout history as the user submits each workout if it is already submitted once, 
    and push the new history if it hasn't been submitted. Update in the server as well. */
    putHistory(date:string) {
        var thisDate = this.Me.WorkoutHistory.find( x => x.Date == date);

        if(!thisDate){
            this.Me.WorkoutHistory.push(this.Me.Today);
        }
        else{
            thisDate.TotalTime = this.Me.Today.TotalTime;
            thisDate.TotalWorkout = this.Me.Today.TotalWorkout;
            thisDate.TotalWorkoutType = this.Me.Today.TotalWorkoutType;
        }

        this.http.post(this._api + "/putHistory",{ UserId: this.Me.UserId, History: this.Me.WorkoutHistory})
            .subscribe();
    }

    // Grabs the entire mapped Members from the server, and returns the data to the share component.
    getShowList() {
        return this.http.get(this._api + "/returnShowList", {params: {UserId:this.Me.UserId} })
            .map((response:Response) => response.json());
    }

    // Get rid of the requested user from RequestsToMe in the server upon acceptance of a request.
    acceptFriendReq(userId:string){
        this.http.post(this._api + "/friend/accept", { UserId: userId, MyUserId: this.Me.UserId, RequestsToMe:this.Me.Friend.RequestsToMe })
            .subscribe()
    }

    // Put the user's requested friend name to MyRequests in the server.
    sendFriendReq(userId:string) {
        this.http.post(this._api + "/friend/req", { UserId: userId, MyUserId: this.Me.UserId })
            .subscribe();
    }
}
