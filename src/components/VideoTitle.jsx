import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute text-white bg-gradient-to-r from to-black  w-screen aspect-video pt-[20%] px-12'>
        <h1 className='text-bold text-6xl '>{title}</h1>
        <p className='w-1/4 py-6'>{overview}</p>
        <div>
        <button className="bg-white text-black p-4 text-xl px-12   rounded-lg  hover:opacity-80"> Play</button>
        <button className="bg-gray-500 text-white p-4 text-xl px-12  rounded-lg hover:opacity-80 mx-2">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle