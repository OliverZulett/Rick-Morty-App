import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() nextPage = 0;
  @Input() prevPage = 0;

  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() prevPageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendNextPageEvent() {
    this.nextPageEvent.emit('1');
  }

  sendPrevPageEvent() {
    this.prevPageEvent.emit('1');
  }
}
