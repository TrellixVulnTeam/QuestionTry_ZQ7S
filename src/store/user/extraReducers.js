import { fetchUsers } from "./actions";

export const extraReducers = (builder) => {
  builder.addCase(fetchUsers.fulfilled, (state, action) => {
    state.users = action.payload;
  });
};
