import { getAllBlogPosts } from "@/lib/blog";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import PostCard from "../blog/PostCard";

const Post = async () => {
  const posts = await getAllBlogPosts(4);

  return (
    <section id="blog-posts" className="mt-32">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="flex-auto">
          <h2 className="text-balance text-3xl font-bold">
            Latest{" "}
            <strong className="underline decoration-purple-400 underline-offset-8">
              blogs
            </strong>
          </h2>
          <p className="mt-2 text-balance text-muted-foreground">
            I like to write and share my ideas or summary through blogs.
          </p>
        </div>

        <Button
          variant="ghost"
          className="group -mx-3 text-muted-foreground md:mx-0"
          size="sm"
          asChild
        >
          <Link href="/blog">
            more blogs
            <IconArrowRight className="ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Post;
