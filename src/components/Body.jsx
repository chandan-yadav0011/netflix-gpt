import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {

    const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
        path:"browse",
        element: <Browse/>
    },
    
  ])

  const dispatch   = useDispatch();

   
  useEffect(() => {
    

    onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid, email, displayName} = user;

        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
      // ...
    } else {
      // User is signed out
        dispatch(removeUser());
      // ...
    }
  });
  }, []);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
};

export default Body;