import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
import { AVATAR, LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user = useSelector(store => store.user)

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
        className='w-44' 
        src={LOGO} alt='netflix-logo'/>
        {user && <div className='flex items-center'>
          <div>
          <img className='w-12 h-12 rounded-sm' src={AVATAR} alt='user-icon'/>
          <p>{user.displayName}</p>
          </div>
          <button className='w-20 h-8 m-1 bg-red-700 text-black p-1 rounded-md' onClick={handleSignOutClick}>SignOut</button>
        </div>}

    </div>
  )
}

export default Header