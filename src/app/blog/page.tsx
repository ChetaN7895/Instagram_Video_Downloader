"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/formateDate"; // ✅ import helper

export default function BlogPage() {
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[2fr,1fr]">
      {/* Blog list */}
      <div>
        <h1 className="mb-8 text-4xl font-bold">Our Blog</h1>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {selectedCategory && (
          <p className="mb-6 text-sm text-gray-600">
            Showing posts in <strong>{selectedCategory}</strong>{" "}
            <button
              onClick={() => setSelectedCategory(null)}
              className="ml-2 text-purple-600 hover:underline"
            >
              (Clear)
            </button>
          </p>
        )}

        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="rounded-lg border bg-white p-6 transition hover:shadow-md"
              >
                <h2 className="mb-2 text-2xl font-semibold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mb-3 text-gray-600">{post.excerpt}</p>
                <p className="mb-3 text-sm text-gray-500">
                  {formatDate(post.date)} {/* ✅ fixed */}
                </p>
                <span className="inline-block rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">
                  {post.category}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No posts found.</p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-10">
        {/* Categories */}
        <div className="rounded-lg border bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left ${
                    selectedCategory === cat
                      ? "font-semibold text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest posts */}
        <div className="rounded-lg border bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold">Latest Posts</h3>
          <ul className="space-y-3 text-sm">
            {blogPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 transition hover:text-purple-600"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500">
                  {formatDate(post.date)} {/* ✅ fixed */}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
