import { createStore } from "redux";


//action constants
export const increment = 'counter/increment';
export const decrement = 'counter/decrement';

//reducer
//biz logic: pure function
export const counterReducer = (initalState = { value: 0 }, action) => {
    switch (action.type) {
        case increment:
            //immutable code
            return { ...initalState, value: initalState.value + action.payload }
        case decrement:
            return { ...initalState, value: initalState.value - action.payload }
        default:
            return initalState;
    }
}

export const store = createStore(counterReducer);

//get new state
store.subscribe(() => {
    console.log(store.getState())
});

//sending request
const incrementAction = {
    type: increment,
    payload: 10
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)

store.dispatch({ type: decrement, payload: 2 })
store.dispatch({ type: decrement, payload: 5 })