
import { types } from "./actions";
import {initialStore} from "../initialStore";


export const todosReducer = (state = initialStore, action) => {
    switch(action.type){
        case types.ADD_TODO:
            return { 
                todos: [
                    ...state.todos,
                    action.payload.todoToAdd,
                ]
            }
        case types.DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.idOfDelTodo),
            }
        case types.CHECK_TODO:
            return {
                todos: state.todos.map(todo => {
                    return todo.id === action.payload.checkTodo.id ?
                        action.payload.checkTodo :
                        todo;
                })
            }
        case types.DEL_COMPLETED_TODOS:
            return {
                todos: state.todos.filter(todo => todo.isCompleted === false)
            }
        default:
            return state;
    };
}