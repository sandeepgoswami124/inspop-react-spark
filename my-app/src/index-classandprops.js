import React, { Component } from 'react';
import ReactDOM from 'react-dom'



class Profile__ extends Component {

    render() {
        console.log(this.props)
        return <div>
            <h2>Name : {this.props.name} </h2>
            <h2>Star: {this.props.star}</h2>
            <h2>Status :{this.props.status ? "Active" : "InActive"}</h2>
            <address>City {this.props.address.city}</address>
            <h2>Friends</h2>
            <ul>
                {
                    this.props.friends.map(friend => <li>{friend}</li>)
                }
            </ul>
        </div>
    }
}
class Profile extends Component {

    render() {
        const { name, star, status, address: { city }, friends } = this.props;
        return <div>
            <h2>Name : {name} </h2>
            <h2>Star: {star}</h2>
            <h2>Status :{status ? "Active" : "InActive"}</h2>
            <address>City {city}</address>
            <h2>Friends</h2>
            <ul>
                {
                    friends.map((friend, index) => <li key={index.toString()} >{friend}</li>)
                }
            </ul>
        </div>
    }
}

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