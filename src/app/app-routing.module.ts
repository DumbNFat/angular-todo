import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [{path:'',component:LoginComponent},{path: 'tasks', component: TasksComponent}, 
{path:'add', component:NewTaskComponent}, {path:'tasks/:id',component:TaskEditComponent},
{path:'**', component:RedirectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
