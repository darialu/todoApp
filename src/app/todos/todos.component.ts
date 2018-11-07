import { Component, OnInit, Input } from '@angular/core';
// import { TodosList } from '../TodosList';
// import { TODOS } from '../mock-todosList';
import {TodosService} from '../_services/todos.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // public todos: Array<TodoItem>;
  @Input() todosList;
  @Input() deleteTask;

  constructor(public todosService: TodosService) { 
    // todosService.getTodos()
    //   .subscribe(todos => this.todos = todos);
  }
  
  deleteButtonHandler(task){
    this.deleteTask(task);
  }

  ngOnInit() {
  }

}
