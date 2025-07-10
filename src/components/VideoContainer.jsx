import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoContainer = ({movie_id}) => {

   
  useMovieTrailer(movie_id);
  const trailerData= useSelector((store)=>store.movies.nowPlayingTrailer);
  


  return (
    <div >
        <iframe
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+trailerData?.key+"?&autoplay=1&mute=1" }
            title="YouTube video player" 
            
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>

        </iframe>
    </div>
  )
}

export default VideoContainer