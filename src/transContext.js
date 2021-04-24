import React, {createContext, useReducer} from 'react'
import TransactionReducer from './transReducer'

const initialTransactions = [
    {amount: -200, desc: "Book"},
    {amount: 500,  desc: "Cash"}
    
] 

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "add_transaction",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    function deleteTransaction(id){
        dispatch({
            type: "delete_transaction",
            payload: id
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    ) 
}