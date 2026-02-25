import { useState } from "react";
export const FeedBack = ({
  index,
  title,
}: {
  index: number;
  title: string;
}) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  function handleUpVotes() {
    setUpvotes((prev) => prev + 1);
  }
  function handleDownVotes() {
    setDownvotes((prev) => prev + 1);
  }
  return (
    <div className="border-neutral-800 border rounded-md p-8">
      <h2 className="text-xl font-bold mb-8">{title}</h2>
      <div className="flex mx-0 gap-4 justify-content-around">
        <button
          onClick={handleUpVotes}
          className="px-8 bg-green-500 cursor-pointer text-white rounded-md p-4"
          data-testid={`upvote-btn-${index}`}
        >
          👍 Upvote
        </button>
        <button
          onClick={handleDownVotes}
          className="px-8 bg-red-500 cursor-pointer text-white rounded-md p-4"
          data-testid={`downvote-btn-${index}`}
        >
          👎 Downvote
        </button>
      </div>
      <p className="my-8 mx-0" data-testid={`upvote-count-${index}`}>
        Upvotes: <strong>{upvotes}</strong>
      </p>
      <p className="my-8 mx-0" data-testid={`downvote-count-${index}`}>
        Downvotes: <strong>{downvotes}</strong>
      </p>
    </div>
  );
};

const StateManager = () => {
  const aspects = [
    "Readability",
    "Performance",
    "Maintainability",
    "Security",
    "Scalability",
  ];
  return (
    <div className="w-full flex text-center">
      <div className="mt-16 flex self-center flex-wrap gap-8 justify-center">
        {aspects.map((aspect, index) => (
          <FeedBack key={index} index={index} title={aspect} />
        ))}
      </div>
    </div>
  );
};

export default StateManager;
