import { allBlogs } from "@/.contentlayer/generated";
import { remark } from "remark";
import { BlogPreview, BlogSource, LocalBlog, PN } from "@/config/types";
import { remarkHeading } from "./mdx/plugins/remark/remark-heading";
import { Routes } from "@/config/common";

type Options = {
  limit?: number;
};

export function getLocalBlogPost(slug: string): LocalBlog | undefined {
  return allBlogs.find((p) => p.slug === slug);
}

export function getUrlFromSource(slug: string) {
  return Routes.LocalBlogPost(slug);
}

export function getLocalBlogPosts({ limit }: Options = {}): BlogPreview[] {
  return allBlogs
    .sort(
      (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    )
    .slice(0, limit)
    .map((post) => ({
      id: post._id,
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      date: new Date(post.createdAt),
      image: post.image,
      source: BlogSource.Local,
      url: Routes.LocalBlogPost(post.slug),
      tags: post.tags,
      author: post.author,
    }));
}

export async function getAllBlogPosts(limit?: number): Promise<BlogPreview[]> {
  const localPosts = getLocalBlogPosts();

  const sortedLocalPosts = localPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return [...sortedLocalPosts].slice(0, limit);
}

export const getPN = async (content: string) => {
  const result = await remark().use(remarkHeading).process(content);

  if ("pn" in result.data) {
    return result.data.pn as PN[];
  }

  return [];
};
