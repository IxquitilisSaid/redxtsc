import React from 'react';
import {ToDoProps, ToDOsState} from '../../types/ToDoTypes';

const ToDoItem: React.FC<ToDoProps> = ({id, isComplete, name, ...rest}) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        defaultChecked={isComplete} /> {name}
    </li>
  );
}

export const ToDoList: React.FC<ToDOsState> = ({todos, ...rest}) => {
  return (
    <div className="Todo-List">
      <ul>
        {
          todos.map((todo: ToDoProps) => <ToDoItem key={todo.id} {...todo} />)
        }
      </ul>
    </div>
  );
}
