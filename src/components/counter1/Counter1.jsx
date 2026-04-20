import React, { useState } from 'react';

const Counter1 = () => {
  const [counter, setCounter] = useState(0)
  
  const handleCount = ()=>{
    const newCount = counter + 1
    setCounter(newCount)
  }
  const handleCount2=()=>{
    const newCount =counter - 1
    setCounter(newCount)
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>{counter}</h1>
      <button onClick={()=>handleCount()} className='btn'>Increment</button>
      <button onClick={()=>handleCount2()} className='btn'>Decrement</button>
    </div>
  );
};

export default Counter1;