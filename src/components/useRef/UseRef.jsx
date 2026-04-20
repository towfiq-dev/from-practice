import React, { useRef } from 'react';

const UseRef = () => {
  const nameRef = useRef()
  const Ref=(e)=>{
    e.preventDefault()
  }
  

  return (
    <div onSubmit={Ref}>
      <form className='grid justify-center mt-15'>
      <label className='text-[18px] font-medium' htmlFor="">Name</label>
      <input onChange={} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="text" name='name' id="" placeholder='Enter your name'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Email</label>
      <input  className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="email" name='email' id="" placeholder='Enter your email'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Password</label>
      <input className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="password" name='password' id="" placeholder='Enter your password'/> <br />

      <input className='btn text-[17px] font-semibold' type="submit" value="Submit" name='' id=""/>
      </form> 
    </div>
  );
};

export default UseRef;