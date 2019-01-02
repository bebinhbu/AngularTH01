import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  title: number = 1;
  @Input() destination: string = '';
}
