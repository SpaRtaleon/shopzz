import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string='';
  passwd:any='';
  constructor() { }

  ngOnInit(): void {
  }
  loginval(formValue : NgForm){
      console.log(formValue);
    }
}
