import React from 'react';
import ReactDOM from 'react';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>

    </div>
)

    

// const withAdminWarning=(WrappedComponent)=>{
  
// return (props)=>{
//     // console.log(props)
//     return (<div>
//         {props.isAdmin && <p>This is private info, please don't share!</p>}
//         <WrappedComponent {...props}/>
//         </div>)
//         }
// }


const requireAuthentication=(WrappedComponent)=>{
    
return (props)=>{
    // console.log(props)
    return (<div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ):(
            <p>Please log in to view information</p>
        )}
        </div>)
}
}
// ReactDOM.render(<info info="These are the details"/>, document.getElementById('app'))
// const AdminInfo=withAdminWarning(Info);
const AdminInfo=requireAuthentication(Info);

export  default AdminInfo