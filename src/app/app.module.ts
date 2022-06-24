import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { MobileComponent } from './shops/mobile/mobile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { NgImageSliderModule } from 'ng-image-slider';
import { RestaurantComponent } from './shops/restaurant/restaurant.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RestaurantProdComponent } from './products/restaurant-prod/restaurant-prod.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { BillingComponent } from './billing/billing.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    NavComponent,
    RestaurantComponent,
    MobileComponent,
    RestaurantProdComponent,
    CartComponent,
    BillingComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule,

    NgbCarouselModule,
    NgbModule,
    ToastrModule.forRoot(),
    FormsModule,
    FlexLayoutModule ,
    LayoutModule,
    NgImageSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
   
 
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
