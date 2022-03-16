import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extraReducers";

const initialState = {
  isLoggedIn: false,
  id: "",
  email: "",
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers,
});

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
