import React from 'react';
import ReactDOM from 'react-dom'
import { Header, MenuBar } from './header'
import { Footer } from './footer/footer'
import { Body } from './body/body'

const Page = props => <div>
    {props.children}
</div>
const App = () => <div>
    <Page>
        <Header />
        <MenuBar />
        <Body />
        <Footer />
    </Page>
</div>


ReactDOM.render(<App />, document.getElementById('root'))