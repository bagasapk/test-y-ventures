import { ENDPOINTS } from "@/constants/endpoints";
import { useAppDispatch } from "@/hooks/hooks";
import { getPosts } from "@/services/post.service";
import { setPosts } from "@/stores/post.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetPosts = (params?: any) => {
  const dispatch = useAppDispatch();
  const query = useQuery({
    queryKey: [ENDPOINTS.getPosts, params],
    queryFn: () => getPosts(params),
  });

  useEffect(() => {
    if (query.isLoading) return;
    dispatch(setPosts(query.data?.data || []));
  }, [query.data, query.isLoading]);

  return query;
};

export default useGetPosts;
