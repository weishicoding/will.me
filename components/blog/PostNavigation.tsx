"use client";

import * as React from "react";

import { PN } from "@/config/types";
import { cn } from "@/utils/utils";
import { useScrollspy } from "@/hooks/use-scrollspy";

type PostNavigationProps = {
  pn: PN[];
};

const PostNavigation: React.FC<PostNavigationProps> = (props) => {
  const { pn } = props;
  const activeId = useScrollspy(
    pn.map((item) => item.url),
    { rootMargin: "0% 0% -80% 0%" }
  );

  const minDepth = pn.reduce(
    (min, item) => Math.min(min, item.depth),
    pn[0].depth
  );

  return (
    <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
      <div className="mb-4 flex items-center gap-4">On this page</div>
      <div>
        {pn.map((item) => {
          const { title, url, depth } = item;

          return (
            <a
              key={url}
              href={`#${url}`}
              className={cn(
                "block border-l-2 py-2 pr-2.5 text-sm leading-normal text-muted-foreground transition-all hover:text-foreground",
                url === activeId && "text-foreground border-foreground"
              )}
              style={{
                paddingLeft: (depth - minDepth + 1) * 16,
              }}
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PostNavigation;
