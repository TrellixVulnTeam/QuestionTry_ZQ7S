import {
  fetchPosts,
  addComment,
  deletePost,
  updatePost,
  LikePost,
} from "./actions";

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
    .addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      state.posts[index] = action.payload;
    })
    .addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updatePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    })
    .addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(LikePost.fulfilled, (state, action) => {
      state.loading = false;

      const Likes = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      state.posts[Likes] = action.payload;
    });
};
