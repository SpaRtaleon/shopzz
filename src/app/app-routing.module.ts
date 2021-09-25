import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'mobile',
    component:MobileComponent,

  },
  {
    path:'com',
    component:HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

