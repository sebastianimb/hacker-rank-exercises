import { Link } from "wouter";
import "../../styles/aside.css";

function Aside() {
  return (
    <aside className="text-neutral-300 bg-neutral-900 border-r border-neutral-800">
      <Link className="hover:text-white" href="/">
        Home
      </Link>
      <Link className="hover:text-white" href="/virtualization">
        Virtualization
      </Link>
      <Link className="hover:text-white" href="/item-list-manager">
        Item List Manager
      </Link>
      <Link className="hover:text-white" href="/code-review-feedback">
        Code Review Feedback
      </Link>
      <Link className="hover:text-white" href="/article-sorting">
        Article Sorting
      </Link>
      <Link className="hover:text-white" href="/blog-post">
        Blog Post
      </Link>
      <Link className="hover:text-white" href="/slide-show">
        Slide Show
      </Link>
      <Link className="hover:text-white" href="/employee-validation">
        Employee Validation
      </Link>
      <Link className="hover:text-white" href="/word-omitter">
        Word Omitter
      </Link>
      <Link className="hover:text-white" href="/cryptorank-exchange">
        CryptoRank Exchange
      </Link>
    </aside>
  );
}

export default Aside;
