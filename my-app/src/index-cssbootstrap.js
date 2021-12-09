import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

const theme = {
    backgroundColor: 'red',
    fontSize:50
}
const Page = props => {
    return <div className="container">
        <p style={theme}>
            React Rocks!   <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </p>

    </div>
}
const App = props => <>
    <Page />
</>

ReactDOM.render(<App />, document.getElementById('root'));