import React from 'react';
import ReactDOM from 'react-dom'

//Component creation via function //es 5 function
function Heading() {
    //return jsx elements
    return <h1>Hello React!</h1> //
}

//Arrow function
// const Hello = () => {
//     return <h1>Hello React!</h1> //
// }
const Hello = () => <h1>Hello React!</h1>

//imperative way of calling function: Dont do this.
// ReactDOM.render(Heading(),document.getElementById('root'))

//Declartive way of calling function : Using HTML Tag Syntax <>
// ReactDOM.render(<Heading></Heading>,document.getElementById('root'))

ReactDOM.render(<Hello></Hello>, document.getElementById('root'))

