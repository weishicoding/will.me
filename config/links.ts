import { Icons } from "@/components/Icon";
import { Routes } from "./common";

type ContactLinks = {
  name: string;
  mailto: string;
  icon: keyof typeof Icons;
  logo: string;
}[];

type SocialLinks = {
  name: string;
  url: string;
  handle: string;
  icon: keyof typeof Icons;
}[];

type FooterLinkGroups = {
  id: number;
  links: {
    href: string;
    title: string;
  }[];
}[];

export const SocialLinks: SocialLinks = [
  {
    name: "github",
    url: "https://github.com/weishicoding",
    handle: "@weishicoding",
    icon: "github",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/weishidev",
    handle: "@weishidev",
    icon: "linkedin",
  },
  {
    name: "x",
    url: "https://x.com/I1ovecode",
    handle: "@I1ovecode",
    icon: "x",
  },
  {
    name: "discord",
    url: "https://discord.com/users/will075093",
    handle: "@will075093",
    icon: "discord",
  },
];

export const ContactLinks: ContactLinks = [
  {
    name: "Personal",
    mailto: "sanwind0305@gmail.com",
    icon: "email",
    logo: "/images/logo-white.svg",
  },
];

export const FooterLinkGroups: FooterLinkGroups = [
  {
    id: 2,
    links: [
      {
        href: Routes.Home,
        title: "home",
      },
      {
        href: Routes.Blog,
        title: "blog",
      },
      {
        href: Routes.Work,
        title: "work",
      },
      {
        href: Routes.Contact,
        title: "contact",
      },
    ],
  },
];
