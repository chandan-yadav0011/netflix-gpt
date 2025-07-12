import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const GPTSearchSuggestions = () => {

  const {movieNames,movieResults} = useSelector((store)=>store.gptSearch);
  console.log(movieNames)
  
  if(!movieNames) return null;

  return (

    // <div className='w-full pl-2 bg-black'>
    //   <div className='-mt-52 relative'>
        
    //   </div>
    // </div>
    <div className='absolute w-full mt-[25%]  mt-8 flex  p-4  bg-black text-white'>
      <div className='relative w-full'>
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