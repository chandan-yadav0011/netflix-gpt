import Header from './Header'
import useMoviesData from "../hooks/useMoviesData"
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingdMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';



const Browse = () => {
  
  const isGPTSearchTrue = useSelector((store)=>store.gptSearch.isGPTSearchTrue);
 

  useMoviesData();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingdMovies();


  const moviesData = useSelector((store)=>store.movies);
  console.log(moviesData);
  return (
    <div>
    <Header/>
    {isGPTSearchTrue ?<GPTSearch/>: 
      <>
      <MainContainer/>
      <SecondaryContainer/>
    </>}
   
    </div>
    
  )
}

export default Browse