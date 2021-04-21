import React, { useContext, useState } from 'react'
import {TransactionContext} from './transContext'
const Front =() =>{
    let {transactions, addTransaction} = useContext(TransactionContext);
    let[newDesc, setDesc]=useState("");
    let[newAmount, setAmount]=useState(0);

    const handleAddition = (event)=>{
        event.preventDefault();
        addTransaction({
            amount: newAmount,
            desc: newDesc
        })
    }
    const grossIncome =() => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
            {
                income += transactions[i].amount;
            }
        }
        return income;
    }
    const totalExpense =() =>{
        let expense = 0; 
        for(let j = 0; j< transactions.length; j++ ){
            if(transactions[j].amount < 0)
            {
                expense += transactions[j].amount;
            }
        }
        return expense;
    }
    return( 
        <div className="container w3-round">
            <h2 className="w3-center w3-padding-16"><strong>Expense Tracker</strong></h2>
            <div className="w3-container">
                <strong>YOUR BALANCE</strong>
                <h2><strong>${grossIncome() + totalExpense()}</strong></h2>
            </div>
            <div className="w3-container">
                <div className="w3-row w3-card-2 w3-white">
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>INCOME</strong><br/><span className="w3-text-green">${grossIncome()}</span></h4>
                    </div>
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>EXPENSE</strong><br/><span className="w3-text-red">${totalExpense()}</span></h4>
                    </div>
                </div>
            </div>  
            <div className="w3-container history">
                <h4 className="w3-border-bottom">History</h4>

                {transactions.map((transobj, index)=>{
                    let chec;
                    if(Number(transobj.amount)>0){
                         chec = true;
                    }else{
                         chec = false;
                    }
                    return(
                        <div key={index} className={`w3-panel w3-rightbar w3-card-2 ${chec ? 'w3-border-green w3-pale-green':'w3-border-red w3-pale-red'}`}>
                            <p><span>{transobj.desc}</span><span>${transobj.amount}</span></p>
                        </div>
                    )
                })}
                
                
            </div>
            <div className="w3-container">
                <h4 className="w3-border-bottom">Add New Transactions</h4>
                  <form onSubmit={handleAddition} >
                    <p><label>Description</label>
                    <input className="w3-input w3-border" onChange={(ev)=>setDesc(ev.target.value)}  type="text" required/>
                    </p>
                    <p><label>Amount<br/><small>negative for expense, positive for income</small></label>
                    <input className="w3-input w3-border" onChange={(ev)=>setAmount(ev.target.value)}  type="number" required/></p>
                    <p>
                    <input className="w3-purple w3-button w3-border" name="submit" type="submit" value="Add Transaction"/></p>
                  </form>
            </div>
        </div>
    )
} 

export default Front;            