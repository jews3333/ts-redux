import { createReducer } from "typesafe-actions";
import { TodosAction, TodoState } from "./types";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState: TodoState = [
    { id: 1, text: '리액트', done: true },
    { id: 2, text: '리덕스', done: true },
    { id: 3, text: '타입스크립트', done: false }
];


const todos = createReducer<TodoState, TodosAction>(initialState, {
    [ADD_TODO]: (state, {payload:text}) => 
        state.concat({
            id: Math.max(...state.map(todo => todo.id)) + 1,
            text,
            done: false
        }),
    [TOGGLE_TODO]: (state, {payload: id}) => 
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, {payload: id}) => 
        state.filter(todo => todo.id !== id)
})

export default todos;