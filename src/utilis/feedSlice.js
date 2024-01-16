import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feedvideos",
    initialState:{},

    reducers:{
        addVideosinfo:(state, action)=>{
            return action.payload
        }
    }



})

export const {addVideosinfo} = feedSlice.actions;
export default feedSlice.reducer;