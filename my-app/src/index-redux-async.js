import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'todos':
            return state.concat(action.payload)
        default:
            return state;
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

function todocreator(todos) {
    return {
        type: 'todos',
        payload: todos
    }
}

function todosAsync() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
            res.json().then(todos => {
                dispatch(todocreator(todos));
            });
        })

    }
}
store.dispatch(todosAsync())