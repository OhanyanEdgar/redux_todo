
export const types = {
    ADD_TODO: "ADD_TODO",
    DEL_TODO: "DEL_TODO",
    CHECK_TODO: "CHECK_TODO",
    DEL_COMPLETED_TODOS: "DEL_COMPLETED_TODOS",
};

export const addTodo = (todoToAdd) => {
    return {
        type: types.ADD_TODO,
        payload: {
            todoToAdd,
        },
    };
};

export const delTodo = (idOfDelTodo) => {
    return {
        type: types.DEL_TODO,
        payload: {
            idOfDelTodo,
        },
    };
};

export const checkTodo = (checkTodo) => {
    return {
        type: types.CHECK_TODO,
        payload: {
            checkTodo,
        },
    };
};

export const delCompletedTodos = () => {
    return {
        type: types.DEL_COMPLETED_TODOS,
        payload: null,
    }
    
}