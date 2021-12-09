import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';

//const Review = User,Comment

export const Movie = props => {
    return <div>
        <h2>{props.title}</h2>
        {/* <Review languages={props.reivew.languages} user={props.reivew.user} comment={props.reivew.comment} /> */}
        {/* Using spread Operator we can pass all prop in short  */}
        <Review {...props.reivew} />
    </div>
}

export const Review = props => {
    console.log(props)
    return <div>
        <User user={props.user}  />
        <Languages languages={props.languages}  />
        <Comment comment={props.comment} />
    </div>
}
export const User = props => <div>
    <h3>{props.user.name}</h3>
    <Avatar url={props.user.imgUrl} />
</div>

export const Languages = props => <ul>
    {
        props.languages.map((language, index) => <li key={index}>{language}</li>)
    }
</ul>
export const Avatar = props => <img height="50" width="50" src={props.url} />

export const Comment = props => <div>
    <h3>{props.comment.text}</h3>
    {/* <h3>{props.}</h3> */}
</div>


const review = {
    user: {
        name: 'Subramanian',
        imgUrl: logo
    },
    languages: ['english', 'tamil', 'hindi'],
    comment: {
        text: 'It is really good!',
        date: new Date()
    }
}
const App = () => <div>
    <Movie title="The Hunter" reivew={review} />
</div>


ReactDOM.render(<App />, document.getElementById('root'))