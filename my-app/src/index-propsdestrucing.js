import React from 'react';
import ReactDOM from 'react-dom'

const Profile__ = props => {
    const { name, star, status, address: { city }, friends } = props;
    return <div>
        <h2>Name : {name} </h2>
        <h2>Star: {star}</h2>
        <h2>Status :{status ? "Active" : "InActive"}</h2>
        <address>City {city}</address>
        <h2>Friends</h2>
        <ul>
            {
                friends.map(friend => {
                    return <li>{friend}</li>
                })
            }
        </ul>
    </div>
}

const Profile = ({ name, star, status, address: { city }, friends }) => <div>
    <h2>Name : {name} </h2>
    <h2>Star: {star}</h2>
    <h2>Status :{status ? "Active" : "InActive"}</h2>
    <address>City {city}</address>
    <h2>Friends</h2>
    <ul>
        {
            friends.map(friend =><li>{friend}</li>)
        }
    </ul>
</div>

const App = () => {
    const name = "Subramanian";
    const star = 4.5
    const status = true;
    //object
    const address = {
        city: 'Coimbatore'
    }
    //
    const friends = ["Dodge", "Luke", "Nikson", "Milles"]
    return <div>
        <Profile name={name} star={star} friends={friends} status={status} address={address} />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))