import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: Http, private _Tracker: TrackerService) { }

  ngOnInit() {
  }

  signup(name: string, password: string){
    this._Tracker.signup(name, password);//delegate to service
    
  }
}
