import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      console.log("Payload for login:", payload);
      state.currentUser = payload?.user;
      state.loading = false;
      state.error = false;
      state.token = payload?.token;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
      state.token = null;
      console.log("log out :" ,state.token)
    },
    registerSuccess: (state, { payload }) => {
      console.log("register Payload :" , payload)
      state.currentUser = payload;
      state.token = payload?.token;
      state.error = false;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
