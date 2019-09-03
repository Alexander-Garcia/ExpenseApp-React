import { createStore } from 'redux';

/* The store tracks our changing data over time. There is no state the first time this function is used
 Whatever you set state to here WILL be used as the default. 

 Actions -> these are used to change the state if I'd like to add to the count or reset the count we need an action
 An Action is just an object that gets sent to the store

*/
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
            return {
                count: state.count - decBy
            }
            case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState()); 
})


// I'd like to increment the count 
// convention is all caps 
// to send to the store we need the method store.dispatch(); 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});


store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});