import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  menu1:boolean ;
  menu2:boolean ;
  menu3:boolean ;
  constructor()
  {
    this.menu1 = this.menu2 = this.menu3 = false;
  }
  active1()
  {
    this.menu2 = this.menu3 = false;
    this.menu1 = true;
  }
  active2() {
    this.menu1 = this.menu3 = false;
    this.menu2 = true;
  }
  active3() {
    this.menu1 = this.menu2 = false;
    this.menu3 = true;
  }
}