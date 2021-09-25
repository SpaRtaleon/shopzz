import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MobileComponent } from '../mobile/mobile.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  Username:string='';
  passwd:any='';
  formData!: FormGroup;
  
  constructor( private authSevice : AuthService , private router :Router) { }

  ngOnInit() {
    
      this.formData=new FormGroup({
        Username : new FormControl(''),
        passwd : new FormControl(''),
      })
      
  }
  loginval(data:any){
    this.Username=data.Username;
    this.passwd=data.passwd;

    console.log("login Page" +this.Username);
    console.log("login Page"+this.passwd)
     
    this.authSevice.login(this.Username,this.passwd)
      .subscribe(data =>{
        console.log("Login Succes"+data);
        if(data)  this.router.navigate(['/mobile'])

      });
  }
}
