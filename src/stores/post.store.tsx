import type { PostInterface } from "@/types/posts.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PostState {
  posts: PostInterface[];
  filter: {
    postId: string;
  };
}

// Define the initial state using that type
const initialState: PostState = {
  posts: [],
  filter: {
    postId: "",
  },
};

export const postSlice = createSlice({
  name: "post",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostInterface[]>) => {
      state.posts = action.payload;
    },
    setFilterPostId: (state, action: PayloadAction<string>) => {
      state.filter.postId = action.payload;
    },
  },
});

export const { setPosts, setFilterPostId } = postSlice.actions;
export default postSlice.reducer;
