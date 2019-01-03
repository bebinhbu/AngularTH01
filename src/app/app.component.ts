import { Component, Input } from '@angular/core';
import { ITables } from './interface/ITable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTH01';
  abc :string = 'table';
  tables:Array<ITables> = [
    {tableName:'tab.01',empName:'Mr.Quynh',amount: 3,status: 1},
    {tableName:'tab.02',empName:'Mr.Quynh',amount: 3,status: 2},
    {tableName:'tab.03',status: 0},
    {tableName:'tab.04',empName:'Mr.Quynh',amount: 3,status: 1}
  ]
}
