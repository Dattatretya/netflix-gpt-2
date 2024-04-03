import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addUser } from '../utils/userSlice';
import { BACKGROUND } from '../utils/constants';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null) 
    const password = useRef(null) 

    const toggleSigninForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () =>{
        const message = checkValidData(email.current.value, password.current.value)

        setErrorMessage(message)

        if (message) return 

        ///signup
        if(!isSignInForm){

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: ""
                      }).then(() => {
                        const {uid, email, displayName} = auth.currentUser
                        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
                        // navigate("/browse")
                      }).catch((error) => {
                        setErrorMessage(error)
                      });
                    

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });


        }
        //sign in logic
        else{

                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    
                    const user = userCredential.user;

                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }

    }

  return (
    <div>
        <Header />
        <div className='absolute h-auto'>
        <img src={BACKGROUND} alt='background netflix'
        className='sm:bg-repeat'
        />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute md:w-3/12 p-12 bg-black mt-24 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90
        sm:w-1/2
        '>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}

            <input ref={email} type='text' placeholder='Email Address'
            className='p-2 my-4 w-full bg-gray-700'
            />

            <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
            {!isSignInForm?(<input type='password' placeholder='Confirm Password' className='p-2 my-4 w-full bg-gray-700'/>):""}

            <p>{errorMessage}</p>

            <button className='p-2 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up" }</button>
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