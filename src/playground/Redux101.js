import { createStore } from 'redux';

/* The store tracks our changing data over time. There is no state the first time this function is used
 Whatever you set state to here WILL be used as the default. 

 Actions -> these are used to change the state if I'd like to add to the count or reset the count we need an action
 An Action is just an object that gets sent to the store

*/

// Action Generator functions
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {}) =>  ({
    type: 'DECREMENT',
    decrementBy
})

//setCount 
const setCount = ({count = 1 } = {}) => ({
    type: 'SET',
    count
})

//resetCount 
const resetCount = () => ({
    type: 'RESET'
})


 /* 
Reducers :
1.) Reducers are pure functions
2.) Never change state or action -> return a new state object
*/
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState()); 
})


// I'd like to increment the count 
// convention is all caps 
// to send to the store we need the method store.dispatch(); 
store.dispatch(incrementCount({incrementBy: 5 })); 

store.dispatch(incrementCount()); 


store.dispatch(resetCount()); 

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));


store.dispatch(setCount({count: 101})); 