import {CURRENT_UPDATE, TODO_ADD, ToDOsState, ChangeActionsType} from "../types/ToDoTypes";

const initState: ToDOsState = {
  todos: [
    { id: 1, name: "create a store", isComplete: true },
    { id: 2, name: "Load state through the store", isComplete: true },
    { id: 3, name: "Handle state changes with redux", isComplete: false }
  ],
  currentToDo: ""
};

export const updateCurrent = (val: ChangeActionsType) => {
  return {
    type: CURRENT_UPDATE,
    payload: val
  };
};

export function todoReducer(state = initState, action: ChangeActionsType) {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };

    case CURRENT_UPDATE:
      return { ...state, currentToDo: action.payload };

    default:
      return state;
  }
};
