import {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
import { AVATAR, LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user = useSelector(store => store.user)
  const viewGpt = useSelector(store=>store.gpt.showGptSearch)


  useEffect(()=>{
        
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
         
        const {uid, email, displayName} = user;

        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate("/browse")
        
        // ...
    } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        
    }
    });

    return () => unsubscribe()
},[])

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleSignOutClick = () =>{
    
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center'> 
        <img 
        className='w-44 \' 
        src={LOGO} alt='netflix-logo'/>
        {user && <div className='flex items-center'>
          <div className='flex '>
            <button className='bg-cyan-400 text-white m-2 p-2 rounded-md'
            onClick={handleGptSearch}
            >{ viewGpt ?  "Homepage" : "GPT Search" }</button>
          <div className=''>
          <img className='w-14 h-14 rounded-lg absolute' src={AVATAR} alt='user-icon'/>
          <select className='rounded-lg m-2 p-1 w-12 h-12 opacity-0'>
            <option value="user">Logged In User:</option>
            <option value="Logged In user" className='m-1 bg-white text-black p-1 rounded-md'>{user.displayName}</option>
          </select>
          <button className='p-2 m-1 bg-red-700 text-black rounded-md' onClick={handleSignOutClick}>SignOut</button>
          </div>
    
          </div>
          
        </div>}

    </div>
  )
}

export default Header