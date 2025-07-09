import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/contants'

const Browse = () => {
  

  const getNowPlayingMovies= async()=>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    
    const data= await fetch(url,API_OPTIONS);
    const jsonData = await data.json();

    console.log(jsonData.results);

    
  }

  useEffect(()=>{
    getNowPlayingMovies();
  })
  return (
    <div className='flex justify-end'>
    <Header/>
    
    </div>
    
  )
}

export default Browse