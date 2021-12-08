//DOM element creation using React.
import React from 'react';
import  ReactDOM  from 'react-dom';
//Create Heading Element.
const Heading = <h1>Hello React!</h1>;

//insert heading into div
ReactDOM.render(Heading,document.getElementById('root'))
