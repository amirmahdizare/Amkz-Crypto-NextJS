import Link from 'next/link'
import React from 'react'
import { Button } from '@components'

export const Header = () => {
    return (
        <header className='flex flex-row gap-2 items-center justify-between p-4 sticky top-0'>

            <div className='text-xl font-bold flex flex-row gap-0.5 items-center'>
                <span className='text-white'>Amkz</span>
                <span className='text-primary'>Crypto</span>
            </div>


            <nav className='text-white flex flex-row gap-5 items-center'>
                <Link href={'/'}>Home</Link>
                <Link href={'/trade'}>Trade</Link>
                <Link href={'/market'}>Market</Link>
                <Link href={'/blog'}>Blog</Link>
            </nav>


            <Button />

        </header>
    )
}
