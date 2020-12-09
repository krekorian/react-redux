

const expensesReducerDefaultState=[];

const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    console.log("expensesReducer state")
    console.log(state)
switch(action.type){
    case 'ADD_EXPENSE':
        // return state.concat(action.expense)      // old way of concating the array
        return [
            ...state,
            action.expense
        ]
    case 'REMOVE_EXPENSE':
        // console.log(state)
        return state.filter(({id})=>id!==action.id)
    case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id===action.id){
            return{
                ...expense,
                ...action.updates
            }
}else{
    return expense;
}
        })
    default:
        return state;
}
};

export default expensesReducer;