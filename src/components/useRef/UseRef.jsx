import React, { useRef, useState } from 'react';

const UseRef = () => {
  const nameRef = useRef(null)
  const emailRef = useRef('')
  const passRef = useRef('')
  const [error, setError] = useState('')
  const Ref=(e)=>{
    e.preventDefault()
    
    if (passRef.current.value.length < 5) {
      setError('sorry for that')
    }else{
      setError('')
      console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    }
  }
  

  return (
    <div >
      <form onSubmit={Ref}  className='grid justify-center mt-15'>
      <label className='text-[18px] font-medium' htmlFor="">Name</label>
      <input ref={nameRef} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="text" name='name' id="" placeholder='Enter your name'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Email</label>
      <input ref={emailRef} defaultValue={'fgvc@gmail.com'}  className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="email" name='email' id="" placeholder='Enter your email'/> <br />

      <label className='text-[18px] font-medium' htmlFor="">Password</label>
      <input ref={passRef} className='border-2 border-black text-[17px] font-medium w-80 h-5 rounded py-5 px-2 ' type="password" name='password' id="" placeholder='Enter your password'/> <br />

      <input className='btn text-[17px] font-semibold' type="submit" value="Submit" name='' id=""/>
      </form> 
      <p>{error}</p>
    </div>
  );
};

export default UseRef;