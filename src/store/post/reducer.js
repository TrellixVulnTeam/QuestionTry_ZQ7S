import { createSlice } from "@reduxjs/toolkit";

import { extraReducers } from "./extraReducers";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers,
});

export const { f } = postSlice.actions;

export default postSlice.reducer;
