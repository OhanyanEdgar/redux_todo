

export const types = {
    SET_LOCAL_STORAGE: "SET_LOCAL_STORAGE",
    SET_ITEMS: "SET_ITEMS",
}

export const setLocalStorage = () => {
    return {
        type: types.SET_LOCAL_STORAGE,
        payload: {
            staticItem: {
                icon: '',
                color: "#12B252",
                text: "",
                id: Math.random(),
                active: true,
                types: [],
                content: "+",
            },
        },
    };
};

export const setItems = (items) => {
    return {
        type: types.SET_ITEMS,
        payload: {
            items,
        },
    };
};