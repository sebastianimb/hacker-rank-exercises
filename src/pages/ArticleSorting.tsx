import { useState } from "react";
import { ARTICLES_DATA } from "../utils/articles";

type Article = {
  title: string;
  upvotes: number;
  date: string;
};

export function Articles({ articles = [] }: { articles: Article[] }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <table className="border border-separate border-spacing-0 rounded-xl border-neutral-800 text-left w-2xl">
        <thead className="p-8">
          <tr className="">
            <th className="p-4">Title</th>
            <th className="p-4">Upvotes</th>
            <th className="p-4">Date</th>
          </tr>
        </thead>
        <tbody className="p-8">
          {articles.map((article, index) => (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title" className="p-4 py-2">
                {article.title}
              </td>
              <td data-testid="article-upvotes" className="p-4 py-2">
                {article.upvotes}
              </td>
              <td data-testid="article-date" className="p-4 py-2">
                {article.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSorting() {
  const [articles, setArticles] = useState(ARTICLES_DATA);
  const handleMostUpvoted = () => {
    const sortedArticles = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setArticles(sortedArticles);
  };

  const handleMostRecent = () => {
    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    setArticles(sortedArticles);
  };
  return (
    <div className="App">
      <div className="flex gap-8 items-center justify-center my-20 navigation">
        <label className="form-hint mb-0 font-bold text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="p-4 bg-green-500 text-white rounded-md"
          onClick={handleMostUpvoted}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="p-4 bg-green-500 text-white rounded-md"
          onClick={handleMostRecent}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default ArticleSorting;
