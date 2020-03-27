import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {ToDoForm} from '../ToDoForm/ToDoForm';
import {ToDoList} from '../ToDoList/ToDoList';
import {ToDOsState} from '../../types/ToDoTypes';


const App = (props: ToDOsState) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Welcome to React with Redux</h2>
      </div>

      <div className="Todo-App">
        <ToDoForm />

        <ToDoList todos={props.todos}/>
      </div>
    </div>
  );
}

export default App;
