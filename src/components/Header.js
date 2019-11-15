/* 
activeClassName is a prop on NavLink for when an element is active
These NavLinks operate just like the Routes in that you have to set the "/" to exact matching
otherwise it will be active by default

*/
import React from 'react'; 
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header className="header">
    <div className="content-container">
    <div className="header__content">
        <Link className="header__title" to="/dashboard" >
            <h1>Expensify Cap'n</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(Header); 
