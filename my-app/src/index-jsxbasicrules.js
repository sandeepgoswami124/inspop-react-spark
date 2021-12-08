import React from 'react';
import ReactDOM from 'react-dom'


// const Hello = () => <h1>Hello React!

// const Hello = () => 
//     <h1>Hello React!</h1>
//     <p>React is more declartive!</p>


const Hello = () => <div>
    <h1>Hello React!</h1>
    <p>React is more declartive!</p>
</div>
// ReactDOM.render(<Hello></Hello>, document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))

