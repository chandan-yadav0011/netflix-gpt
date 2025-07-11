import React from 'react'
import lang from "../utils/langConstant"
import { useSelector } from 'react-redux'


const GPTSearchBar = () => {

  const langkey = useSelector((store)=>store.config.lang);
  console.log(langkey)
  return (
    <div className='absolute bg-black mt-[15%]  ml-[25%] w-1/2 flex justify-center '>
        <form 
            onSubmit={(e)=>e.preventDefault()}
            className='grid grid-cols-12  w-full'>
            <input alt='gptSearchBar'
                type='text'
                placeholder={lang[langkey].gptSearchPlaceholder}
                className='bg-white col-span-9 p-4 m-4  rounded-lg'
            />
            
            <button className='bg-red-600 text-white col-span-3 py-2 px-4 m-4 rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar