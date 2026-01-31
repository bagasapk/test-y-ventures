import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import useGetPosts from "@/queries/useGetPosts";
import { setFilterPostId } from "@/stores/post.store";
import type { ChangeEventHandler } from "react";

const usePosts = () => {
  const posts = useAppSelector((s) => s.post.posts);
  const postId = useAppSelector((s) => s.post.filter.postId);
  const dispatch = useAppDispatch();

  const query = useGetPosts({ id: postId });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setFilterPostId(e.target.value));
  };

  return { ...query, posts, handleChange, postId };
};

export default usePosts;
