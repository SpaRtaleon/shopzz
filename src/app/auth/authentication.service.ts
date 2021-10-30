import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

   login(username:string,password:any|JSON){
     
     return this.http.post<any>(`${environment.api}/api/auth/signin`,{username,password})
    
   };

   register(firstName:string,lastName:string,mobileNo:string,password:any,email:string,roles:any):Observable<any>{
    return this.http.post<any>(`${environment.api}/api/auth/signup`, { firstName,lastName,mobileNo, password, email, roles,httpOptions })
       .pipe(map(user =>{
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
         user.authdata = window.btoa(mobileNo +':' + password);
         localStorage.setItem('currentUser',JSON.stringify(user));
         this.currentUserSubject.next(user);
         console.log('user',user)
         return user;
         
       }));
  }


   logout(){
     localStorage.removeItem('currentUser');
      //  this.currentUserSubject.next(null);

   }

   signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('userToken');
    window.sessionStorage.setItem('userToken', token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem('userToken');
  }
}
