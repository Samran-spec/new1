import React, { useState } from 'react';

import Parent from './Parent.js'

import CounterContext from './CounterContext.js';

function App() {
  let countState = useState(30);
  //let [count , setCount ] = useState(30) 
  return (
    <CounterContext.Provider value= {countState}> 
    <div>
      <Parent/>
    </div>
    </CounterContext.Provider>
  )
}
export default App;
//name="samran"