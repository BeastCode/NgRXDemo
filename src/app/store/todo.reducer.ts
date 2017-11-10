import { Action } from '@ngrx/store';
import { ActionWithPayload, Todo } from './todo.model';
import { TODO_ADD, TODO_DELETE, TODO_UPDATE, TODO_TOGGLE  } from './todo.actions';

export function todoReducer(state = [], action: ActionWithPayload<Todo>): any[] {
  switch (action.type) {
    case TODO_ADD:
      return [action.payload, ...state];
    case TODO_DELETE:
          return state.filter((item, index) => index !== action.payload.index);
    case TODO_UPDATE:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { title: action.payload.title })
          : item;
      });
    case TODO_TOGGLE:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { done: !action.payload.done })
          : item;
      });
    default:
      return state;
  }
}

