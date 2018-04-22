import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entry-screen-view',
  templateUrl: './entry-screen-view.component.html',
  styleUrls: ['./entry-screen-view.component.css']
})
export class EntryScreenViewComponent implements OnInit {
  @Input() title: string;
  @Output() navigate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleNavigate(target: string): void {
   this.navigate.emit(target);
  }

}
