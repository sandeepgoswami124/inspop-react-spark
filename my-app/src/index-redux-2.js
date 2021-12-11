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

//action creator
// function incrementAction(payload = 1) {
//     return {
//         type: increment,
//         payload: payload
//     }
// }
const incrementAction = (payload = 1) => ({
    type: increment,
    payload
});

store.dispatch(incrementAction(50))
store.dispatch(incrementAction(100))
store.dispatch(incrementAction(23))

store.dispatch({ type: decrement, payload: 2 })
store.dispatch({ type: decrement, payload: 5 })