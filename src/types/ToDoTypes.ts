export type ToDoProps = {
  id: number;
  name: string;
  isComplete: boolean;
}

export type ToDOsState = {
  todos: ToDoProps[]
}