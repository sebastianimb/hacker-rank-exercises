import Burger from "../../assets/burger.svg";
import "../../styles/header.css";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <header className="w-full h-16 items-center flex justify-end cursor-pointer border-b border-neutral-800 bg-neutral-900 px-4 md:hidden">
        <img
          src={Burger}
          alt="menu"
          className="w-6 h-6"
          onClick={() => setOpen((v) => !v)}
        />
      </header>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="fixed left-0 top-0 h-full w-60 bg-neutral-900 text-neutral-300 border-r border-neutral-800 flex flex-col gap-4 p-8 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/virtualization"
            >
              Virtualization
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/item-list-manager"
            >
              Item List Manager
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/code-review-feedback"
            >
              Code Review Feedback
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/article-sorting"
            >
              Article Sorting
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/blog-post"
            >
              Blog Post
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/slide-show"
            >
              Slide Show
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/employee-validation"
            >
              Employee Validation
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/word-omitter"
            >
              Word Omitter
            </Link>
            <Link
              className="hover:text-white hover:bg-neutral-800 rounded px-2 py-1"
              href="/cryptorank-exchange"
            >
              CryptoRank Exchange
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
