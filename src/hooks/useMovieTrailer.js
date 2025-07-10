import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movie_id)=>{

    const dispatch= useDispatch();
    const  API_VIDEO= "https://api.themoviedb.org/3/movie/"+movie_id+"/videos"
  
    const getVideoData =async()=>{
    const data = await fetch(API_VIDEO,API_OPTIONS);
    const jsonData = await data.json();
    //console.log(jsonData);

    const filteredTrailer = jsonData.results.filter(video=> video.type === "Trailer");
    const trailer = filteredTrailer.length ?filteredTrailer[0]:jsonData.results[0];
    
    //console.log(trailer)
    dispatch(addMovieTrailer(trailer));

   
    }

    useEffect(()=>{
        getVideoData();
    },[]);
};

export default useMovieTrailer;