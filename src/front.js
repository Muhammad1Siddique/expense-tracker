import React from 'react'

const Front =() =>{
    let transactions = [
        {desc: "Cash",   amount: +500},
        {desc: "Book",   amount: -200}, 
        {desc: "Camera", amount: -100}
    ]
    return( 
        <div className="container w3-round">
            <h2 className="w3-center w3-padding-16"><strong>Expense Tracker</strong></h2>
            <div className="w3-container">
                <p>
                    <strong>YOUR BALANCE</strong>
                    <h2><strong>$450.00</strong></h2>
                </p>
            </div>
            <div className="w3-container">
                <div className="w3-row w3-card-2 w3-white">
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>INCOME</strong><br/><span className="w3-text-green">$600.00</span></h4>
                    </div>
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>EXPENSE</strong><br/><span className="w3-text-red">$150.00</span></h4>
                    </div>
                </div>
            </div>  
            <div className="w3-container history">
                <h4 className="w3-border-bottom">History</h4>

                {transactions.map((transobj, ind)=>{
                    let chec;
                    if(Number(transobj.amount)>0){
                         chec = true;
                    }else{
                         chec = false;
                    }
                    return(
                        <div className={`w3-panel w3-rightbar w3-card-2 ${chec ? 'w3-border-green w3-pale-green':'w3-border-red w3-pale-red'}`}>
                            <p><span>{transobj.desc}</span><span>{transobj.amount}</span></p>
                        </div>
                    )
                })}
                
                
            </div>
            <div className="w3-container">
                <h4 className="w3-border-bottom">Add New Transactions</h4>
                  <form >
                    <p><label>Description</label>
                    <input className="w3-input w3-border" name="desc" type="text" required/>
                    </p>
                    <p><label>Amount<br/><small>negative for expense, positive for income</small></label>
                    <input className="w3-input w3-border" name="price" type="number" required/></p>
                    <p>
                    <input className="w3-purple w3-button w3-border" name="submit" type="submit" value="Add Transaction"/></p>
                  </form>
            </div>
        </div>
    )
} 

export default Front;            