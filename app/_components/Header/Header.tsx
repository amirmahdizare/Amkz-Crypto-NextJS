import Link from 'next/link'
import React from 'react'
import { Button } from '@components'
import { Menu } from './components/Menu'
import { Logo } from './components/Logo'

export const Header = () => {
    return (
        <header className='flex flex-row gap-2 items-center justify-between p-3  top-0 '>

            <Menu />


            <Logo mode='dark' />


            <Link href={'https://amkz.dev'} target='_blank' className='order-3'>
                <Button >
                    Login
                </Button>
            </Link>

        </header>
    )
}
