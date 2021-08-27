

import { types } from "./actions";
import {initialState} from "../initialState";

export const processesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_LOCAL_STORAGE:
            if(!localStorage.getItem('Items')){
                return localStorage.setItem('Items', JSON.stringify([action.payload.staticItem]));
            };
        case types.SET_ITEMS:
            return [...action.payload.items]
        default:
            return state;
    };
};

