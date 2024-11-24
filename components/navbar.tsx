"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { Routes } from "@/config/common";

const Navbar = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList key={"navbar"}>
        {/* About me */}
        <NavigationMenuItem key="about-menu-item">
          <Link href={Routes.About} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* To Blog */}
        <NavigationMenuItem key="blog-menu-item">
          <Link href={Routes.Blog} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* To project */}
        <NavigationMenuItem key="work-menu-item">
          <Link href={Routes.Work} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Work
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* To contact */}
        <NavigationMenuItem key="contact-menu-item">
          <Link href={Routes.Contact} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
