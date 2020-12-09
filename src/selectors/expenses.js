

export default (expenses,{text,sortBy,startDate,endDate})=>{
   
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || expense.createdAt>=startDate;
        const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        console.log("startDateMatch endDateMatch textMatch")
        console.log(startDateMatch ,endDateMatch, textMatch)
        console.log(typeof startDate!=='number')
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createAt<b.createAt ? 1:-1
        }else if(sortBy==='amount'){
            return a.amount<b.amount ?1:-1
        }
    })
}

// export default getVisibleExpenses;