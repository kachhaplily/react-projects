import React, { useState } from 'react'


const Incr = () => {
 
    const [value,setValue]=useState(0);
    const incr=()=>{
        setValue(value+1)        
    }
    const decr=()=>{
        setValue(value-1)
    }
    const multiply=()=>{
        setValue(value*5);
    }
   
  return (
    <>
    <div>{value}</div>
    <button onClick={incr}>Increment</button>
    <button onClick={decr}>Increment</button>
    <button onClick={multiply}>X5</button>
    </>
  )
  
}

export default Incr

