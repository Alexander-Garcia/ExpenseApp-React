import React from 'react'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'
import { shallow } from 'enzyme'

test('should render ExpenseListItem with one expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()   
})