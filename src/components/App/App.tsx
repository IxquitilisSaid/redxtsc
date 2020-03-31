import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import logo from '../../logo.svg';
import './App.css';
import {ToDoList} from '../ToDoList/ToDoList';
import {ToDOsState} from '../../types/ToDoTypes';
import ToDoForm from '../ToDoForm/ToDoForm';
import {updateCurrent} from '../../reducers/ToDo';

const mapStateToProps = (state: ToDOsState) => state;
const connector = connect(mapStateToProps, {updateCurrent});

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

const App = (props: Props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Welcome to React with Redux</h2>
      </div>

      <div className="Todo-App">
        <ToDoForm
          currentToDo={props.currentToDo}
          changeCurrent={props.updateCurrent} />

        <ToDoList todos={props.todos} {...props} />
      </div>
    </div>
  );
}

export default connector(App)