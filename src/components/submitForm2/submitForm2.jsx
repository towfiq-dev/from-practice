import React, { useState } from 'react';

const submitForm2 = () => {
const [text, setText] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
//console.log(text);
  
  const submitForm=(e)=>{
    if (password.length < 8) {
    setError('Your Password is incorrect')
  }else{
    setError('')
    console.log(text);
    console.log(email);
    console.log(password);
  }
    e.preventDefault()
    
    
    
  }
///
  // const nameText=(e)=>{
  // e.preventDefault()
  // setText(e.target.value);
  // }
  return (
    <div onSubmit={submitForm}>
      <form  className='grid justify-center mt-15'>
      <label className='text-[18px] font-medium' htmlFor="">Name</label>
      <input onChange={(e)=>setText(e.target.value)} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="text" name='name' id="" placeholder='Enter your name'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)}  className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="email" name='email' id="" placeholder='Enter your email'/> <br />

      <label  className='text-[18px] font-medium' htmlFor="">Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="password" name='password' id="" placeholder='Enter your password'/> <br />

      <input className='btn text-[17px] font-semibold' type="submit" value="Submit" name='' id=""/>
      </form>
      <p className='text-red-500'>{error}</p>
    </div>
  );
};

export default submitForm2;