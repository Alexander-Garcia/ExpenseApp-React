import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss'
import './firebase/firebase'


const store = configureStore();

store.subscribe(() => {
    const state = store.getState(); 
    const visible = getVisibleExpenses(state.expenses, state.filters); 
    //console.log(visible); 
})



store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, id: 1234 }))
store.dispatch(addExpense({ description: 'Gas Bill' , createdAt: 1000, id: 2345 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, id: 987 }))



// const state = store.getState();
// const visible = getVisibleExpenses(state.expenses, state.filters);
// console.log(visible);



//addExpense -> water bill
// addexpense -> gas bill
// setTextFilter -> bill (2 items) then switch to water to see one item. 
// use getVisibleExpenses function to print visibleones 


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx,
    document.getElementById('app')); 
