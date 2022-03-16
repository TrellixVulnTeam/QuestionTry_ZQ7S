// create async thunk action to fetch posts

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch("http://localhost:5000/posts");
  const posts = await response.json();

  return posts;
});

export const addQuestion = createAsyncThunk(
  "post/addQuestion",
  async ({ body, postId }) => {
    const response = await fetch(`http://localhost:5000/posts`, {
      method: "POST",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await response.json();

    return post;
  }
);
