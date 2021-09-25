import { Injectable } from '@angular/core';
import { Observable, observable,of } from 'rxjs';
import { tap,delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  isUserLoggedIn:boolean=false; 
  login( userName:string, password:any):Observable<any>{
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName=='admin' && password=='admin';
    localStorage.setIte('isUserLoggedIn',this.isUserLoggedIn ?"true":"false")

    return of (this.isUserLoggedIn).pipe( 
      delay(1000),
      tap(val=>{
        console.log("USER AUTH IS SUCCESSFULL")
      })
    );

    }
    logout():void{
      this.isUserLoggedIn=false;
      localStorage.removeItem('isUserLoggedIn');
    }
    constructor() { }
  }

