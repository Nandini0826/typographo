import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  
  return (
    <div className='bg-[#061039] text-[#E1F0F5] py-14'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center border w-[90%] p-6 sm:max-w-96 m-auto gap-4'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        </div>
        {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border bg-[#061039] text-[#E1F0F5]' placeholder='Name' required/> }
        <input type="text" className='w-full px-3 py-2 border bg-[#061039] text-[#E1F0F5]' placeholder='Email' required/>
        <input type="text" className='w-full px-3 py-2 border bg-[#061039] text-[#E1F0F5]' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your Password</p>
          {
            currentState === 'Login'
              ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
              : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          }
        </div>
        <button className='bg-[#E1F0F5] text-[#061039] px-6 py-2 rounded'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
    </div>
    
  )
}

export default Login