/**
 * https://github.com/gatteo/matteogiardino.com
 */
import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandX,
} from "@tabler/icons-react";
import {
  ChevronRight,
  ChevronRightSquare,
  Shrub,
  Target,
  X,
  type LucideIcon,
} from "lucide-react";
import { EmailIcon } from "react-share";

export const Icons = {
  close: X,

  instagram: IconBrandInstagram,
  tiktok: IconBrandTiktok,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  twitch: IconBrandTwitch,
  email: EmailIcon,
  discord: IconBrandDiscord,
  x: IconBrandX,
};

export const Icon = React.forwardRef<
  React.ElementRef<LucideIcon>,
  React.ComponentPropsWithoutRef<LucideIcon> & {
    name: keyof typeof Icons;
  }
>(({ name, className, ...props }, ref) => {
  // Assuming the icon name is valid
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }

  return <IconComponent className={className} {...props} />;
});

Icon.displayName = "Icon";
