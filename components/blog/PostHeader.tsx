import Image from "next/image";
import {} from "@/utils/utils";
import { formatDate } from "@/utils/dateFormat";

import { BlogAuthor, BlogSource } from "@/config/types";

import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "@/components/ui/Badge";
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

const PostHeader: React.FC<Props> = ({
  createdAt,
  title,
  summary,
  image,
  tags,
}) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        <div className="mt-2 text-muted-foreground">{summary}</div>
        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <div className="text-muted-foreground">•</div>

            <p>{formatDate(createdAt, "D MMM, YYYY")}</p>

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
