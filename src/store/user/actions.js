// create async thunk action to fetch users

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("http://localhost:5000/users");
  const users = await response.json();

  return users;
});


export const updatePassword = createAsyncThunk(
  "post/updatePassword",
  async ({ password, userId }) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        userId,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await response.json();

    return post;
  }
);
