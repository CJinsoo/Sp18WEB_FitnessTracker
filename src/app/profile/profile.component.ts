import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEdit:boolean = false;
  name:string;
  age:number;
  gender:string;
  email:string;
  heightft:number;
  heightin:number;
  weight:number;
  bmi:number;
  goal:string;

  constructor() { 
    
  }

  bmiCalculator(){
    var height = this.heightft*12 + this.heightin;
    var num = this.weight/height/height*703;
    this.bmi = Math.round(num * 100) / 100;
  }

  ngOnInit() {
    this.name = "Jane Doe";
    this.age = 20;
    this.heightft = 5;
    this.heightin = 1;
    this.weight = 100;
    this.email = "example@gmail.com";
    
    //this.bmi = this.bmiCalculator((this.heightft * 12 + this.heightin), this.weight);
  }
  //this.weight / (this.heightft * 12 + this.heightin)*(this.heightft * 12 + this.heightin)) * 703

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}
