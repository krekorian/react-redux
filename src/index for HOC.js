import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './playground/redux-101'
// import Destructuring from './playground/destructuring'
// import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
// import AppRouter from './playground/redux-expensify'
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './playground/hoc'


// const store=configureStore();

// // console.log(store)
// store.dispatch(addExpense({description:'Water Bill'}))
// store.dispatch(addExpense({description:'Gas Bill'}))
// store.dispatch(setTextFilter('water'))

// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
// console.log("visibleExpenses")
// console.log(visibleExpenses)

// console.log("store.getState()");
// console.log(store.getState());

// ReactDOM.render(<AppRouter />, document.getElementById('root'));
ReactDOM.render(<AppRouter isAuthenticated={true} info='These are the details' />, document.getElementById('root'));
// ReactDOM.render(<IndecisionApp name="Andrew" age={26} option={['Option 1', 'Option 2', 'Option 3']} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
