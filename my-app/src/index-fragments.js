import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Header, MenuBar } from './header'
import { Footer } from './footer/footer'

const Page = props => <div>
    {props.children}
</div>

const Grid = props => {
    return <table border="1">
        <thead >
            <Columns />
        </thead>
        <GridBody users={props.datasource} />
    </table>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}

//withoutFragement
// const Columns = props => {
//     return <div>
//         <td>Name</td>
//         <td>Location</td>
//     </div>
// }
//with Fragement

// const Columns = props => {
//     return <React.Fragment>
//         <td>Name</td>
//         <td>Location</td>
//     </React.Fragment>
// }

// const Columns = props => {
//     return <Fragment>
//         <td>Name</td>
//         <td>Location</td>
//     </Fragment>
// }

const Columns = props => {
    return <>
        <th>id</th>
        <th>name</th>
        <th>email</th>
    </>
}

const USERS = [
    { id: 1, name: 'subramaian', email: 'subu@gmail.com' },
    { id: 2, name: 'Dodge', email: 'dodge@gmail.com' }
]
const App = () => <div>
    <Page>
        <Header />
        <MenuBar />
        <Grid datasource={USERS} />
        <Footer />
    </Page>
</div>


ReactDOM.render(<App />, document.getElementById('root'))