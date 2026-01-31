import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task.store";
import { postSlice } from "./post.store";
// ...

export const store = configureStore({
  reducer: { task: taskSlice.reducer, post: postSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
