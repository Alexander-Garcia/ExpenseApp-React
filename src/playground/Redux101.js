import {createStore} from 'redux'; 

/* The store tracks our changing data over time. There is no state the first time this function is used
 Whatever you set state to here WILL be used as the default. 

 Actions -> these are used to change the state if I'd like to add to the count or reset the count we need an action
 An Action is just an object that gets sent to the store

*/
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
        return {
            count: state.count +1 
        }
        case 'DECREMENT': 
        return {
            count: state.count - 1
        }
        default: 
        return state; 
    } 
}); 


console.log(store.getState()); 

// I'd like to increment the count 
// convention is all caps 
// to send to the store we need the method store.dispatch(); 
store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState()); 

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState()); 