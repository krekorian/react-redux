import React from 'react';

const EditExpensePage=(props)=>{
    console.log(props);
    return(
        <div>
            This is my Edit expense {props.match.params.id} component
        </div>
    )
}

export default EditExpensePage;