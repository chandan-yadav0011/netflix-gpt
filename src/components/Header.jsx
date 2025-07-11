import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import {  useDispatch, useSelector } from 'react-redux';
//import { removeUser } from '../utils/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearch } from '../utils/GPTSearchSlice';
import { SUPPORTED_LANGUAGES } from '../utils/contants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=>store.user);
  const isGPTSearchTrue = useSelector((store)=>store.gptSearch.isGPTSearchTrue);

  const signOutHandler=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });
  }

  const handleToggle =()=>{
    dispatch(toggleGPTSearch());
  }

  const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value))
  
  }


  useEffect(() => {
    

    const unsubscribe=  onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid, email, displayName} = user;

        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
      // ...
    } else {
      // User is signed out
        dispatch(removeUser());
        navigate("/")
      // ...
    }
  });

  return ()=>{
    unsubscribe();
  }
  }, []);
  

  return (
    <div className='absolute z-50 bg-gradient-to-b from-black w-full flex justify-between'>
      <img 
        className='w-1/9 h-1/9 p-2 mx-10 my-3 '
        alt='logo'  
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png'/>

        <div className='flex'>
        {isGPTSearchTrue &&<select 
            onChange={handleLanguageChange}
            className='bg-gray-700 text-white p-2 rounded-lg mt-5 ml-6 mr-4 h-11'>
            {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.name} value={lang.identifier}>{lang.name}</option>))}
        </select>}
        
        <button 
          onClick={handleToggle}
          className='bg-red-700 p-2 m-10 text-white mt-5 text-lg scale-100 hover:scale-110 rounded-lg font-bold transition-transform'>{isGPTSearchTrue?"Home Page":"GPT Search"}</button>
        
        {user&& <div className='flex'>
          <span className='text-white scale-100 hover:scale-110 text-xl transition-transform font-bold p-3 m-1 mt-6'>{user.displayName}</span>
          <img
          alt='user-icon'
          src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
          className=' z-50 w-15 h-15 p-2 mt-5 mx-2 transition-transform scale-100 hover:scale-110 '/>

          <button className='z-50 p-2  mr-2  text-white text-xl font-bold scale-100 hover:scale-110'
              onClick={()=>signOutHandler()}>Sign out</button>
        </div>
        }
        </div>
    </div>
  )
}

export default Header