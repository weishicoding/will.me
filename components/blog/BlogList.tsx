"use client";

import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import { BlogPreview } from "@/config/types";
import PostCard from "./PostCard";

const BlogList: React.FC<{ posts: BlogPreview[] }> = ({ posts }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          placeholder="Search blogs"
          aria-label="Search blogs"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <IconSearch
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
          />
        </Label>
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center text-xl">There are no posts for now</div>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
