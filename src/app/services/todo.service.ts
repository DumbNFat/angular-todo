import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import {Observable,map } from 'rxjs'
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Todo[]> {
    return this.db
      .list<Todo>('/tasks')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as Todo)
          })))
      )
  }

  get(id: string): Observable<Todo>{
    return this.db
    .object<Todo>('/tasks/'+id)
    .snapshotChanges()
    .pipe(
      map((x:any) => ({id: x.payload?.key, ...(x.payload.val() as Todo)}))
    )
  }

  update(id: string, task: Todo): void{
    this.db.object<Todo>('/tasks/'+id).update(task);
  }

  add(task:Todo){
    this.db.list('/tasks').push(task);
  }

  delete(id:string){
    this.db.object<Todo>('/tasks'+id).remove();
  }


}
