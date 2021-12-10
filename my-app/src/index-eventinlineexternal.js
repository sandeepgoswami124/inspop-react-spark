import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from 'immer';

class Counter extends Component {
    //state 
    state = {
        value: 0
    }
    //event handler :External event handler
    onIncrement = event => {
        this.setState(prevState => {
            return produce(prevState, draft => {
                draft.value += 1
            });
        })
    };
    render() {
        console.log(this.state)
        return <>
            <h1>Counter-State</h1>
            <h2>Value {this.state.value}</h2>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={event => {
                this.setState(prevState => {
                    return produce(prevState, draft => {
                        draft.value -= 1
                    });
                })
            }}>-</button>
        </>
    }
}

const App = props => <div>
    <Counter />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))