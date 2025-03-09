"use client";

import Image from "next/image";
import { absoluteUrl } from "@/utils/utils";
import { formatDate } from "@/utils/dateFormat";

import { BlogAuthor, BlogSource } from "@/config/types";

import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "@/components/ui/Badge";

import { buttonVariants } from "@/components/ui/button";

import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";

type Props = {
  title: string;
  slug: string;
  createdAt: Date;
  image: string | null;
  summary: string;
  source: BlogSource;
  author: BlogAuthor;
  tags: string[];
};

import React from "react";
import { getUrlFromSource } from "@/lib/blog";

const PostHeader: React.FC<Props> = ({
  createdAt,
  title,
  slug,
  summary,
  image,
  author,
  tags,
}) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        <div className="mt-2 text-muted-foreground">{summary}</div>
        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <div className="flex flex-row items-center gap-2">
              <p>{author.name}</p>
            </div>
            <div className="text-muted-foreground">•</div>

            <p>{formatDate(createdAt, "YYYY-MM-DD")}</p>

            {tags.length > 0 && (
              <>
                <div className="text-muted-foreground">•</div>
                <div className="flex flex-wrap gap-1">
                  {tags.map((t) => (
                    <Badge key={t} variant={"outline"}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex gap-2 justify-start">
            <EmailShareButton
              url={absoluteUrl(getUrlFromSource(slug))}
              subject={title}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}
              >
                <IconMail className="size-4" />
              </div>
            </EmailShareButton>
            <LinkedinShareButton
              url={absoluteUrl(getUrlFromSource(slug))}
              title={title}
              source={"Will Shi"}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}
              >
                <IconBrandLinkedin className="size-4" />
              </div>
            </LinkedinShareButton>
            <TwitterShareButton
              title={title}
              url={absoluteUrl(getUrlFromSource(slug))}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}
              >
                <IconBrandX className="size-4" />
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </div>

      {image && (
        <div className="my-6">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg shadow-2xl"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </AspectRatio>
        </div>
      )}
    </>
  );
};

export default PostHeader;
