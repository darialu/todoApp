import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { TodosService } from '../_services/todos.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

  public todos: Array<TodoItem>;
  currentTask: TodoItem;

  constructor(
    private modalService: ModalService,
    public todosService: TodosService) {
      todosService
      .getTodos(localStorage.userId)
      .subscribe(todos => this.todos = todos);
    }

  ngOnInit() {
  }

  getDataFromForm = (task) => {
    // console.log('parents fun ', task);
    this.todosService
      .postTodo(task)
      .subscribe(todo => {
        console.log('new todo', todo);
        this.todos.push(todo)
      });
  }

  deleteTask = task => {
    this.todos = this.todos.filter(todo => todo !== task);
    this.todosService
      .deleteTodo(task)
      .subscribe();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
