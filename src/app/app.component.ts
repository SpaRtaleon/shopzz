
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { RouterEvent, ROUTES } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // loginval(formValue : NgForm){
  //   console.log(formValue);
  // }
  
  constructor(private router: Router) {

  }
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

    }

 
  

