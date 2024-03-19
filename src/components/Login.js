import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSigninForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background netflix'/>
        </div>
        <form className='absolute w-3/12 p-12 bg-black mt-24 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email Address'
            className='p-2 my-4 w-full bg-gray-700'
            />
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
            {!isSignInForm?(<input type='password' placeholder='Confirm Password' className='p-2 my-4 w-full bg-gray-700'/>):""}
            <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
            {isSignInForm && <p className='w-full'>Forgot Password?</p>}
            <div id='remember-me-section' className='pt-8'>
            {isSignInForm && <div className='m-2'> 
            <input type='checkbox'/>
            <label htmlFor=""> Remember Me</label>
            </div>}
            <p onClick={toggleSigninForm} className='cursor-pointer'>{isSignInForm?"New to Netflix?  Sign up now.":"Already have an account? Sign in now"}</p>
            </div>
        </form>
    </div>
  )
}

export default Login