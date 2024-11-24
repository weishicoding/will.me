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
      required: true,
    },
    createdAt: {
      type: "string",
      required: true,
    },
    modifiedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authorId: {
      type: "string",
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
