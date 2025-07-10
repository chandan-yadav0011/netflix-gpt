import React from 'react'
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  
  const movies= useSelector((store)=>store.movies?.nowPlayingMovies);

  if(!movies) return;

  const mainMovie= movies[0];

  const{title , overview, id}= mainMovie;
 
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoContainer movie_id={id}/>
      
    </div>
  )
}

export default MainContainer;