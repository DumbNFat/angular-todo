import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {NgForm} from '@angular/forms'
import { Todo } from '../services/todo';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  constructor(private todoService:TodoService){}

  onSubmit(addForm:NgForm){
    this.todoService.add(addForm.value)
    alert('New TODO has been created.')
  }

}
