import React, { useContext, useState } from 'react';
import './App.css';
import {transactionContext} from './TransContext.js';

function Child() {
   let {transaction, AddTransaction} = useContext(transactionContext) 
   let [newDesc , setDesc] = useState("");
   let [newAmount , setAmount] = useState(0);

   const handleAddition = (event) =>
   {
        event.preventDefault();
        console.log(newDesc , newAmount);
        AddTransaction({
            Amount: newAmount,
            Description:newDesc
        })
   }

   const getIncome = ()=>{
       
       let income=0;
       for (var i=0 ; i<transaction.lenght; i++){
           if(transaction[i].Amount > 0)
           income += transaction[i].Amount
       }
       return income;
       
   }


   const getExpense = ()=>{
    let expense=0;
    for (var i=0 ; i<transaction.lenght; i++){
        if(transaction[i].Amount < 0)
        expense+= transaction[i].Amount
    }
    return expense ;
   
}





  return (
    <div className="container">
        <h1 className="text-center"> Expense Tracker</h1>
        <h3>Your Balance <br/> $260</h3>

        <div className="expense-container">
        <h3>Income <br/>{getIncome()}</h3>
        <h3>Expense <br/>{getExpense()}</h3>

        </div>
        <h3>History</h3>
        <hr/>
        <ul className="transaction-list">
            {
            transaction.map((tranObj , ind) => 
            {
             return(
                    <li key={ind}>
                <span> {tranObj.Description} </span>
                <span>  {tranObj.Amount} </span>
            </li>
                )
          }) 
             }
        </ul>
        <h3>Add new transaction</h3>
        <hr/>
        <form className="transaction-from" onSubmit={handleAddition}>
            <label>
                Enter Description <br/>  
                <input type="text" required onChange={(ev)=> {
                    setDesc (ev.target.value);
                }}/>
            </label>
                <br/>
            <label>
                Enter Amount <br/> 
                <input type="number" required onChange={(ev)=>{
                    setAmount(ev.target.value)
                }} />
            </label>
                <br/>
            <input type="submit" value="Submit" />

        </form>
    </div>
  );
}

export default Child;
