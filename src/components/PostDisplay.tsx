import React from "react";

type PostDisplayProps = {
  posts: {
    title: string;
    description: string;
  }[];
  handleDeletePost?: (index: number) => void;
};

function PostDisplay({ posts, handleDeletePost }: PostDisplayProps) {
  return (
    <div data-testid="posts-container" className="flex flex-wrap gap-10">
      {posts.map((post, index) => (
        <div
          key={index}
          className="post-box border border-neutral-800 w-full text-center  p-8 rounded-md"
        >
          <h3 className="text-white text-xl">{post.title}</h3>
          <p className="text-white text-xl" style={{ display: "block" }}>
            {post.description}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={() => handleDeletePost && handleDeletePost(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
