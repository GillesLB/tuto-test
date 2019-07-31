import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';

import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  readonly content = 'You have been warned';
  hiddencontent = false;
  severity = 3000;

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.hiddencontent = !this.hiddencontent;
  }

}
