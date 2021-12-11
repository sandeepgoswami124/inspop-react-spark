import { createStore, combineReducers } from "redux";


//action constants
export const increment = 'counter/increment';
export const decrement = 'counter/decrement';

//multi reducer

export const incrementReducer = (initalState = { value: 0 }, action) => {
    switch (action.type) {
        case increment:
            return { ...initalState, value: initalState.value + action.payload }
        default:
            return initalState;
    }
}
export const decrementReducer = (initalState = { value: 100 }, action) => {
    switch (action.type) {
        case decrement:
            return { ...initalState, value: initalState.value - action.payload }
        default:
            return initalState;
    }
}
//coimbine all reducers
const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})
export const store = createStore(rootReducer);

//get new state
store.subscribe(() => {
    console.log(store.getState())
});

const incrementAction = (payload = 1) => ({
    type: increment,
    payload
});

store.dispatch(incrementAction(50))
store.dispatch(incrementAction(100))
store.dispatch(incrementAction(23))

store.dispatch({ type: decrement, payload: 2 })
store.dispatch({ type: decrement, payload: 5 })