import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies =()=>{

    const dispatch = useDispatch();

    const getTopRatedMovies=async()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData)

        dispatch(addTopRatedMovies(jsonData.results));

    }

    useEffect(()=>{
        getTopRatedMovies();
    },[]);

}
export default useTopRatedMovies;