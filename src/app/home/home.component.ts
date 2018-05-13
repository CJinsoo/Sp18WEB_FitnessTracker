import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Tracker } from '../model/tracker';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  // Model = new Tracker();
  // private _api = "http://localhost:8080/fitTracker";

  images: string[];

  constructor(config: NgbCarouselConfig, private _Tracker: TrackerService) {
    this._Tracker.getHomePics().subscribe(data => {
      this.images = data;
    });
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;


  }

  ngOnInit() {
  }

  // pictureFlip(){
  //   this.http.post(this._api + "/exercises/welcome", {})
  //   .subscribe()
  // }
}
