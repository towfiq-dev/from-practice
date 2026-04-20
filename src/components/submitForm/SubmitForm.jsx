import React, { useState } from 'react';

const SubmitForm = () => {
  const [text, setText] = useState(null)
  console.log(text);

  const [email, setEmail] = useState(' ')
  console.log(email);
  
  const submitFrom = (e)=>{
    e.preventDefault()
    console.log('submitted', e.target.email.value);
  }
  const nameText=(e)=>{
    //console.log(e.target.value);
    setText(e.target.value)
  }

  const emailInput=(e)=>{
    setEmail(e.target.value)
  }
  return (
    <div onSubmit={submitFrom}>
      <form className='grid justify-center mt-15'>
      <label className='text-[18px] font-medium' htmlFor="">Name</label>
      <input onChange={nameText} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="text" name='name' id="" placeholder='Enter your name'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Email</label>
      <input onChange={emailInput} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="email" name='email' id="" placeholder='Enter your email'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Password</label>
      <input className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="password" name='password' id="" placeholder='Enter your password'/> <br />

      <input className='btn text-[17px] font-semibold' type="submit" value="Submit" name='' id=""/>
      </form>
    </div>
  );
};

export default SubmitForm;