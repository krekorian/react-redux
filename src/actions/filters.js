

export const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
    })
    


export const sortByDate=()=>({
        type:'SORT_BY_DATE'
})
    
export const sortByAmount=()=>{
    return    ({
        type:'SORT_BY_AMOUNT'
    })
}
  
    

    
    
    
    
    
export const setStartDate=(startDate)=>({
        type:'SET_START_DATE',
        startDate
})


export const setEndDate=(endDate)=>{
        // console.log(EndDate)
        return{
        type:'SET_END_DATE',
        endDate
    }}
    