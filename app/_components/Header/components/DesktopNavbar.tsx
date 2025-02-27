'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const links: Array<{ title: string, route: string }> = [
    { title: "Home", route: '/' },
    { title: "Trade", route: '/trade' },
    { title: "Market", route: '/market' },
    // { title: "Blog", route: '/blog' },
]

export const DesktopNavbar = () => {

    const pathname = usePathname()

    return (
        <nav className=' flex flex-row gap-5 items-center'>
            {links.map(link => <Link
                className={pathname == link.route ? 'text-primary font-semibold' : 'text-white'}
                href={link.route}>
                {link.title}
            </Link>)}
        </nav>

    )
}
