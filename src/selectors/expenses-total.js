// This file is supposed to add the amount from each visible expense 

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum , value) => sum + value, 0)
}