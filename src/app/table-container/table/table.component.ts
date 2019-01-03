import { Component, OnInit, Input } from '@angular/core';
import { ITables } from 'src/app/interface/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tables:Array<ITables> = [];

  @Input() temp:boolean;
}
