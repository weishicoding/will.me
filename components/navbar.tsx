'use client'

import * as React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

export function Navbar() {

    return (
        <NavigationMenu className='hidden md:block'>
            <NavigationMenuList key={'navbar'}>
                {/* About me */}
                <NavigationMenuItem key='about-menu-item'>
                    <Link href='/about' passHref legacyBehavior>     
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* To Blog */}
                <NavigationMenuItem key='blog-menu-item'>
                    <Link href='/blog' passHref legacyBehavior>     
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* To project */}
                <NavigationMenuItem key='work-menu-item'>
                    <Link href='/work' passHref legacyBehavior>     
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Work
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* To contact */}
                <NavigationMenuItem key='contact-menu-item'>
                    <Link href='/contact' passHref legacyBehavior>     
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
