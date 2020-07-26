import React, {useReducer} from 'react';

import CountReducer from './CounterReducer.js';

const Child2 = () =>{
    let [state ,dispatch] = useReducer(CountReducer , 10);
    
    return(
        <div>
            <h3>Value of reducer is {state}</h3>
           <button onClick = {()=> dispatch('INCREAMENT') }>INCREAMENT Reducer</button>
        
        </div>
    )

}

export default Child2;