import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { rehypePlugins, remarkPlugins } from "./lib/mdx/plugins";
import { MDXOptions } from "contentlayer2/core";
import { BlogAuthors } from "@/config/common";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog post",
      required: true,
    },
    createdAt: {
      type: "string",
      description: "The date of the blog post",
      required: true,
    },
    modifiedAt: {
      type: "string",
      description: "The modified time of the blog post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the blog post",
      required: true,
    },
    image: {
      type: "string",
      description: "Image for the blog post",
      required: true,
    },
    authorId: {
      type: "string",
      description: "The author of the blog post",
      required: true,
    },
    tags: { type: "list", of: { type: "string" }, default: [] },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    author: {
      type: "nested",
      resolve: (doc) =>
        BlogAuthors.find((author) => author.id === doc.authorId),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  } as MDXOptions,
});
