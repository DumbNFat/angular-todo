import { Component, OnInit } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todoFilter: Todo[] = []
  todos: Todo[] = [];
  page:number = 1;

  constructor(private todoService:TodoService, private router:Router){}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((parameters) => (this.todoFilter = this.todos = parameters))
  }

  orderTime(){
    this.todos.sort((a:Todo, b:Todo):number => {
      if(a.time && b.time) {
        return a.time.localeCompare(b.time);
      } else {
        return 0;
      }
    });
  }
  

  orderCategory(){
    this.todos.sort((a:Todo, b:Todo):number => {
      if(a.category && b.category) {
        return a.category.localeCompare(b.category);
      } else {
        return 0;
      }
    });
  }

  orderEmergency(){
    this.todos.sort((a:Todo, b:Todo):number => {
      if(a.emergency && b.emergency) {
        return a.emergency.localeCompare(b.emergency);
      } else {
        return 0;
      }
    });
  }

  orderRepeating(){
    this.todos.sort((a:Todo, b:Todo):number => {
      if(a.repeating && b.repeating) {
        return a.repeating.localeCompare(b.repeating);
      } else {
        return 0;
      }
    });
  }

  orderPriority(){
    this.todos.sort((a:Todo, b:Todo):number => {
      if(a.priority && b.priority) {
        return a.priority.localeCompare(b.priority);
      } else {
        return 0;
      }
    });
  }

  navigate(id:string | undefined){
    this.router.navigate(['tasks',id])
  }

  filter(value:any){
    this.todoFilter = value ? this.todos.filter((parameter) => parameter.description?.toLowerCase().includes(value.toLowerCase()))
    :this.todos;
  }

  


}
