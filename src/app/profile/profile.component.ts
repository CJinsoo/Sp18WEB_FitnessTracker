import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/tracker';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from '../services/messages.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    
    Me:User;

    // Variables for ng-bootstrap tooltips
    @ViewChild('t') public tooltip: NgbTooltip;
    greeting = {};

    selectedFile: File;
    url:string = '';
    updated:boolean = false;

    isEdit:boolean = false;

    constructor(
        private _Tracker: TrackerService, 
        private _Router:Router,
        private _Messages:MessagesService
    ) {
        this.Me = _Tracker.Me;
        if(!this.Me ){
            _Router.navigate(['/signin']);
        }
    }

    ngOnInit() {
    }

    // Let the user select an image from the file system.
    onFileChanged(event) {
        this.selectedFile = <File>event.target.files[0]
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            this.Me.UserProfile.ProfileImg = reader.result;
            this.updated = true;
        }
    }

    /* When the user clicks upload button, it uploads a file if the user already selected a file,
    or displays a tooltip otherwise. */
    onUpload(tooltip:NgbTooltip) {
        if(this.updated){
            this._Tracker.uploadImage(this.Me.UserProfile.ProfileImg);
            this.uploadSuccessMessage();
            this.updated = false;
            tooltip.close();
        }else{
            this.changeMsg({ greeting: 'Choose a file before upload!' })
            setTimeout(() => tooltip.close(), 3000);
        }
    }
            
    /* When the user uploads profile picture, this function calls a function in MessagesService 
    and displays an alert box. */
    public uploadSuccessMessage() {
        this._Messages.uploadSuccessMessage();
    }

    // Let the user toggle between profile edit and view once they click edit/save.
    toggleEdit(){ 
        this.isEdit = !this.isEdit;
    }

    // When the user click save, it calls saveProfile() from service to update data in the server.
    saveProfile(e: MouseEvent){
        e.preventDefault();
        this.Me.UserProfile.Bmi = this.bmiCalculator();
        this._Tracker.saveProfile(this.Me);
    }

    // Calculates the user's bmi using height and weight.
    bmiCalculator(){
        var height = (this.Me.UserProfile.Heightft*12 + this.Me.UserProfile.Heightin*1);
        var bmi = Math.round((this.Me.UserProfile.Weight/height/height*703) * 100)/100;
        return bmi;
    }

    // Changes the message inside the tooltip - used for ng-bootstrap tooltip.
    public changeMsg(msg: any): void {
        const isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (msg !== this.greeting || !isOpen) {
            this.greeting = msg;
            this.tooltip.open(msg);
        }
    }
}
