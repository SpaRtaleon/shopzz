import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
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
  registerForm!:UntypedFormGroup;
  roles='user';
  error: any;

  constructor(private formBuilder : UntypedFormBuilder,
    private route :ActivatedRoute,
    private router : Router,
    private authenticationService : AuthenticationService,
    private snackBar: MatSnackBar) { }
    
    
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNo:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
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
    
      this.authenticationService.register(this.f.firstName.value,this.f.lastName.value, this.f.mobileNo.value,this.f.password.value,this.f.email.value,this.roles)
     .pipe(first())
    .subscribe(
      (Response) =>{ 
        this.router.navigateByUrl('/home')
        //  this.router.navigate([ this.returnUrl]);
      this.snackBar.open(Response.msg.toString(),'',{
        duration:3000,
        horizontalPosition:'right'
      })
      },
      (error) =>{
        console.log(error)
        this.error=error;
      });
      console.log("IT WORKS!");
      return (this.error);
      }
      
     
  }
  // registerUser(){
  //   console.log(this.registerForm.value)
  // }
 // convenience getter for easy access to form fields
 

 
