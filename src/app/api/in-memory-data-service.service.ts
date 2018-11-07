import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { TODOS } from '../mock-todosList';
import { TodoItem} from '../todoItem';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = new Array<TodoItem> (
      {
          id: 1,
          name: 'the first task',
          status: 'todos',
          projectId: "1",
          description: '',
          employeeId: '0'
      }
    );

    return{ todos };
  }

  constructor() { }
}
