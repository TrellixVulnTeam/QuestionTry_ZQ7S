// create async thunk action to fetch users

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("http://localhost:5000/users");
  const users = await response.json();

  return users;
});
