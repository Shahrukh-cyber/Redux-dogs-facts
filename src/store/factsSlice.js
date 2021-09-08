import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchDogFacts } from "../utilities"
const initialState =
 [{ fact: "Dogs are nice" }]
 ;

export const fetchDogsFactsFromApi = createAsyncThunk('facts/fetchFacts', async (count) => {
 const facts = await fetchDogFacts(count);
 return facts;
})
export const dogSlice = createSlice({
 name: 'facts',
 initialState: [],
 extraReducers: {
  [fetchDogsFactsFromApi.fulfilled]: (state, action) => {
   console.log(action.payload);
   return action.payload
  }
 }

})
