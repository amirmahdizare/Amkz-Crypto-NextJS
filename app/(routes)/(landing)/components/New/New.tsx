import React from 'react'
import { Button } from '@components'
import bg from '@images/bg-new.svg'
import Image from 'next/image'
import Link from 'next/link'

export const New = () => {
    return (
        <div className='rounded-xl border border-border-color flex flex-col lg:flex-row gap-6 py-5  px-8 lg:px-16 lg:items-center  justify-between animate-translateUp animation-delay-1200 relative'>

            <div className='flex flex-col gap-3 items-start'>
                <span className='text-text-1 text-2xl font-semibold'>New In Cryptocurrency?</span>

                <p className='text-gray-1 text-lg'>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>

            </div>

            {/* <Image src={bg} alt='bg' className='absolute right-0 top-1' /> */}

            <Link href={'https://amkz.dev'} target='_blank'>
                <Button>
                    Learn & Explore Now
                </Button>
            </Link>

        </div>
    )
}
