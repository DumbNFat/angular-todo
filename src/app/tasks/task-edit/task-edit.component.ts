import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  id:any;
  todo:Todo = {}

  constructor(private todoService:TodoService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.todoService.get(this.id).subscribe(parameters => {
        this.todo = parameters;
      })
    }
  }

  onSubmit(editForm:NgForm){
    let id = this.id as string;
    this.todoService.update(id, editForm.value);
    window.alert('TODO has been updated.')
    this.router.navigate(['tasks'])
    editForm.reset;
  }
}
