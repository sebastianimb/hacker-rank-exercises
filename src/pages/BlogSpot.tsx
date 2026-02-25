import { useState } from "react";
import Input from "../components/Input";
import PostDisplay from "../components/PostDisplay";

type Post = {
  title: string;
  description: string;
};

function BlogSpot() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [data, setData] = useState({ title: "", description: "" });

  const handleCreatePost = () => {
    if (data.title && data.description) {
      setPosts([...posts, data]);
      setData({ title: "", description: "" });
    }
  };

  const handleDeletePost = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="w-1/2 mx-auto my-0 self-center flex flex-col p-8 gap-2 items-center mt-8">
      <div className="flex flex-col gap-12 mb-20">
        <Input data={data} setData={setData} />
        <button
          data-testid="create-button"
          className="p-4 bg-green-500 w-full cursor-pointer text-white rounded-md"
          onClick={handleCreatePost}
          disabled={!data.title || !data.description}
        >
          Create Post
        </button>
      </div>
      <div className="w-fit flex flex-col gap-8 items-center justify-center">
        <PostDisplay posts={posts} handleDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default BlogSpot;
