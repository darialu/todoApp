import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListPageComponent} from './task-list-page/task-list-page.component';
import{AuthPageComponent} from './auth-page/auth-page.component';
import{SignUpPageComponent} from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  { path: 'signUp', component: SignUpPageComponent },
  { path: 'todosList', component: TaskListPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
