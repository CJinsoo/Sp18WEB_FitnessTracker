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
  email:string;
  bmi:number;
  heightft:number;
  heightin:number;
  weight:number;
  goal:string;

  constructor() { 
    
  }

  ngOnInit() {
    this.name = "Jane Doe";
    this.heightft = 5;
    this.heightin = 1;
    this.email = "example@gmail.com";
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}
