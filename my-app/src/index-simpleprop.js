import React from 'react';
import ReactDOM from 'react-dom'

//props = {name:'',message:''}
const Hello = props => {
    console.log(props);
    return <h2>{props.message} {props.name}</h2>
}


// ReactDOM.render(Hello("Subramanian"), document.getElementById('root'))
ReactDOM.render(<Hello name="Subramanian" message="Hai" />, document.getElementById('root'))

