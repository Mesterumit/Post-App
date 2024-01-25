import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: false,
};

// createAsyncThunk is a utility provided by Redux Toolkit for creating asynchronous action creators.
// When we invoke createAsyncThunk, we pass in two arguments:
// 1. A string that will be used as the action type name. This type name will be associated with
//    the various stages of the asynchronous action (pending, fulfilled(resolved), rejected).
// 2. A function that will be called when the action is dispatched. This function typically contains
//    the asynchronous logic we want to perform.

// In this specific case, we are creating an async thunk called "getNews" with the action type name "getNewsFunc."

export const getNews = createAsyncThunk(
  "getNewsFunc", // Action type name used for this async thunk.

  // The function provided here is the async logic that will be executed when the "getNews" action is dispatched.
  // Whatever is returned from this function will become the payload of the action.

  async () => {
    // Here, we define the URL of the API endpoint we want to fetch data from.
    const url = "https://newsdata.io/api/1/news?apikey=pub_692629df384570d6f3d093bfe90ec0f68149&language=tr,en";

    // We use an asynchronous HTTP library like axios to make the API request.
    // Once the data is received, we log it to the console for debugging purposes.
    const { data } = await axios(url);
    console.log(data);

    // The data.results property contains the actual news data we are interested in.
    // We return this data as the payload of the "getNews" action, which can then be
    // used to update the Redux store.
    return data.results; // This is the payload of the action.
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // You may describe any additional reducers here if needed.
  },
  
  // createAsyncThunk is a middleware provided by Redux Toolkit that simplifies
  // making asynchronous API calls in a Redux environment. However, it doesn't
  // directly update the state based on API conditions. For this purpose, we use
  // the extraReducers property in the slice.

  // The extraReducers property is a function that receives a "builder" object. When
  // Redux processes the extraReducers, it will incorporate these reducers into the slice.
  // These reducers are used to update the state based on different conditions. (like pending, fulfilled, rejected when dealing with promises!)

  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        // This case handles the "pending" condition, which occurs when the API call is
        // initiated but hasn't completed yet. We set the "loading" state to true.
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, {payload}) => {
        // This case handles the "fulfilled" condition, which occurs when the API call
        // is successfully completed. We update the "news" state with the payload data
        // received from the API and set "loading" to false.
        state.news = payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        // This case handles the "rejected" condition, which occurs when the API call
        // encounters an error. We set the "error" state to true and "loading" to false.
        state.error = true;
        state.loading = false;
      });
  },
});


export default newsSlice.reducer;
