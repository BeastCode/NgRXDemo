import { Action } from '@ngrx/store';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Todo {
  index?: number;
  done?: boolean;
  title?: string;
}
