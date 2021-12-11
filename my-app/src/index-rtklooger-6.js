import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import logger from 'redux-logger'

const state = {
    value: 10
}
const incrementSlice = createSlice({
    name: 'counterinc',
    initialState: state,
    reducers: {
        increment(state, action) {
            state.value++;
        }
    }
});

const decrementSlice = createSlice({
    name: 'counterdec',
    initialState: state,
    reducers: {
        decrement(state, action) {
            state.value--;
        }
    }
});

// console.log(incrementSlice)
const { increment } = incrementSlice.actions;
const { decrement } = decrementSlice.actions;

const rootReducer = combineReducers({
    increment: incrementSlice.reducer,
    decrement: decrementSlice.reducer
})

const store = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) })

const Counter = props => {

    const incrementValue = useSelector(state => state.increment.value);
    const decrementValue = useSelector(state => state.decrement.value);

    const onIncrement = useDispatch();
    const onDecrement = useDispatch();

    return <>
        <h1>Counter Increment Value : {incrementValue}  Counter Decrement Value {decrementValue}</h1>
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>
        <button onClick={() => {
            onDecrement(decrement())
        }}>Decrement</button>
    </>
}

const App = props => {
    return <div>
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
};
ReactDOM.render(<App />, document.getElementById('root'));
