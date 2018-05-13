import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  @ViewChild('t') public tooltip: NgbTooltip;
  greeting = {};
  // name = 'World';
  //Model = new Tracker();
  Me:User;
  // messages:string[];
  selectedFile: File;
  url:string = '';
  //private _api = "http://localhost:8080/profile";
  isEdit:boolean = false;

  constructor(private http: Http, private _Tracker: TrackerService, private _Router:Router) {
    this.Me = _Tracker.Me;
    if(!this.Me ){
      _Router.navigate(['/signin']);
    }
    // }else{
    //   this.messages = ['Hi ' + this.Me.UserId + ', View your profile and edit here']

    // }
    
 
  }


  public changeMsg(msg: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (msg !== this.greeting || !isOpen) {
      this.greeting = msg;
      this.tooltip.open(msg);
    }
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.Me.UserProfile.ProfileImg = reader.result;
     
    }

    console.log(this.selectedFile)
   
  }

  onUpload() {
    this._Tracker.uploadImage(this.Me.UserProfile.ProfileImg);
    console.log("uploading")

    // upload code goes here
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


/*   onSelectionChange(entry) {
    this.selectedEntry = entry;
  } */

  toggleEdit(){ 
    this.isEdit = !this.isEdit;
  }

  /*login(id: string){
    this.http.get(this._api + "/exercises", { params : { userId: id, User:this.Me } })
    .subscribe(data=> this.Me =  { UserId: id, UserProfile: data.json(), Workout:[], CurrentWorkout:"" } )
    //console.log(this.Me.UserProfile.Name)

  }*/

  saveProfile(e: MouseEvent){
    e.preventDefault();
    var height = this.Me.UserProfile.Heightft*12 + this.Me.UserProfile.Heightin;
    var bmi = this.bmiCalculator(this.Me.UserProfile.Heightft, this.Me.UserProfile.Heightin, this.Me.UserProfile.Weight);
    this._Tracker.saveProfile(this.Me);
    //this.Me.UserProfile = 
  }

  bmiCalculator(heightft:number, heightin:number, weight:number){
    var height = heightft*12 + heightin;
    var bmi = Math.round((weight/height/height*703) * 10000)/100;
    return bmi;
    //console.log('user bmi ' + this.Me.UserProfile.Age)
  }

}
