import React, {useContext} from 'react';
import CounterContext from './CounterContext';



const Child = () => {
    let counterVal = useContext(CounterContext)
    console.log(counterVal);
 return(

    <div>
        <h1>this is child</h1>
        <h3>Counter value is {counterVal[0]}</h3>
        <button onClick={()=> {counterVal[1](++counterVal[0])}}>INCREAMENT</button>
    </div>
     
 )
}
export default Child;