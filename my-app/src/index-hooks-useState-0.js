import React, { useState } from 'react';
import ReactDOM from 'react-dom';


//hooks:useState
const CounterApp = props => {
    //declare state variables
    const [value, setValue] = useState(props.init)
    //Listener
    const onIncrement = evt => {
        setValue(state => {
            return state + 1
        })
    }
    return <div>
        <h1>Value: {value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>

    </div>
}


const App = props => <div>
    <CounterApp init={10} />
</div>
ReactDOM.render(<App />, document.getElementById('root'))