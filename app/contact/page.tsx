import { Icon } from "@/components/Icon";
import PageHerder from "@/components/PageHerder";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialLinks, ContactLinks } from "@/config/links";
import { IconExternalLink } from "@tabler/icons-react";

const title = "How to contact me";
const description =
  "Whether you want to get to know me, talk to me about a project or a collaboration, write to me. Something beautiful always comes from a message.";
const Contact = () => {
  return (
    <>
      <PageHerder
        title={title}
        description={description}
        colorFrom="from-red-600"
        colorTo="to-green-400"
      />
      <h2 className="mt-16 text-xl font-bold md:text-2xl">Email</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6">
        {ContactLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={`mailto:${link.mailto}`}
              className="group flex flex-row items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent"
            >
              <Image
                src={link.logo}
                alt={link.name + " logo"}
                width={32}
                height={32}
                className="-mt-1 mr-2 inline-block size-9 rounded-lg border-2"
              />
              <div className="flex grow justify-between">
                <h2 className="text-lg">{link.mailto}</h2>
                <IconExternalLink
                  className="text-muted-foreground group-hover:text-accent-foreground"
                  size={24}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <h2 className="mt-24 text-xl font-bold md:text-2xl">Social</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6">
        {SocialLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className="group flex items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent"
            >
              <Icon
                name={link.icon}
                className="size-7 text-purple-400"
                size={48}
                strokeWidth={1}
                aria-hidden="true"
              />
              <div className="flex-1 flex-row">
                <h2 className="text-lg font-bold">{link.name}</h2>
                <div className="text-muted-foreground">{link.handle}</div>
              </div>
              <IconExternalLink
                className="text-muted-foreground group-hover:text-accent-foreground"
                size={24}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
