import React, {useState} from  'react';

import './App.css'; 

import {Message} from './message.js'
function App() {
  let [count, setCount] = useState(1);
  let [isDay , setDay]= useState(true);
  return (
    <div className= {` box ${ isDay ? 'daylight' : '' }`}>
      <h1>Day time = {isDay ? 'Afternoon' : 'Night'}</h1>
      <Message counter={count} />
    <br/>
    <button onClick={()=> setCount (++count) }>Update counter</button>
    <button onClick={()=> setDay (!isDay) }>Update color</button>
    </div>
  )
}
 
export default App;
