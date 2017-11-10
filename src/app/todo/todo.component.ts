import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { TODO_ADD, TODO_DELETE, TODO_UPDATE, TODO_TOGGLE } from '../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<any>;
  title: string;
  editing: Boolean = false;
  indexToEdit: number | null;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.todos$ = this.store.select('todoReducer');
  }

  addTodo(title: string) {
    this.store.dispatch({ type: TODO_ADD, payload: { title, done: false } });
    this.title = '';
  }
  deleteTodo(index: number) {
    this.store.dispatch({ type: TODO_DELETE, payload: { index } });
  }

  editTodo(todo, index: number) {
    this.editing = true;
    this.title = todo.title;
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.title = '';
    this.indexToEdit = null;
  }

  updateTodo(text: string) {
   // console.log(updatedTodo);
    this.store.dispatch({ type: TODO_UPDATE, payload: { index: this.indexToEdit, title: text } });
    this.title = '';
    this.indexToEdit = null;
    this.editing = false;
  }

  toggleDone(todo, index: number): void {
    this.store.dispatch({ type: TODO_TOGGLE, payload: { index, done: todo.done } });
  }
}


