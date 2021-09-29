import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() newCaller: any = '';
  @Output() getNewCaller = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addDataCaller() {
    this.getNewCaller.emit('Halo from parent for child');
  }

}
