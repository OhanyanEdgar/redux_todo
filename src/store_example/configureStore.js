

import {createStore, combineReducers} from "redux";

import {rootReducer} from "./reducers"

export const configureStore = () => {
    return createStore(combineReducers(rootReducer));
}