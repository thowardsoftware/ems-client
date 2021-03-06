import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

export class User{
  constructor(
    public status:string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private classService:EmployeeService, private http: HttpClient) { }

  // Provide username and password for authentication, and once authentication is successful, 
  // store JWT token in session
  authenticate(username, password) {
    return this.http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
     map(userData => {
        sessionStorage.setItem('username', username);
        let tokenStr= 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       })
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
