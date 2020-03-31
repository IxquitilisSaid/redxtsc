export const TODO_ADD = 'TODO_ADD';
export const CURRENT_UPDATE = 'CURRENT_UPDATE';

interface ChangeCurrentAction {
  type: typeof TODO_ADD | typeof CURRENT_UPDATE;
  payload: any;
}

export type ChangeActionsType = ChangeCurrentAction;

export type ToDoProps = {
  id: number;
  name: string;
  isComplete: boolean;
}

export type ToDOsState = {
  todos: ToDoProps[];
  currentToDo: string;
}