import { createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import produce from "immer";

//redux
const initalState = {
    value: 100
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value += action.payload;
            });
        default:
            return state;
    }
}
const store = createStore(counterReducer)
/////////////////////////////////////////////////////////////////////////////////////
//Redux state is supplied to react component as prop: ReduxState will be React Props
//mapper function /selector function

function mapStateToProps(state) {
    return {
        //reactProp: reduxState
        value: state.value
    } // state to prop binding
}
/////////////////////////////////////////////////////////////////////////////////////
//react component

const Counter = props => {

    const onIncrement = evt => {
        props.dispatch({ type: 'counter/increment' })
    }
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value {props.value}</h2>
        <button onClick={onIncrement}>+</button>
    </>
}

//merge the View + Redux
const CounterHOC = connect(mapStateToProps)(Counter)

const App = props => <div>
    <Provider store={store}>
        <CounterHOC />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))

