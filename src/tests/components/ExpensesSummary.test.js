import { ExpensesSummary } from '../../components/ExpensesSummary'
import React from 'react'
import { shallow } from 'enzyme'

test('should correctly render expense summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render expense summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />)
    expect(wrapper).toMatchSnapshot()
})