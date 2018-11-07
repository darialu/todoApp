import { Injectable } from '@angular/core';
// import { TodoItem } from '../todoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../todoItem';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  // private todosUrl = "api/todos";
  //url 'http://localhost:8000/projects/1/tasks'

  public getTodos(id: number): Observable<Array<any>> {
    // const getTodosUrl = 'http://nodejs-app.cloudapp.net:8000/projects/1/tasks';
    // const getTodosUrl = 'http://localhost:8000/projects/1/tasks'; to delete!
    const getTodosUrl = `${'http://localhost:8000/employees'}/${id}/tasks`;

    return this.http.get<TodoItem[]>(getTodosUrl);
  }

  /** POST: add a new todo to the server */
  public postTodo (task: TodoItem): Observable<TodoItem> {
    // const postTodoUrl = 'http://nodejs-app.cloudapp.net:8000/tasks';
    const postTodoUrl = 'http://localhost:8000/tasks';

    return this.http.post<TodoItem>(postTodoUrl, task, httpOptions)
  }

  public deleteTodo (task: TodoItem | number): Observable<TodoItem> {
    const id = typeof task === 'number' ? task : task.id;
    // const url = `${'http://nodejs-app.cloudapp.net:8000/tasks'}/${id}`;
    const url = `${'http://localhost:8000/tasks'}/${id}`;

    return this.http.delete<TodoItem>(url, httpOptions)
  }

}
