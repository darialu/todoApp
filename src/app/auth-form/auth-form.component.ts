import { Component, OnInit, Input } from '@angular/core';
import {UserItem} from '../userItem';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  user: UserItem;
  @Input() signUpClicked;
  @Input() buttonName;
  @Input() formSubmit;
  @Input() unauthorized;
  @Input() signedUpError;
  @Input() signUpCancel;

  constructor() { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  };

  // signUpCancel() {

  // };

  submited() {
    // console.log('form works');
    // this.user = {
    //   email: 'andy_wallcroft@mail.uk',
    //   password: '12345'
    // }
    this.formSubmit(this.user);
    this.user = new UserItem;
  }
};
