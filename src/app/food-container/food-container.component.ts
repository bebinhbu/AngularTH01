import { Component, OnInit } from '@angular/core';
import { ICategorie } from '../interface/ICategorie';
import { Observable } from 'rxjs';
import { MenuService } from '../services/menu.service';
import { IMenuCategorie } from '../interface/IMenuCategorie';
@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  menus : Array<IMenuCategorie> = [];
  categories: ICategorie[] = [
    {icon: 'category-1.png',iconActive: 'category-1-active.png',name: 'Coffee',active: false},
    {icon: 'category-2.png',iconActive: 'category-2-active.png',name: 'Tea',active: false},
    {icon: 'category-3.png',iconActive: 'category-3-active.png',name: 'Dessert',active: false},
    {icon: 'category-4.png',iconActive: 'category-4-active.png',name: 'Special',active: false}
  ]
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.menus.subscribe((data) => {
      this.menus = data;
    });
    this.menuService.getMenus();
  }

  onTapMenu(categorie) {
    this.categories.forEach(item => {
      item.active = false;
    })
    categorie.active = true;
  }
  
}
