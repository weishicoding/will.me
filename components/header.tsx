import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoBlack from "@/public/images/logo-dark.svg";
import LogoWhite from "@/public/images/logo-white.svg";

import Navbar from "@/components/Navbar";
// import { NavbarMobile } from '@/components/navbar-mobile'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:saturate-100">
      <div className="mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-1"
          aria-label="Homepage"
        >
          <div className="hidden dark:block">
            <Image src={LogoBlack} height={42} width={42} alt="Logo" />
          </div>
          <div className="dark:hidden">
            <Image
              className="rounded-lg"
              src={LogoWhite}
              height={42}
              width={42}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Navbar />
          {/* <NavbarMobile /> */}
        </div>
      </div>
    </header>
  );
}
