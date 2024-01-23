import { createSlice } from '@reduxjs/toolkit';


const blogSlice = createSlice({
    name: "posts",
    initialState: {
        posts: null,
        myBlogs: null,
        categories: null,
        loading: false,
        error: false
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getSuccess: (state, { payload: { data, url } }) => {
            state.loading = false;
            if (url === "posts") {
              // Set the posts directly without the "post" object
              state.posts = data;
            } else {
              state[url] = data;
            }
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
  } = blogSlice.actions;
  export default blogSlice.reducer;