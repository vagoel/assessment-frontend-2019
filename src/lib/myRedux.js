
const createStore = (reducer) => {
    let listeners = [];
    let state;

    // returns the application state
    const getState = () => state;

    //  to calculate the new state we call the reducer with the current state and the action being dispatched. After the state was updated, we need to notify every changed listener, by calling it 
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    // stores all listeners and provide a way to unsubscribe a listener
    const subscribe = (listener) => {
        listeners.push(listener);
        return (() => {
            listeners = listeners.filter(li => listener !== li)
        })
    }

    // set the initail state of application by passing empty object so that the reducer retuurns default state
    dispatch({});

    return { subscribe, getState, dispatch };
}


export { createStore };
