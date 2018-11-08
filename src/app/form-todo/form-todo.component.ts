import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  newTodo: TodoItem;
  formSubmited: boolean;
  @Input() formSubmit;
  // employeeId: string;

  constructor(
    private modalService: ModalService) { }
  

  ngOnInit() {
    // let employeeId = localStorage.userId
    this.formSubmited = false;
    this.newTodo = {
      id: 4,
      name: '',
      status: 'todos' ,
      projectId: "0",
      description: '',
      employeeId: localStorage.userId
    }
  }
 

  submited() {
    //put and post methods
    console.log('subm work')
    this.formSubmited = true;
    this.formSubmit(this.newTodo);
    // this.newTodo = new TodoItem;
    // this.todosService.postTodos(this.newTodo);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
