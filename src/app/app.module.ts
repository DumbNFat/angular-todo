import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { HeaderPipe } from './header.pipe';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthService } from './login/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path: 'tasks', component: TasksComponent}, {path:'add', component:NewTaskComponent}, {path:'tasks/:id',component:TaskEditComponent},
  {path: '**', component:RedirectComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasksComponent,
    NewTaskComponent,
    TaskEditComponent,
    LoginComponent,
    HeaderPipe,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
