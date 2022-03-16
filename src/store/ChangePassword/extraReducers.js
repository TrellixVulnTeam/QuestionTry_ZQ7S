import { fetchUsers, ChangePassword } from "./actions";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.errror = true;
    })
    .addCase(ChangePassword.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      state.users[index] = action.payload;
    });
};
