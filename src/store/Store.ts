import {createStore} from 'redux';
import {todoReducer} from '../reducers/ToDo';

export default createStore(todoReducer)