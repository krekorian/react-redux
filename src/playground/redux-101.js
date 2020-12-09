import React from 'react'
import {createStore} from 'redux';

//action generator

const incrementCount=({incrementBy=1}={})=>{
    return {
        type:'INCREMENT',
        incrementBy
    }
}

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const resetCount=()=>{
    return {
        type:'RESET',
        count:0
    }
}

const setCount=({count})=>{
    return{
       type:'SET',
       count
    }
}

const countReducer =(state={count:0},action)=>{
    switch (action.type){
        
        case 'INCREMENT':
         const incrementBy=typeof action.incrementBy==='number' ? action.incrementBy:1;
        //  console.log(incrementBy)
            return {
                count:state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy=typeof action.decrementBy==='number' ? action.decrementBy:1;
            return{
                count:state.count-decrementBy
            }
        case 'SET':
            return{
                count:action.count
            }
        case 'RESET':
            return {
            count:0
        }
        default:
            return state
    }
    
}

const store=createStore(countReducer)

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// })

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount())
// unsubscribe();

// store.dispatch({
//     type:'INCREMENT'
// })


store.dispatch(resetCount())

// store.dispatch({
//     type:'RESET'
// })


// store.dispatch({
//     type:'DECREMENT'
// })

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy:10}))

store.dispatch({
    type:'DECREMENT',
    decrementBy:10
})

// store.dispatch({
//     type:'SET',
//     count:101
// })

store.dispatch(setCount({count:100}))

const AppRouter =(state)=>{
    
    return(   
    <div>

    </div>
    ) 
}


export default AppRouter