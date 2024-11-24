"use client";

import Image from "next/image";
import { type MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer2/hooks";

import Heading from "./Heading";
import ImageZoom from "./ImageZoom";
import List from "./List";
import Pre from "./CodeSection";

type MdxProps = {
  code: string;
};

const components: MDXComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <Heading as="h2" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <Heading as="h3" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <Heading as="h4" {...props} />
  ),
  h5: (props: React.ComponentPropsWithoutRef<"h5">) => (
    <Heading as="h5" {...props} />
  ),
  h6: (props: React.ComponentPropsWithoutRef<"h6">) => (
    <Heading as="h6" {...props} />
  ),
  Image: ({ alt, ...rest }: React.ComponentPropsWithoutRef<typeof Image>) => (
    <>
      <ImageZoom>
        <Image
          className="rounded-md transition-transform hover:scale-[102%]"
          alt={alt}
          {...rest}
        />
      </ImageZoom>
      <figcaption className="text-center">{alt}</figcaption>
    </>
  ),
  pre: Pre,
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => <List {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <List typo="ol" {...props} />
  ),
};

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className="prose w-full max-w-none dark:prose-invert">
      <Component components={{ ...components }} />
    </div>
  );
};

export default Mdx;
