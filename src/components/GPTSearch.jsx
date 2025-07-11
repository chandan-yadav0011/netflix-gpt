import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchSuggestions from './GPTSearchSuggestions'
import { BG_IMG_URL } from '../utils/contants'

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute w-full h-full -z-10 '>
        <img 
          alt='background' 
          src={BG_IMG_URL}
        />
      </div>
        <GPTSearchBar/>
        <GPTSearchSuggestions/>
    </div>
  )
}

export default GPTSearch