import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="container">
    <div class="title">
        {{ title }}
    </div>
    <div class="noti">
        <img src="assets/noti.png" alt="">
    </div>
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title:string = "table";
}