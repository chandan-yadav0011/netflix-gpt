import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptSearchReducer from "./GPTSearchSlice"
import configReducer from "./configSlice"

const appStore = configureStore({

    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gptSearch: gptSearchReducer,
        config:configReducer,

    }
});

export default appStore;