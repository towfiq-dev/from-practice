import React, { useState } from 'react';

const useCounter = (defaultValue = 0) => {
    const [counter, setCounter] = useState(defaultValue)
  
  const handleCount = ()=>{
    const newCount = counter + 1
    setCounter(newCount)
  }
  
  const handleCount2=()=>{
    const newCount =counter - 1
    setCounter(newCount)
  }
  return [counter, handleCount, handleCount2]
};

export default useCounter;