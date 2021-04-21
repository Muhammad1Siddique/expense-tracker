import {createContext} from 'react' 

const initialTransactions = [
    {amount: 500,  desc: "Cash"},
    {amount: -200, desc: "Book"},
    {amount: -80, desc: "Pen"}
] 

export const TransactionContext = createContext(initialTransactions);