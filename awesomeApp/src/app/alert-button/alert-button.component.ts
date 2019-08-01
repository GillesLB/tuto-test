import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';

import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content$: Observable<any>;

  readonly content = 'You have been warned';
  hiddencontent = false;
  severity = 3000;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.content$ = this.messageService.getContent();
  }

  toogle() {
    this.hiddencontent = !this.hiddencontent;
  }

  toogleAsync() {
    // timer : commence à émettre après que le temps précisé soit passé
    timer(500).subscribe(() => {
      this.toogle();
    });
  }

}
