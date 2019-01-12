import { Component, OnInit, Input } from '@angular/core';
import { IMenuCategorie } from 'src/app/interface/IMenuCategorie';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  @Input() menu : IMenuCategorie;
  constructor() { }

  ngOnInit() {
  }

}
