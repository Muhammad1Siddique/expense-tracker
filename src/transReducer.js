Const TransactionsReducer =((state, action)=>{
    switch(action.type){
        case "add_transactions":{
            return[action.payload, ...state]
        }
        default: 
            return state
    }
})

export default TransactionsReducer;