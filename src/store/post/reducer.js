import { createSlice } from "@reduxjs/toolkit";

import { extraReducers } from "./extraReducers";

import { updatePost } from "./actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  body: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers,
});

export const { f } = postSlice.actions;

export default postSlice.reducer;
