import React from 'react'
import { createContext, useReducer } from "react";
import TransReducer from './TransReducer.js';

const Initialtransaction = [
    {Amount: 500 , Description: "cash"},
    {Amount: -40 , Description: "Book"},
    {Amount: -200 , Description: "Camera"},
    {Amount: 500 , Description: "gold"}
]

export const transactionContext = createContext(Initialtransaction);


export const TransProvider = ({children}) => {
    let [state , dispatch] = useReducer(TransReducer, Initialtransaction); 

    function AddTransaction (transObj){
        dispatch({
            type: "ADD_TRANSACTION" ,
            payload: {
                Amount: transObj.Amount,
                Description: transObj.Description
            }
        })
    }
    return(
        <transactionContext.Provider value={{
            transaction: state,
             AddTransaction
        }}>
            {children}

        </transactionContext.Provider>
    )

}