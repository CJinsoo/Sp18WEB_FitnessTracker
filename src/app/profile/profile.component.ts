import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  //Model = new Tracker();
  Me:User;
  messages:string[];

  //private _api = "http://localhost:8080/profile";
  isEdit:boolean = false;

  constructor(private http: Http, private _Tracker: TrackerService, private _Router:Router) {
    this.messages = ['Hi, View your profile and edit here']
    this.Me = _Tracker.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }

    
 
  }

/*   bmiCalculator(){
    var height = this.Me.UserProfile.Heightft*12 + this.Me.UserProfile.Heightin;
    var num = this.Me.UserProfile.Weight/height/height*703;
    //this.Me.UserProfile.Bmi = Math.round(num * 100) / 100;
    console.log('running bmicalculator' + this.Me.UserProfile.Bmi)
    var bmi = Math.round(num * 100);
    this._Tracker.bmiCalculator(bmi);
  } */
  

  //findUser(userId) {
  //  this.Me = this.Model.Members.find(function (obj) {return obj.UserProfile.UserId === userId;});
  //}

  ngOnInit() {
    /*
    this.Me.UserProfile.Name = "Jane Doe";
    this.Me.UserProfile.Age = 20;
    this.Me.UserProfile.Heightft = 5;
    this.Me.UserProfile.Heightin = 1;
    this.Me.UserProfile.Weight = 100;
    this.Me.UserProfile.Email = "example@gmail.com";
    */
    //this.bmi = this.bmiCalculator((this.heightft * 12 + this.heightin), this.weight);
  }
  //this.weight / (this.heightft * 12 + this.heightin)*(this.heightft * 12 + this.heightin)) * 703

  toggleEdit(){ 
    this.isEdit = !this.isEdit;
  }

  /*login(id: string){
    this.http.get(this._api + "/exercises", { params : { userId: id, User:this.Me } })
    .subscribe(data=> this.Me =  { UserId: id, UserProfile: data.json(), Workout:[], CurrentWorkout:"" } )
    //console.log(this.Me.UserProfile.Name)

  }*/

  saveProfile(e: MouseEvent, name:string, age:number, heightF:number, heightI:number, weight:number, goal:string, email:string){
    e.preventDefault();
    this._Tracker.saveProfile(name, age, heightF, heightI, weight, goal, email);
  }


}
