import React from 'react'; 
import { Router, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage'; 
import { createBrowserHistory } from 'history'
import EditExpensePage from '../components/EditExpensePage'; 
import {ExpenseDashboardPage} from '../components/ExpenseDashboardPage'; 
import {HelpPage} from '../components/HelpPage'; 
import {NotFoundPage} from '../components/NotFoundPage'; 
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
/*

Path of "/" is the root 'landing' page
set exact to true so it looks for exact match to path before displaying
BrowserRouter can only have ONE child
Switch operates top down through the Route until it finds a path match. 
So I can put put the NotFoundPage without a path and by default it will activate when no other path matches occur

Placing Header above switch adds a header to every single page. Even the not found page.

placing the :id after the path such as /edit/:id allows for dynamic loading. So Route will dynamically match whatever value comes in 


*/

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>

)

export default AppRouter; 