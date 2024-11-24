import { Routes } from "@/config/common";
import { getLocalBlogPost } from "@/lib/blog";
import { absoluteUrl } from "@/utils/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { site } from "@/config/site";
import { formatDate } from "@/utils/dateFormat";
import { notFound } from "next/navigation";
import PostHeader from "@/components/blog/PostHeader";
import { BlogSource } from "@/config/types";
import Postcontent from "@/components/blog/PostContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const post = getLocalBlogPost(slug);
  if (!post) return {};

  // optionally access and extend (rather than replace) parent metadata
  const previousOpenGraph = (await parent).openGraph || {};

  const ISOPublishedTime = new Date(post.createdAt).toISOString();
  const ISOModifiedTime = new Date(post.modifiedAt).toISOString();

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: absoluteUrl(Routes.LocalBlogPost(slug)),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.LocalBlogPost(slug)),
      type: "article",
      title: post.title,
      siteName: site.title,
      description: post.summary,
      locale: "it-IT",
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      authors: site.url,
      images: [
        {
          url: `${site.url}/images/blog/${post.slug}/1.png`,
          width: 1200,
          height: 630,
          alt: post.summary,
          type: "image/png",
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const post = getLocalBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <PostHeader
        createdAt={new Date(post.createdAt)}
        title={post.title}
        slug={post.slug}
        summary={post.summary}
        image={post.image}
        author={post.author}
        source={BlogSource.Local}
        tags={post.tags}
      />

      <Postcontent
        title={post.title}
        body={post.body}
        url={absoluteUrl(Routes.LocalBlogPost(slug))}
      />

      {/* <Footer slug={slug} title={post.title} author={post.author} source={BlogPostSource.Local} />

        <ScrollIndicator /> */}
    </>
  );
}
