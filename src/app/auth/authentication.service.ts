import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

   private currentUserSubject: BehaviorSubject<User >;
   public currentUser:Observable<User>;

  constructor( private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') ||'{}'));
    this.currentUser=this.currentUserSubject.asObservable();
   }

   public get currentUserValue():User{
     return this.currentUserSubject.value;
   }

   login(username:string,password:any){
     return this.http.post<any>(`${environment.api}/users`,{username,password})
    
        .pipe(map(user =>{
           // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          user.authdata = window.btoa(username +':' + password);
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log(user)
          return user;
          console.log(user,)
        }));
   }

   register(Username:string,Password:any,Email:string,Role:any):Observable<any>{
    return this.http.post<any>(`${environment.api}/users/register`, { Username, Password, Email, Role,httpOptions })
       .pipe(map(user =>{
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
         user.authdata = window.btoa(Username +':' + Password);
         localStorage.setItem('currentUser',JSON.stringify(user));
         this.currentUserSubject.next(user);
         return user;
         console.log(user,)
       }));
  }


   logout(){
     localStorage.removeItem('currentUser');
      //  this.currentUserSubject.next(null);

   }
}
