import React, { useRef } from 'react'
import lang from "../utils/langConstant"
import { useDispatch, useSelector } from 'react-redux'
import ai from "../utils/gemini"
import { API_OPTIONS } from '../utils/contants'
import { addGPTMovieResult } from '../utils/GPTSearchSlice'



const GPTSearchBar = () => {

  const dispatch= useDispatch();
  const langkey = useSelector((store)=>store.config.lang);

  const searchText = useRef(null);

 
  const searchMovieTMDB=async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie+"&include_adult=false&page=1",API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  }

  const handleGPTSearch =async()=>{
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value+ ". only give me 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Dhol, Sholay";
    console.log(searchText.current.value);
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: gptQuery,
    });

    if(response.text===null) return {/* error code*/ }

    const gptMovies = response?.text.split(",")
    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGPTMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

// }
  }

  return (
    <div className='absolute bg-black mt-[15%]  ml-[25%] w-1/2 flex justify-center '>
        <form 
            onSubmit={(e)=>e.preventDefault()}
            className='grid grid-cols-12  w-full'>
            <input alt='gptSearchBar'
                type='text'
                placeholder={lang[langkey].gptSearchPlaceholder}
                className='bg-white col-span-9 p-4 m-4  rounded-lg'
                ref={searchText}
            />
            
            <button 
                  onClick={handleGPTSearch}
                  className='bg-red-600 text-white col-span-3 py-2 px-4 m-4 rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar