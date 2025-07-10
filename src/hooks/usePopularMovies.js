import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovies =async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const jsonData = await data.json();
        
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);

    
}

export default usePopularMovies;