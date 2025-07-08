import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import {  useSelector } from 'react-redux';
//import { removeUser } from '../utils/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
 
  const navigate = useNavigate();

  const user = useSelector((store)=>store.user);
  const signOutHandler=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
     
      navigate("/")

}).catch((error) => {
  // An error happened.
  console.log(error)
  navigate("/error")
});
  }

  return (
    <div className='absolute z-50 bg-gradient-to-b from-black w-full flex justify-between'>
      <img 
        className='w-1/9 h-1/9 p-2 mx-10 my-3 '
        alt='logo'  
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png'/>


        {user&& <div className='flex'>
          <span className='text-white  text-xl font-bold p-3 m-1 mt-6'>{user.displayName}</span>
          <img
          alt='user-icon'
          src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
          className=' z-50 w-15 h-15 p-2 m-5 '/>

          <button className='z-50 p-2  mr-2  text-white text-xl font-bold'
              onClick={()=>signOutHandler()}>Sign out</button>
        </div>
        }
    </div>
  )
}

export default Header