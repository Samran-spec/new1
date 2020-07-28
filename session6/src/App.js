import React from 'react';
import './App.css';

import Child from './Child.js'

import {TransProvider} from './TransContext.js';

function App() {
  return (
    <TransProvider>
      <Child/>
    </TransProvider>
  );
}

export default App;
