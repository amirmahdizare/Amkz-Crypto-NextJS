import React from 'react'
import { Button } from '@components'
import { steps } from './data'
import { Step } from './components/Step'
import Link from 'next/link'

export const GetStarted = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-8  p-2 justify-between'>

            <div className='flex flex-col gap-6 items-start animate-translateLeft animation-delay-200'>

                <span className='text-text-1 text-3xl font-semibold'>How To Get Started</span>

                <p className='text-gray-1 text-lg'>Simple and easy way to start your investment <br /> in cryptocurrency</p>

                <Link href={'https://amkz.dev'} target='_blank'>
                    <Button>Get Started</Button>
                </Link>


            </div>



            <div className='flex flex-col gap-5 animate-translateLeft animation-delay-300'>

                {steps.map(item => <Step key={item.title} {...item} />)}

            </div>


        </div>
    )
}
