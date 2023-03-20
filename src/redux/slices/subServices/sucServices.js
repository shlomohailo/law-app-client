import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  subServices:[]
}


export const getAllSubServices = createAsyncThunk('subServices/getAllSubServices',async()=>{
  return fetch('http://localhost:8000/api/sub-service') 
  .then((res)=>res.json()) 
})

export const subServicesSlice = createSlice({
    name:'subServices',
    initialState,
    extraReducers: {
      [getAllSubServices.pending] : (state, action) => {
        state.load = true
      },
      [getAllSubServices.fulfilled] : (state, action) => {
        state.load = false
        state.subServices = action.payload
      },
      [getAllSubServices.rejected] : (state, action) => {
        state.load = false
      }
    }
  })

export default subServicesSlice.reducer;



