import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList=(props)=>{
    console.log('inside ExpenseList   props')
    console.log(props)
    return ( <div>
        <h1>Expense List</h1>
      
        {props.expenses.map((expense)=>{
            console.log('props.expenses.map    ExpenseList.js');
            console.log(expense)
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>)
}
   


const mapStateToProps=(state)=>{
    console.log(`inside mapStateToProps  state `)
    console.log(state)
    return{
        expenses:selectExpenses(state.expenses,state.filters),
       
    }
}

export default connect(mapStateToProps)(ExpenseList);

// console.log('ConnectedExpenseList')
// console.log(ConnectedExpenseList)

// export default ConnectedExpenseList