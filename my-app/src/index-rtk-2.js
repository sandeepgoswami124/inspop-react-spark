import React, { combineReducers } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createReducer } from "@reduxjs/toolkit";

//redux
const initalState = {
    value: 10
}

const increment = 'counter/increment';

const incrementReducer = createReducer(initalState, builder => {
    builder.addCase(increment, (state, action) => {
        //state == immer draft reference
        state.value++;
    }).addDefaultCase((state, action) => { })
});

const store = configureStore({ reducer: incrementReducer })

const Counter = props => {

    //should selected state based on reducer
    // const value = useSelector(state => state.reducer.reducerstatevariable);
    const value = useSelector(state => state.value);

    const onIncrement = useDispatch();

    //action creators
    const increment = () => ({
        type: 'counter/increment',
        payload: undefined
    });


    return <>
        <h1>Counter Increment Value : {value}</h1>
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>

    </>
}


const App = props => {
    return <div>
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'))