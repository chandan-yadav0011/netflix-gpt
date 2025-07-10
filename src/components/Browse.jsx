import Header from './Header'
import useMoviesData from "../hooks/useMoviesData"
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  
  
  useMoviesData();
  

  const moviesData = useSelector((store)=>store.movies);
  console.log(moviesData);
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
    
  )
}

export default Browse