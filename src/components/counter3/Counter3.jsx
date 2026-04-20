import React, { useMemo, useState } from 'react';

const Counter3 = () => {
  const [increase, setIncrease] = useState(0)
  const [decrease, setDecrease] = useState(0)
  const trouble = useMemo(()=>{
  console.log('.........');
    return increase * 5
  },[increase])
  // const trouble = ()=> {
    
  // }

  return (
    <div>
      <h1>{trouble}</h1>
      <button onClick={()=> setIncrease(increase + 1)} className='btn'>Plus {increase}</button><br />
      <button onClick={()=> setDecrease(decrease - 1)} className='btn'>Minus {decrease}</button>
    </div>
  );
};

export default Counter3;