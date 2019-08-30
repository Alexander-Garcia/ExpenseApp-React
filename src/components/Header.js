/* 
activeClassName is a prop on NavLink for when an element is active
These NavLinks operate just like the Routes in that you have to set the "/" to exact matching
otherwise it will be active by default

*/
import React from 'react'; 
import {NavLink} from 'react-router-dom'; 

const Header = () => (
    <header>
        <h1>Expensify me Cap'n</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>ET Phone Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help Page</NavLink>
    </header>
)

export default Header; 
