import React, { useState } from 'react';

const useCounter2 = (defaultValue = 0) => {
  const [counter, setCounter] = useState(defaultValue)
  

  const handlePlus=()=>{
    const newCount = counter + 1
    setCounter(newCount)
  }

  const handleMinus=()=>{
    const newCount = counter - 1
    setCounter(newCount)
  }

  
  return [counter, handlePlus, handleMinus]
};

export default useCounter2;