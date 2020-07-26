import React from 'react';

import Child from './Child.js';

import Child2 from './/Child2.js'

const Parent=() => {
 return(
     <div>
        <Child/> 
        <Child2/>
     </div>
    
 )
}
export default Parent;
//name={props.name}