import { createStore } from "redux";


//action constants
export const increment  = 'counter/increment';
export const decrement  = 'counter/decrement';


//reducer
//biz logic: pure function
export const counterReducer = (initalState = { value: 0 }, action) => {
    switch (action.type) {
        case increment:
            //immutable code
            return { ...initalState, value: initalState.value + 1 }
        case decrement:
            return { ...initalState, value: initalState.value - 1 }
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
    type: increment
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)

store.dispatch({type:decrement})