import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { RouterEvent, ROUTES } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;
  loginrout(){
    this.router.navigateByUrl('login')
}  title = 'App Name';

  showFiller = false;
headers=[
    {
      'firstname':'Mobile'
    },
  {
      'firstname':'Fashion'
    }];
    // name:string='';
    // passwd:any=''
    ngOnInit(){


    }
    
  
  
    image1="../assets/img/shop.jpg"
    image2="../assets/img/wepik-2021822-17421.png"
    image3="../assets/img/pexels-terje-sollie-298863.jpg"
    images=[this.image1,this.image2,this.image3];

  constructor() { }
}
