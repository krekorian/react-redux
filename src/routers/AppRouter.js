import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpExpensePage from '../components/HelpExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header';


const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={ExpenseDashboardPage}></Route>
    <Route  path='/create' component={AddExpensePage}></Route>
    <Route  path='/edit/:id' component={EditExpensePage}></Route>
    <Route  path='/help' component={HelpExpensePage}></Route>
    <Route component={NotFoundPage}></Route>
    </Switch>
    </div>
   
    
    </BrowserRouter>
)

export default AppRouter;