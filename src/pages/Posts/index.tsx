import Loader from "@/components/Loader";
import { Avatar, Card, Input } from "antd";
import usePosts from "./hooks/usePosts";
import { debounce } from "@/helper/function.helper";

const Posts = () => {
  const { isLoading, posts, handleChange, isError,error } = usePosts();

  return (
    <div>
      <h1 className="font-bold text-xl">Posts</h1>
      <p>All posts posted here!</p>
      <Input
        className="w-50! my-4!"
        placeholder="Search by ID..."
        onChange={debounce(handleChange)}
      />
      <div className="grid grid-cols-4 gap-4">
        <Loader
          errorClassname="col-span-4"
          emptyClassname="col-span-4"
          isLoading={isLoading}
          isEmpty={!posts.length}
          isError={isError}
          error={error?.message}
        >
          {posts.map((post) => (
            <Card
              hoverable
              key={post.id}
              extra={<Avatar className="ml-auto!">{post.userId}</Avatar>}
              title={post.title}
            >
              {post.body}
            </Card>
          ))}
        </Loader>
      </div>
    </div>
  );
};

export default Posts;
