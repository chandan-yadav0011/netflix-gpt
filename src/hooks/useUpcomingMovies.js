import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingdMovies =()=>{

    const dispatch = useDispatch();

    const getUpcomingMovies=async()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const jsonData = await data.json();

        dispatch(addUpcomingMovies(jsonData.results));

    }

    useEffect(()=>{
        getUpcomingMovies();
    },[]);

}
export default useUpcomingdMovies;