import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable()
export class MessagesService {

  Messages: { Text: string, Type: 'primary' | 'secondary' } [];
  private _success = new Subject<string>();

  successMessage: string;
  failMessage: string;

  successful:boolean = true;

  constructor() { 
      this._success.subscribe((message) => this.successMessage = message);
      this._success.pipe(
        debounceTime(5000)
      ).subscribe(() => this.successMessage = null);
      
    
    
   
  }

    public requestSuccessMessage(userId:string) {
      this._success.next(`Your request was successfully sent to ` + userId + "!");
    }
  
    public acceptSuccessMessage(userId:string) {
      this._success.next(`You accepted ` + userId + "'s Friend request! Now you can see " + userId+"'s workout log");
    }
  
    public logInSuccessMessage(userId:string) {
      this._success.next('Welcome ' + userId + ', you\'re log in was successful. You can now access every features.');
    }

    public signUpSuccessMessage(userId:string) {
      this._success.next('Welcome ' + userId + ', you\'re successfully registered! Enjoy workout!');
    }

    public logInFailMessage() {
        this._success.next('Your email/password is not found in the server');
    }
    public signOutSuccessMessage() {
      this._success.next('Thanks for using our service. You have been signed out successfully.');
  }
}


