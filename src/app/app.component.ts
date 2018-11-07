import { Component } from '@angular/core';
import { ModalService } from './_services/modal.service';
import {TodosService} from './_services/todos.service';
import {Router} from "@angular/router";


@Component({
  providers: [ ModalService, TodosService ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private router: Router) {
  }

  // title = 'todo-list';

  exitHandler() {
    console.log('exit');
    localStorage.token = '';
    localStorage.userId = '';
    this.router.navigate(['/auth']);
  }


}
