import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoBlack from '@/public/images/mg-logo-black.png'
import LogoWhite from '@/public/images/mg-logo-white.png'

import Navbar from '@/components/Navbar'
// import { NavbarMobile } from '@/components/navbar-mobile'

export function Header() {
    return (
        <header className='fixed inset-x-0 top-0 z-40 bg-background/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:saturate-100'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                    <div className='hidden dark:block'>
                        <Image src={LogoWhite} height={28} width={28} alt='Logo' />
                    </div>
                    <div className='dark:hidden'>
                        <Image
                            className='rounded-lg'
                            src={LogoBlack}
                            height={28}
                            width={28}
                            alt='Logo'
                        />
                    </div>
                </Link>
                <div className='flex items-center gap-2'>
                    <Navbar />
                    {/* <NavbarMobile /> */}
                </div>
            </div>
        </header>
    )
}
