import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './_services/modal.service';
import { FormTodoComponent } from './form-todo/form-todo.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './api/in-memory-data-service.service';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { TokenInterceptor } from './_services/token.interceptor';
import {UnauthorizedInterceptor} from './_services/unauthorized.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ModalComponent,
    FormTodoComponent,
    TaskListPageComponent,
    AuthPageComponent,
    AuthFormComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,

    // //remove with real server
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )

  ],
  providers: [
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
