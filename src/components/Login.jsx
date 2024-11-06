import React from 'react';
import { FaFacebookF, FaGoogle, FaMicrosoft } from "react-icons/fa";
const Login = () => {
  return (
    <div className='w-screen h-screen bg-red-100 flex justify-center align-middle items-center'>
    <div className='flex flex-row bg-gray-100 p-5 w-[700px] m-20 items-center rounded-lg' >
        <div>
          <img className=' h-[400px] w-[400px] rounded-lg' src="/LoginImg.png" alt="" />
        </div>
        <div className="w-[2px] h-[350px] bg-gray-400 ml-5 mr-5"></div>
        <div className="login-card flex flex-col">
          <h2 className='text-red-500 font-bold '>Login</h2>
          <form className='flex flex-col p-5'>
              <input type="text" placeholder='Email' className='border-2 rounded-lg p-1 max-w-96 min-70 mt-5'/>
              <input type="password" placeholder='Password' className='border-2 rounded-lg p-1 max-w-96 min-70 mt-5'/>
              <button type='submit' className='mt-5 mr-20 border-2 w-32 rounded-lg border-orange-500'>Login</button>
          </form>
          
          <hr />
          <h1 className='text-center'>or</h1>
          <div className='flex justify-around px-10 py-5'>
          <FaGoogle />
          <FaFacebookF />
          <FaMicrosoft />
          </div>
          <p>If you don't have an account, please <span className=' underline text-blue-500 hover:cursor-pointer'>signup</span></p>
        </div>
        </div>
    </div>
  )
}

export default Login
