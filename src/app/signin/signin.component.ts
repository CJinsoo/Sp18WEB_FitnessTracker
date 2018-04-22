import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User, Tracker } from '../model/tracker';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Model = new Tracker();
  Me:User;
  private _api = "http://localhost:8080/fitTracker";

  constructor(private http: Http) { }

  ngOnInit() {
  }

  
}
