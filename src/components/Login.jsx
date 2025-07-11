import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom';
import { checkValidation } from '../utils/checkValidation';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { BG_IMG_URL } from '../utils/contants';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[signUpForm, setSignUpForm]= useState(false);
  const[errorMessage, setErrorMessage] = useState("");
  
  const name= useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  
  const handleValidation=()=>{
    

    const msg= checkValidation(email.current.value,password.current.value);
    setErrorMessage(msg);
   // validation done now check for 
    if(msg) return;

    //sign up and sign in login

    if(signUpForm){

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
 
        const user = userCredential.user;
        updateProfile(user, {

          displayName: name.current.value,
          // Profile updated!
           
        }).then(() => {
         
          
          const{uid, email, displayName} = auth.currentUser;
          console.log(displayName);
          dispatch(addUser({uid:uid,email:email, displayName:displayName}));
         
          navigate("/browse")
            
          
          // ...
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
           navigate("/")
          // ...
        });
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ " - " +errorMessage);
        dispatch(removeUser());
        navigate("/");
        // ..
      });

    }
    else
    {
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode+ " - "+ errorMessage);
        navigate("/");
        
      });

    }
    
    
      
  }

  return (
    <>
      <Header/>
      <div className='absolute w-full h-full z-10 '>
        <img 
          alt='background' 
          src={BG_IMG_URL}
        />
      </div>

        <form className='p-3 absolute ml-[650px] mt-40 w-[400px] h-[600px] bg-black rounded-lg opacity-90  z-50'
              onClick={(e)=>{
                e.preventDefault();
              }}
              onSubmit={()=>{
                
              }}
              >
              {
                 signUpForm ?<h1 className='p-3 mt-7 ml-5 text-3xl font-semibold  text-white'>Sign Up</h1>: <h1 className='p-3 mt-7 ml-5 text-3xl font-semibold  text-white'>Sign In</h1>
              }
           
            {
              signUpForm? (<input
              className='text-white text-lg w-[300px] bg-gray-700 p-3 ml-9 m-3 rounded-md '
              type='text'
              ref={name}
              placeholder='name'
            />):(null)
            }
            <input
              className='text-white text-lg w-[300px] bg-gray-700 p-3 ml-9 m-3 rounded-md '
              type='text'
              ref={email}
              placeholder='Email or phone number'
            />

            <input
              className='text-white text-lg w-[300px] bg-gray-700 p-3 ml-9 m-3 rounded-md'
              type='password'
               ref={password}
              placeholder='Password'
            />
            {
              errorMessage && <p className='p-3 ml-24 text-md text-red-700 font-bold'>{errorMessage}</p>
            }

            <button
              className='p-3 ml-9 mt-8 w-[300px] cursor-pointer rounded-md text-white bg-red-700 '
              onClick={()=>handleValidation()}
              >
                {
                  signUpForm ? "Sign Up": "Sign In"
                }
              </button>
              {
                !signUpForm?<p className='p-3 ml-8 m-5 mt-24  text-white'>New to Netflix? <button className="cursor-pointer hover:underline" onClick={()=>setSignUpForm(!signUpForm)}>{!signUpForm ? "Sign Up": "Sign In"}</button></p>:(<p className='p-3 ml-8 m-5 text-white'>Already have account? <button className="cursor-pointer hover:underline" onClick={()=>setSignUpForm(!signUpForm)}>{!signUpForm ? "Sign Up": "Sign In"}</button></p>)
              } 
        </form>

       
      
    </>
  )
}

export default Login