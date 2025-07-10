import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);

  //console.log(movies)
  return (
    <div className='w-full bg-black'>
      <div className='-mt-52 relative'>
        <MovieList title={"Now Playing "} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Top Rated "} movies={movies?.topRatedMovies}/>
        <MovieList title={"Popular "} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming "} movies={movies?.upcomingMovies}/>
        <MovieList title={"Oscar wining"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer