import { defineDocumentType } from "contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "BlogPost",
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
  },
}));
