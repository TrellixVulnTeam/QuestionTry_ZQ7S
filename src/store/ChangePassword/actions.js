// create async thunk action to fetch posts

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("post/fetchUsers", async () => {
  const response = await fetch("http://localhost:5000/users");
  const users = await response.json();

  return users;
});

export const ChangePassword = createAsyncThunk(
  "post/ChangePassword",
  async ({ password, userId }) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();

    return user;
  }
);
