import React from 'react'
import { IMG_CDN } from '../utils/contants';

const MovieCard = ({movie}) => {
  //console.log(movie);
  if(movie?.poster_path===null) return null;
  return (
    <div className='w-48 scale-100 transition-transform hover:scale-110 pr-4'>
        <img src={IMG_CDN+ movie?.poster_path}/>
    </div>
  )
}

export default MovieCard