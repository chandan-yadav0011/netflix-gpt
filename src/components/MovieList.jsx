import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  //console.log(movies?.nowPlayingMovies);
 // console.log(movies)
  return (

    <div className='p-2 m-2   pt-5 text-white   '>
       
            
            <h1 className='ml-4 text-3xl py-2'>{title}</h1>

            <div className='px-2 flex overflow-x-scroll scrollbar-hidden '>
                <div className='p-1 m-2 flex '>
                {  movies && movies.map((movie)=>(
                    <MovieCard className="mx-2" key={movie.id} movie = {movie}/>
                    ) )
                }
                </div>
            </div>
        
    </div>
  )
}

export default MovieList