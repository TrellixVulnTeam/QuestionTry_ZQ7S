import { addQuestion, fetchPosts } from "./actions";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addQuestion.fulfilled, (state, action) => {
      state.loading = false;
    });
};
