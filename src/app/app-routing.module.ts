import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './shops/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from "./shops/restaurant/restaurant.component";
import { NavComponent } from './nav/nav.component';
import { RestaurantProdComponent } from './products/restaurant-prod/restaurant-prod.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
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
    path:'add-products',
    component:ProductsComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Restaurant',
    component:RestaurantComponent
  },
  {
    path:'products/:id',
    component:RestaurantProdComponent
  }
  ,
  {
    path:'cart',
    component:CartComponent
  } ,
  {
    path:'billing',
    component:BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

