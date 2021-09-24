
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { RouterEvent, ROUTES } from '@angular/router';
import { Router } from '@angular/router';
import { AccountService } from './_services/account.service';
import { User } from './_models';



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
  
    // name:string='';
    // passwd:any=''
    ngOnInit(){


    }
    
  
  


    }

 
  

