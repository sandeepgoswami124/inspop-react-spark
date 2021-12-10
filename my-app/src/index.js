//Custom Hooks
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useWindowTitle } from './hooks/usewindowtitlehook';
import { useWindowWidth } from './hooks/usewindowwidth';

//features;

const Customer = props => {
    //feaature-1 update Screen title
    const {setScreen } = useWindowTitle('Customer Manager')
    //feature 2 - get Window width
    const width = useWindowWidth();
    return <div>
        <h1>Custom Hooks</h1>
        <h1>Current Window width {width}</h1>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>
};

const App = () => {
    return <div>
        <Customer />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));