import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { UserItem } from '../userItem';
import {Router} from "@angular/router";
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  // private signUrl = 'http://nodejs-app.cloudapp.net:8000/signUp';
  // private authUrl = 'http://nodejs-app.cloudapp.net:8000/auth';
  private signUrl = this.baseUrl + '/signUp';
  private authUrl = this.baseUrl + '/auth';

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }

  public userUnauthorized(){
    this.router.navigate(['/auth']);
  }

  public addNewUser (user: UserItem): Observable<any> {
    let signUpData = {
      email: user.email,
      password: user.password,
    };
    // console.log('sign up working', signUpData);
    return this.http.post<UserItem>(this.signUrl, signUpData, httpOptions).pipe(catchError(err => {
      if (err === 'Forbidden') {
        // console.log('yes it is', err);
        return of(err);
      }  
      // console.log('yes it is', err);
      return throwError(err);
    }));
  }

  public usersAuth (user: UserItem): Observable<any> {
    let authData = {
      email: user.email,
      password: user.password,
    };
    return this.http.post<any>(this.authUrl , authData, httpOptions).pipe(catchError(err => {
      if (err === 'Unauthorized') {
        console.log('yes it is', err);
        return of(err);
      }  
      return throwError(err);
    }));
  };

}