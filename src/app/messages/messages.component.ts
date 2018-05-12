import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private Messages: MessagesService) { 
    
    // this.messages = ['Choose activities and start recording your workout results', 'Overview, edit your profile!']
  }

  ngOnInit() {
  }

}
