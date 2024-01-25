import { createSlice } from '@reduxjs/toolkit';


const likeSlice = createSlice({
    name: "likes",
    initialState: {
        likes: [],
        postId: null,
        loading: false,
        error: false,
        count:0,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
          getSuccess: (state, action) => {
            state.loading = false;
            state.likes = action.payload.likes;
            state.count = action.payload.count;
          },
          createSuccess: (state, action) => {
            state.loading = false;
            state.likes.push(action.payload);
            state.count += 1;
          },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const {
    fetchStart,
    getSuccess,
    fetchFail,
    createSuccess
  } = likeSlice.actions;
  export default likeSlice.reducer;