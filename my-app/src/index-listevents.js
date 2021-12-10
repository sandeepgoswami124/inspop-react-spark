import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from 'immer';
import { COMMENTS } from './mock-data/comments';

class CommentList extends Component {
    //state 
    state = {
        body: ''
    }

    selectComment = body => {
        console.log(body)
        this.setState(prevState => {
            return produce(prevState, draft => {
                draft.body = body;
            });
        })
    }

    render() {
        return <>
            <h1>List</h1>
            <ul>
                {
                    this.props.comments.map((comment, index) => {
                        return <li key={index} onClick={(event) => {
                            this.selectComment(comment.body);
                        }} >{comment.name}</li>
                    })
                }
            </ul>
            <hr />
            <h3>{this.state.body}</h3>
        </>
    }
}

const App = props => <div>
    <CommentList comments={COMMENTS} />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))