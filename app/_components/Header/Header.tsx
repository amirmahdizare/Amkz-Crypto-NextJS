import Link from 'next/link'
import React from 'react'
import { Button } from '@components'
import { DesktopNavbar } from './components/DesktopNavbar'

export const Header = () => {
    return (
        <header className='flex flex-row gap-2 items-center justify-between p-3  top-0 '>

            <div className='text-xl font-bold flex flex-row gap-0.5 items-center'>
                <span className='text-white'>Amkz</span>
                <span className='text-primary'>Crypto</span>
            </div>

            <DesktopNavbar />


            <Button >
                Login
            </Button>

        </header>
    )
}
