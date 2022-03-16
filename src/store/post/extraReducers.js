import { fetchPosts, addComment } from "./actions";

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
      state.errror = true;
    })
    .addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      state.posts[index] = action.payload;
    });
};
