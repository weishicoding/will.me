import React from "react";

import { getPN } from "@/lib/blog";
import PostNavigation from "@/components/blog/PostNavigation";
import Mdx from "../mdx/Mdx";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Routes } from "@/config/common";

type Props = {
  url: string;
  body: {
    code: string;
    raw: string;
  };
  title: string;
};

const Postcontent: React.FC<Props> = async ({ title, body, url }) => {
  const pn = await getPN(body.raw);

  return (
    <>
      <div className="mt-8 flex flex-col justify-between lg:flex-row">
        <article className="w-full lg:w-[670px]">
          <Mdx code={body.code} />
        </article>
        <aside className="hidden lg:block lg:min-w-[270px] lg:max-w-[270px]">
          <div className="sticky top-24 will-change-[transform,opacity]">
            <div className="border-b w-full mb-4">
              <Button
                variant="ghost"
                className="group mb-2 -mx-3  md:mx-0"
                size="sm"
                asChild
              >
                <Link href={Routes.Blog}>
                  <IconArrowLeft className="inline-block size-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  Back to posts
                </Link>
              </Button>
            </div>
            {pn && pn.length > 0 && <PostNavigation pn={pn} />}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Postcontent;
