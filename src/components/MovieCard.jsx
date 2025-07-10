import React from 'react'
import { IMG_CDN } from '../utils/contants';

const MovieCard = ({movie}) => {
  console.log(movie);
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN+ movie?.poster_path}/>
    </div>
  )
}

export default MovieCard