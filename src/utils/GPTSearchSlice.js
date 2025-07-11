import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name:"gptSearch",
    initialState:{
        isGPTSearchTrue:false,
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.isGPTSearchTrue = !state.isGPTSearchTrue;
        }
    }

})

export const{toggleGPTSearch} = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer