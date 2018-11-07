import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from "@angular/router";
// import { UserItem } from '../userItem';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  signUpClicked: boolean;
  buttonName: string = 'Log in!';
  unauthorized: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    if (localStorage.token != '' || localStorage.token) {
      this.router.navigate(['/todosList']);
    }
  }

  ngOnInit() {
    this.signUpClicked = false;
    this.unauthorized = false;
  }

  formSubmit = userInfo => {
    this.authService
      .usersAuth(userInfo)
      .subscribe(authData => {
        console.log("page authData", authData);
        if (authData === 'Unauthorized') {
          this.unauthorized = true;
        }
        else {
          localStorage.setItem('token', authData.token);
          localStorage.setItem('userId', authData.user.id);        
          this.router.navigate(['/todosList']);
        }
      });

  }

}
