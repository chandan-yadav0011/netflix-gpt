import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name:"gptSearch",
    initialState:{
        isGPTSearchTrue:false,
        movieNames:null,
        movieResults:null,

    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.isGPTSearchTrue = !state.isGPTSearchTrue;
        },

        addGPTMovieResult:(state,action)=>{
            const {movieNames,movieResults}= action.payload;

            state.movieNames = movieNames;
            state.movieResults= movieResults;
        }
    }

})

export const{toggleGPTSearch,addGPTMovieResult} = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer