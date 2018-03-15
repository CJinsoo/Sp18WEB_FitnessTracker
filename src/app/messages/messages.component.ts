import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:string[];
  constructor() { 
    this.messages = ['Choose activities and start recording your workout results']
  }

  ngOnInit() {
  }

}
