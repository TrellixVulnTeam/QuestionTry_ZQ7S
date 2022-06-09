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

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ postId }) => {
    return fetch(`http://localhost:5000/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async ({ body, postId }) => {
    const response = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "PUT",
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

export const LikePost = createAsyncThunk(
  "post/LikePost",
  async ({ Likes, postId }) => {
    const response = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "POST",
      body: JSON.stringify({
        Likes,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await response.json();

    return post;
  }
);
