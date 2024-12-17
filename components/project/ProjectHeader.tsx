"use client";

import React from "react";

import { AspectRatio } from "../ui/aspect-ratio";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { absoluteUrl } from "@/utils/utils";
import { getUrlFromSource } from "@/lib/blog";
import { Button, buttonVariants } from "../ui/button";
import { Routes } from "@/config/common";

type Props = {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  url?: string;
  github?: string;
  image?: string;
};

const ProjectHeader: React.FC<Props> = ({
  title,
  description,
  url,
  github,
  image,
  slug,
}) => {
  return (
    <>
      <div className="space-y-4">
        <Link href={url as string} className="flex flex-col gap-4">
          <h1 className="flex text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </Link>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
            {url && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="flex items-center"
              >
                <IconHome size={20} className="-mt-1 mr-2 inline-block" />
                {url}
              </Link>
            )}

            {github && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={github}
                className="flex items-center"
              >
                <IconBrandGithub
                  size={20}
                  className="-mt-1 mr-2 inline-block"
                />
                {title}'s GitHub
              </Link>
            )}
          </div>
          <div className="flex gap-2 justify-start">
            <div className="w-full">
              <Button
                variant="ghost"
                className="group  md:mx-0"
                size="sm"
                asChild
              >
                <Link href={Routes.Work}>
                  <IconArrowLeft className="inline-block size-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  Back to posts
                </Link>
              </Button>
            </div>
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
            className="overflow-hidden rounded-lg border shadow-2xl"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </AspectRatio>
        </div>
      )}
    </>
  );
};

export default ProjectHeader;
