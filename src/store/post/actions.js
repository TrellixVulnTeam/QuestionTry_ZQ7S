// create async thunk action to fetch posts

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch("http://localhost:5000/posts");
  const posts = await response.json();

  return posts;
});

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ comments, postId }) => {
    const response = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "PATCH",
      body: JSON.stringify({
        comments,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await response.json();

    return post;
  }
);
