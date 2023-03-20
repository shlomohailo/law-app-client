import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  recommendationsLoading:false,
  recommendations:[]
}


export const getRecommendations = createAsyncThunk('recommendations/getRecommendations',async()=>{
  return fetch('http://localhost:8000/api/recommendations') 
  .then((res)=>res.json()) 
})

export const recommendationsSlice = createSlice({
    name:'recommendations',
    initialState,
    extraReducers: {
      [getRecommendations.pending] : (state, action) => {
        state.recommendationsLoading = true
      },
      [getRecommendations.fulfilled] : (state, action) => {
        state.recommendationsLoading = false
        state.subServices = action.payload
      },
      [getRecommendations.rejected] : (state, action) => {
        state.recommendationsLoading = false
      }
    }
  })

export default recommendationsSlice.reducer;


