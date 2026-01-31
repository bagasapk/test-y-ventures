import { ENDPOINTS } from "@/constants/endpoints";
import { axiosBase } from "@/lib/api";
import type { PostInterface } from "@/types/posts.type";

export const getPosts = async (params?: any) => {
  return await axiosBase.get<PostInterface[]>(ENDPOINTS.getPosts, { params });
};
