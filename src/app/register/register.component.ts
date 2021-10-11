import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  userType: any = [ 'Customer','Shopzz Admin', 'Super Admin'];
  error: any;

  constructor(private formBuilder : FormBuilder,
    private route :ActivatedRoute,
    private router : Router,
    private authenticationService : AuthenticationService) { }
    
    
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      Username:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      userType:['',Validators.required]
    })
    
  }
  get f(){
    return this.registerForm.controls;
  }

  registerUser():Observable<any>{ //loginval(formValue : NgForm){
    // let submitted=true;
    // if (this.registerForm.invalid){
    //   return;
    // }
    if (this.f.valid)
    {this.authenticationService.register(this.f.Username.value,this.f.Password.value,this.f.Email.value,this.f.userType.value)
     .pipe(first())
    .subscribe(
      (Response) =>{ 
        this.router.navigateByUrl('/home')
        //  this.router.navigate([ this.returnUrl]);
      
      },
      (error) =>{
        console.log(error)
        this.error=error;
      });
      console.log("IT WORKS!");
      return (this.error);
      }
      console.log("Form is invalid")
      return this.error
    }

  }
  // registerUser(){
  //   console.log(this.registerForm.value)
  // }
 // convenience getter for easy access to form fields
 

 
