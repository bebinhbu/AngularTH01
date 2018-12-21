import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {

  menus:Array<any> = [
    {icon:'coffee-nut.png',name:'coffee',iconActive:'coffee-nut-color.png',active:false},
    {icon:'order.png',name:'order',iconActive:'order-color.png',active:false},
    {icon:'user.png',name:'user',iconActive:'user-color.png',active:false},
  ]
  constructor() { }

  ngOnInit() {
  }
  Active(menu)
  {
    this.menus.forEach(a => {
      a.active = false;
    })
    menu.active = true;
  }

}
