import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StatusPipe } from './pipes/status.pipe';
import { FoodComponent } from './food/food.component';
import { ListTableComponent } from './list-table/list-table.component';
import { TableService } from './services/table.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';
import { LoginGuard } from './services/login-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { TableComponent } from './list-table/table/table.component';
import { FoodDetailsComponent } from './food/food-details/food-details.component';
import { InfoComponent } from './profile/info/info.component';
import { ScheduleComponent } from './profile/schedule/schedule.component';

@NgModule({
  declarations: [
    TableComponent,
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    StatusPipe,
    FoodComponent,
    ListTableComponent,
    MenuComponent,
    ProfileComponent,
    PageNotFoundComponent,
    FoodDetailsComponent,
    LoginComponent,
    LayoutComponent,
    InfoComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        //canActivate: [LoginGuard],
        component: LoginComponent
      },
      {
        path: '',
        //canActivate: [AuthGuard],
        component: LayoutComponent,
        children: [
          {
            path: 'tables',
            component: ListTableComponent
          },
          {
            path: 'menu',
            component: MenuComponent
            
          },
          {
            path: 'profile',
            component: ProfileComponent,
            children: [
              {
                path: 'info',
                component: InfoComponent
              },
              {
                path: 'schedule',
                component: ScheduleComponent
              }
              
            ]
          },
          {
            path: 'detail',
            component: FoodDetailsComponent
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }


        ]
      }

    ])
  ],
  providers: [
    TableService,
    MenuService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
