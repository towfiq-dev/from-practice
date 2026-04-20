import React from 'react';
import useCounter from '../../hooks/useCounter';

const Counter2 = () => {
  const [counter, handleCount, handleCount2] = useCounter(10)
  return (
    <div>
      <h1 className='text-2xl font-bold'>{counter}</h1>
      <button onClick={()=>handleCount()} className='btn'>Increment</button>
      <button onClick={()=>handleCount2()} className='btn'>Decrement</button>
    </div>
  );
};

export default Counter2;