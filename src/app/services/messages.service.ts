import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class MessagesService {

    private _success = new Subject<string>();
    successMessage: string;

    constructor() { 
        // Using ng-bootstrap auto dissmissing alert message box method.
        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
            debounceTime(4000)
        ).subscribe(() => this.successMessage = null);
    }

    // The following functions set successMessage to the string inside the next() function:
    
    // when the user sends a friend request.
    public requestSuccessMessage(userId:string) {
        this._success.next(`Your request was successfully sent to ` + userId + "!");
    }
  
    // when the user accepts a friend request.
    public acceptSuccessMessage(userId:string) {
        this._success.next(`You accepted ` + userId + "'s Friend request! Now you can see " + userId+"'s workout log");
    }
  
    // when the user login is successful.
    public logInSuccessMessage(userId:string) {
        this._success.next('Welcome ' + userId + ', you\'re log in was successful. You can now access all the features.');
    }

    // when the sign up of a user is successful.
    public signUpSuccessMessage(userId:string) {
        this._success.next('Welcome ' + userId + ', you\'re successfully registered! Enjoy workout!');
    }

    // when the user login is unsuccessful.
    public logInFailMessage() {
        this._success.next('Your email/password does not match with our system');
    }

    // when the user signs out.
    public signOutSuccessMessage() {
        this._success.next('Thanks for using our service. You have been signed out successfully.');
    }

    // when the user uploads profile picture.
    public uploadSuccessMessage() {
        this._success.next('Your profile picture has been uploaded successfully!');
    }

    public saveExerciseSuccessMessage() {
        this._success.next('Your workout has been successfully saved');
    }

}


