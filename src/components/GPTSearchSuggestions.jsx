import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const GPTSearchSuggestions = () => {

  const {movieNames,movieResults} = useSelector((store)=>store.gptSearch);
  console.log(movieNames)
  
  if(!movieNames) return null;

  return (
    <div className='absolute mt-[22%]  mt-8 flex justify-center p-4 m-4 bg-black text-white'>
      <div className='relative'>
        {movieNames &&movieNames.map((movieName,indx)=>(
          <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[indx]}
          />
        ))}
      </div>
        
    </div>
  )
}

export default GPTSearchSuggestions