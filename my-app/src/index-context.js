import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'



const theme = {
    dark: "red"
}
//create Context

// const ThemeContext = React.createContext('dark')
const { Provider, Consumer } = React.createContext('dark')


// const App = () => <div>
//     <ThemeContext.Provider value={theme}>
//         <Page />
//     </ThemeContext.Provider>
// </div>
const App = () => <div>
    <Provider value={theme}>
        <Page />
    </Provider>
</div>
const Page = props => <>
    <Toolbar />
</>

const Toolbar = props => <div>
    <ThemedButton />
</div>

const ThemedButton = props => <div>
    <Consumer>
        {theme => {
            return <Button theme={theme.dark} />
        }
        }
    </Consumer>

</div>
const Button = props => <div>
    <button style={{ color: 'whitesmoke', backgroundColor: props.theme }}>Hello!</button>
</div>


ReactDOM.render(<App />, document.getElementById('root'))