import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpClicked: boolean;
  buttonName: string = 'Sign up!';
  signedUpError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    if (localStorage.token != '' || localStorage.token) {
      this.router.navigate(['/todosList']);
    }
  }

  ngOnInit() {
    this.signUpClicked = true;
    this.signedUpError = false;
  }

  signUpSubmit = userInfo => {
    this.authService
      .addNewUser(userInfo)
      .subscribe(signUpData => {
        // console.log("authData", authData);
        // console.log('token', signUpData.token);
        // console.log('signUpData id', signUpData.user.id);
        if (signUpData === 'Forbidden') {
          // alert('Sorry, user with this email is signed up ');
          this.signedUpError = true;
        }
        else {
          localStorage.setItem('userId', signUpData.user.id);
          localStorage.setItem('token', signUpData.token);
          console.log('token', localStorage.token);
          this.router.navigate(['/todosList']);
        }
      })
  };

  signUpCancel = () => {
    this.router.navigate(['/auth']);
  }

}
