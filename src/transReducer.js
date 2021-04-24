const TransactionReducer =  ((state, action)=>{
    
    switch(action.type){
        case "add_transaction":{
            return[...state, action.payload]
        }
        case "delete_transaction":{
            let value = state[action.payload];
            return state.filter(item => item !== value)
        }
        default: 
            return state;
    }
})

export default TransactionReducer;