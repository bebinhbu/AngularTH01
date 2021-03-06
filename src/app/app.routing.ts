import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './page/onboarding/onboarding.component';
import { LoginComponent } from './page/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ListTableComponent } from './page/table/list-table/list-table.component';
import { MenuComponent } from './page/menu/menu/menu.component';
import { FoodDetailsComponent } from './page/menu/food-details/food-details.component';
import { ProfileComponent } from './page/profile/profile/profile.component';
import { InfoComponent } from './page/profile/info/info.component';
import { ScheduleComponent } from './page/profile/schedule/schedule.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
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
        loadChildren :'./page/table/table.module#TableModule'
      },
      {
        path: 'menu',
        loadChildren : './page/menu/menu.module#MenuModule'
      },
      {
        path: 'profile',
        loadChildren : './page/profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }