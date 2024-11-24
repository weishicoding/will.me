import { MDX } from "contentlayer2/core";
// post navigation
export type PN = {
  title: string;
  url: string;
  depth: number;
};

export type BlogAuthor = {
  id: string;
  name: string;
};

export type LocalBlog = {
  title: string;
  createdAt: string;
  modifiedAt: string;
  summary: string;
  image: string;
  tags: string[];
  body: MDX;
  slug: string;
  author: BlogAuthor;
};

export enum BlogSource {
  Local = "LOCAL",
  Substack = "SUBSTACK",
}

export type BlogPreview = {
  id: string | number;
  slug: string;
  title: string;
  summary: string;
  date: Date;
  image: string | null;
  source: BlogSource;
  url: string;
  tags?: string[];
  author: BlogAuthor;
};
