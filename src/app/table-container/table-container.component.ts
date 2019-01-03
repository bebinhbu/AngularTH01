import { Component, OnInit, Input } from '@angular/core';
import { ITables } from '../interface/ITable';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  temp:boolean;
  @Input() tables:Array<ITables> = [];

  clickEvent1()
  {
    this.temp = false;
  }

  clickEvent2()
  {
    this.temp = true;
  }
}
