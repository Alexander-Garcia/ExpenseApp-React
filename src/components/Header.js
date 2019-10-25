/* 
activeClassName is a prop on NavLink for when an element is active
These NavLinks operate just like the Routes in that you have to set the "/" to exact matching
otherwise it will be active by default

*/
import React from 'react'; 
import {NavLink} from 'react-router-dom'; 
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify me Cap'n</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>ET Phone Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(Header); 
