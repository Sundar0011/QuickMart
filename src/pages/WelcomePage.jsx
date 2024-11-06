import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const WelcomePage = () => {
  const [showLoginCard,setShowLoginCart] =useState(false);
  const [showWelcome,setShowWelcome]=useState(true);
  const [showSignup,setShowSignup]=useState(false);

  const toggleLoginCard=()=>{
  setShowLoginCart(!showLoginCard);
  setShowWelcome(!showWelcome);
  }
  const toggleSignUpCard=()=>{
    setShowLoginCart(!setShowSignup);
    setShowWelcome(!showWelcome);
    }

  return (
    <div>
      <header className='flex flex-row justify-between p-3'>
        <img className=' w-30 h-10' src="../public/QuickMartLogo.png" alt="" />
        <div>
            <button onClick={toggleLoginCard} className='w-30 mx-10 border-2 border-orange-500 rounded-md text-orange-500 px-7 py-2 hover:bg-orange-500  hover:text-white font-bold'>Login</button>
            <button onClick={toggleSignUpCard} className='w-30 mx-10 border-2 border-orange-500 rounded-md text-orange-500 px-6 py-2 hover:bg-orange-500  hover:text-white font-bold'>Signup</button>
        </div>
      </header>
      {showLoginCard && (
          <Login/>
      )}
      {showSignup && (
          <Signup/>
      )}
     {showWelcome && (
      <div className=' bg-red-50 p-5 mt-40 flex flex-col items-center'>
        <p className='font-bold text-5xl  text-center'>Welcome to  <span className='text-orange-500'>QuickMart</span> Your One-Stop Shop for Everyday Essentials!</p>
        <p className='text-center text-xl m-5'>At QuickMart, we believe in making shopping fast, easy, and convenient. Our platform brings you a wide range of products, from fresh groceries to household essentials, all at your fingertips. Whether you're stocking up on weekly supplies or looking for something special, QuickMart has you covered.</p>
        <button className=' border-2 p-2 w40 border-orange-500 rounded-lg'>Start Shoping</button>
      </div>
     )}
    </div>
  )
}

export default WelcomePage
