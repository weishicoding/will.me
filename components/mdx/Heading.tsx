/**
 * Adapted from: https://github.com/fuma-nama/fumadocs/blob/82c273917280f63da95687852135f89a08593e71/packages/ui/src/components/heading.tsx
 */
import * as React from "react";
import { LinkIcon } from "lucide-react";
import { cn } from "@/utils/utils";

type HeadingProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  id?: string;
} & React.ComponentPropsWithoutRef<T>;

const Heading: React.FC<HeadingProps<any>> = <
  T extends React.ElementType = "h1",
>(
  props: HeadingProps<T>
) => {
  const { as, className, children, id, ...rest } = props;
  const Component = as || "h1";

  return (
    <Component className={cn("scroll-m-20", className)} id={id} {...rest}>
      <a href={`#${id}`} className="not-prose group">
        {children}
        <LinkIcon
          aria-label="Link to section"
          className="ml-2 inline size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        />
      </a>
    </Component>
  );
};

export default Heading;
