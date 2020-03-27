import React from 'react';
import {ToDoProps, ToDOsState} from '../../types/ToDoTypes';

const ToDoItem = (todo: ToDoProps) => (
  <li key={todo.id}>
    <input
      type="checkbox"
      defaultChecked={todo.isComplete} /> {todo.name}
  </li>
)

export const ToDoList = (props: ToDOsState) => (
  <div className="Todo-List">
    <ul>
      {
        props.todos.map(
          (todo: ToDoProps) => <ToDoItem key={todo.id} {...todo} />
        )
      }
    </ul>
  </div>
)