import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  returnUrl!:string;
  submitted=false;
  loading=false;
  error='';
  username:string='';
  password='';

  constructor( 
    private formBuilder : FormBuilder,
    private route :ActivatedRoute,
    private router : Router,
    private authenticationService : AuthenticationService) {
      // redirect to home if already logged in
      // if(this.authenticationService.currentUserValue){
      //   this.router.navigate(['/home']);
      // }
     }

  ngOnInit(){

    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl =this.route.snapshot.queryParams['retuenUrl'] || '/home'
  }

   // convenience getter for easy access to form fields
  get f(){
    return this.loginForm.controls;
  }

  loginval(){ //loginval(formValue : NgForm){
    this.submitted=true;
    if (this.loginForm.invalid){
      return;
    }
    this.loading=true;
    this.authenticationService.login(this.f.username.value,this.f.password.value)
    .pipe(first())
    .subscribe(
      data =>{ this.router.navigateByUrl('/home');
        //  this.router.navigate([ this.returnUrl]);
      
      },
      error =>{
        console.log(error)
        this.error=error;
        this.loading=false
      });
      console.log();
    }
}
