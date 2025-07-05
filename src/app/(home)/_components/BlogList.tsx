"use client";

import useGetBlogs from "../_hooks/useGetBlogs";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { Input } from "@/components/ui/input"; // pastikan kamu punya ini
import { useState } from "react";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs?.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="space-y-6">
      {/* Search bar */}
      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Search blog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Blog list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isPending && <BlogCardSkeleton count={3} />}

        {filteredBlogs?.length ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.objectId} blog={blog} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No blogs found.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
