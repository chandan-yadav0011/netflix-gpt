import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useMoviesData = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies= async()=>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    
    const data= await fetch(url,API_OPTIONS);
    const jsonData = await data.json();

    //console.log(jsonData.results);

    dispatch(addNowPlayingMovies(jsonData.results));


    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useMoviesData;