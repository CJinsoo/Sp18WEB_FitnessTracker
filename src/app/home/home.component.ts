import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Tracker } from '../model/tracker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Tracker();
  private _api = "http://localhost:8080/fitTracker";

  constructor(private http: Http) { }

  ngOnInit() {
  }

  pictureFlip(){
    this.http.post(this._api + "/exercises/welcome", {})
    .subscribe()
  }
}
