import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from 'immer';

class Counter extends Component {
    //state 
    state = {
        value: 0
    }
    //event handler
    onIncrement = event => {
        console.log(event)
        console.log('onIncrement')
        //mutate the state.
        //this.state.value = this.state.value + 1
        //pure function: react provides built in pure function , 
        // this.setState(function (prevState) {
        //     //return  new State
        //     return {
        //         value: prevState.value + 1
        //     }

        // })
        // this.setState(prevState => {
        //     //return  new State
        //     return {
        //         value: prevState.value + 1
        //     }

        // })

        // this.setState(prevState => {
        //     //return  new State
        //     return Object.assign({}, prevState, { value: prevState.value + 1 })

        // })
        // this.setState(prevState => {
        //     //return  new State
        //     return { ...prevState, value: prevState.value + 1 }
        // })
        this.setState(prevState => {
            //return  new State
            return produce(prevState, draft => {
                draft.value += 1
            });
        })
        console.log(this.state)
    };
    render() {
        console.log(this.state)
        return <>
            <h1>Counter-State</h1>
            <h2>Value {this.state.value}</h2>
            <button onClick={this.onIncrement}>+</button>
        </>
    }
}

const App = props => <div>
    <Counter />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))