import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  keyWatcher: Subscription;
  @Output() onClose = new EventEmitter<void>();
  constructor() {
    // this.keyWatcher = Observable.fromEvent(document, "keypress").subscribe();
  }

  ngOnInit() {
  }

  close(): void {
    this.onClose.emit();
  }

}
