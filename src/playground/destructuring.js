import React from 'react'

console.log("inside destructuring")


// const person={
//     name:'Vartan K',
//     age:35,
//     location:{
//         city:'Los Angeles',
//         temp:92
//     }
// }

// const {name:firstName ='Anonumous',age }=person;
// console.log(`${firstName} is ${age}`)

// const {city,temp:temprature}=person.location
// if (city && temprature){
//     console.log(`${temprature} in ${city}`)
// }


// const book={
//     title:'Ego is the enemy',
//     author:"Ryan Holiday",
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {publisher:publisherName='Self Publisher'}=book.publisher;

//     console.log(`${publisherName}`)


const address=['15522 Labrador St',"Los Angeles", 'California','91343']

const [,,state='New York']=address

console.log(`You are in  ${state}`)


const item=['coffee (hot)','$2.00','$2.50','$2.75']
const [itemName,,mediumPrice]=item

console.log(`A ${itemName} costs ${mediumPrice}`)





const destructuring =(state)=>{
    
    return(   
    <div>

    </div>
    ) 
}


export default destructuring