import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ROUTES } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../auth/authentication.service';
import {
  ViewEncapsulation
} from '@angular/core'
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  [x: string]: any;
  title = 'App Name';
  currentUser!: User;
  showFiller = false;

  constructor( 
    private router :Router,
    authenticationService : AuthenticationService) {
      authenticationService.currentUser.subscribe((x:any) => this.currentUser =x);
     }

    


    
  
  
    image1="../assets/img/shop.jpg"
    image2="../assets/img/wepik-2021822-17421.png"
    image3="../assets/img/pexels-terje-sollie-298863.jpg"
    images=[this.image1,this.image2,this.image3];

  
}
