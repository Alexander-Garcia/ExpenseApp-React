import uuid from 'uuid'; 
import database from '../firebase/firebase'

/*  
    Component calls action generator 
    action generator returns an object
    component dispatches object
    redux store changes

    component calls action generator 
    action generator returns function
    component dispatches function (?)
    function runs (has the ability to dispastch other actions and do whatever it wants)
*/

//     ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//     REMOVE_EXPENSE
 export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}


//     EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses 

})

//export const startSetExpenses
// 1.) Fetch all expense data once
// 2.) Parse data into an array
// 3.) Dispatch SET_EXPENSES 
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [] 

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpenses(expenses))
        })
    }
}