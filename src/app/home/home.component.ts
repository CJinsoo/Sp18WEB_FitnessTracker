import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TrackerService } from '../services/tracker.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [NgbCarouselConfig]  
})
export class HomeComponent implements OnInit {

    images: string[]; // holds picture url list

    constructor(config: NgbCarouselConfig, private _Tracker: TrackerService) {
    
        // calling getHomePics function from service to get random pictures from the stack
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
}
