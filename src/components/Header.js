import React from 'react';
import {NavLink} from 'react-router-dom'

function headerClick() {
    console.log('headerClick')
  
    // alert("redirect")
    window.location.href = "/"
    // return <NavLink exact to='/' activeClassName="is-active">Dashboard</NavLink>
}
    
   
    

const Header=()=>(
    <header>
        <h1 onClick={headerClick}>Expensify</h1>
        <NavLink exact to='/' activeClassName="is-active">Dashboard</NavLink>
        <NavLink to='/create' activeClassName="is-active">Create Expense</NavLink>
        {/* <NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink> */}
        <NavLink to='/help' activeClassName="is-active">Help Page</NavLink>
    </header>

)

export default Header;