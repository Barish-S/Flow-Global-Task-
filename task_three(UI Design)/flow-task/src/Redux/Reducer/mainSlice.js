import { createSlice } from "@reduxjs/toolkit";

export const mainSlice=createSlice({
    name:"home",
    initialState:{
        status:"form"
    },
    reducers:{
        setStatus:(state , action)=>{
            state.status=action.payload
        }
    }
})
export default mainSlice.reducer
export const {setStatus}=mainSlice.actions