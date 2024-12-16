import React from "react";
import Link from "next/link";
import { IconMap2 } from "@tabler/icons-react";

import { ContactLinks, FooterLinkGroups, SocialLinks } from "@/config/links";
import { Routes } from "@/config/common";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col px-8 pb-8 border-t">
      <div className="mt-12 flex justify-between">
        <div className="text-muted-foreground col-span-2 mb-10 flex flex-col items-start gap-4 sm:col-span-1">
          <Link className="hover:text-accent-foreground" href={Routes.Home}>
            Will Shi
          </Link>
          {ContactLinks.map((link) => (
            <Link
              key={link.name}
              href={`mailto:${link.mailto}`}
              className="transition-colors duration-150 hover:text-accent-foreground"
            >
              {link.mailto}
            </Link>
          ))}
          <div className="flex text-muted-foreground gap-2">
            <IconMap2 className=" inline-block size-5 transition-transform  duration-200" />
            <p>Helsinki, Finland</p>
          </div>
        </div>

        <div className="flex justify-evenly gap-24">
          {FooterLinkGroups.map((list) => (
            <div
              key={list.id}
              className="mb-10 flex flex-col items-center gap-4 pr-4"
            >
              {list.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground transition-colors duration-150 hover:text-accent-foreground"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}

          <div className="mb-10 flex flex-col items-center gap-4 pr-4">
            {SocialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-muted-foreground transition-colors duration-150 hover:text-accent-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm text-center">
        &copy; Will Shi, {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
