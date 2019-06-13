
const createStore = (reducer) => {
    let listeners = [];
    let state;

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        return (() => {
            listeners = listeners.filter(li => listener !== li)
        })
    }

    dispatch({});

    return { subscribe, getState, dispatch };
}


export { createStore };
