import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  loading:false,
  services:[],
  subServices:[]
}


export const getServices = createAsyncThunk('services/getServices',async()=>{
  return fetch('http://localhost:8000/api/services') 
  .then((res)=>res.json()) 
})



export let servicesSlice = createSlice({
    name:'services',
    initialState,
    extraReducers: {
      [getServices.pending] : (state, action) => {
        state.loading = true
      },
      [getServices.fulfilled] : (state, action) => {
        state.loading = false
        state.services = action.payload
        state.subServices = state.services.data.map(item=>item.subService)
      },
      [getServices.rejected] : (state, action) => {
        state.loading = false
      }
    }
  })

export default servicesSlice.reducer