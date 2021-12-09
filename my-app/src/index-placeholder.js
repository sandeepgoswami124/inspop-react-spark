import React from 'react';
import ReactDOM from 'react-dom'

const name = "Subramanian";

const Hello = () => {
    return <h2>Hello {name}</h2>
}


ReactDOM.render(<Hello></Hello>, document.getElementById('root'))
