import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBottomComponent } from './menu-bottom/menu-bottom.component';
import { StatusPipe } from './pipes/status.pipe';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HeaderComponent,
    MenuBarComponent,
    MenuBottomComponent,
    StatusPipe,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
