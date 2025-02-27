import { Button } from '@components'
import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
    return (
        <div className='flex flex-col gap-8 text-white items-center min-h-96 justify-center text-center'>

            <span className='text-3xl lg:text-4xl font-black' >Start and Build Your Crypto Portfolio Here</span>

            <p className='text-lg text-gray-300'>Only at AmkzCrypto, you can build a good portfolio and learn
                best practices about cryptocurrency.</p>

            <Link target='_blank' href={'https://amkz.dev'} className=''>
                <Button className='px-8 py-4 text-lg' >
                    Get Started
                </Button>
            </Link>


        </div>
    )
}
