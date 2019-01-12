import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodComponent } from './food-container/food/food.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBottomComponent } from './menu-bottom/menu-bottom.component';
import { StatusPipe } from './pipes/status.pipe';
import { TableContainerComponent } from './table-container/table-container.component';
import { TableComponent } from './table-container/table/table.component';
import { FoodContainerComponent } from './food-container/food-container.component';
import { MenuService } from './services/menu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HeaderComponent,
    MenuBarComponent,
    MenuBottomComponent,
    StatusPipe,
    TableContainerComponent,
    TableComponent,
    FoodContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
