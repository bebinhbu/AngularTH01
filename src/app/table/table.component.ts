import { Component, OnInit } from '@angular/core';
import { ITables } from '../interface/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tables:Array<ITables> = [
    {tableName:'tab.01',empName:'Mr.Quynh',amount: 3,status: 1},
    {tableName:'tab.02',empName:'Mr.Quynh',amount: 3,status: 2},
    {tableName:'tab.03',empName:'Mr.Quynh',amount: 3,status: 0},
    {tableName:'tab.04',empName:'Mr.Quynh',amount: 3,status: 1}
  ]

}
