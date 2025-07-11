import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchSuggestions from './GPTSearchSuggestions'
import { BG_IMG_URL } from '../utils/contants'

const GPTSearch = () => {

 


// const main= async()=> {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.0-flash-001',
//     contents: 'Why is the sky blue?',
//   });
//   console.log(response.text);
// }

// main();

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