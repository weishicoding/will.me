import { Routes } from "@/config/common";
import { getLocalBlogPost } from "@/lib/blog";
import { absoluteUrl } from "@/utils/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { site } from "@/config/site";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import Postcontent from "@/components/blog/PostContent";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import ProjectHeader from "@/components/project/ProjectHeader";

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
  // read route params
  const slug = (await params).slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader
        slug={project.slug}
        title={project.title || project.name}
        description={project.description}
        url={project.url}
        github={project.github}
        image={project.image}
      />

      <Postcontent
        title={project.title}
        body={project.body}
        url={absoluteUrl(Routes.Project(project.slug))}
      />

      <ScrollIndicator />
    </>
  );
}
