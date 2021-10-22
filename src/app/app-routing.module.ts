import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './shops/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from "./shops/restaurant/restaurant.component";
import { NavComponent } from './nav/nav.component';

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
    path:'home',
    component:HomeComponent

  },
  {
    path:'products',
    component:ProductsComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Restaurant',
    component:RestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

