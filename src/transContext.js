import React, {createContext, useReducer} from 'react'
import TransactionReducer from './transReducer'

const initialTransactions = [
    {amount: 500,  desc: "Cash"},
    {amount: -200, desc: "Book"},
    {amount: -80, desc: "Pen"},
    {amount: 250, desc: "Cash"}
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

    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    ) 
}