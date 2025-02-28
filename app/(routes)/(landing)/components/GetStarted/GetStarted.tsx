import { Button } from '@components'
import React from 'react'

export const GetStarted = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 items-center'>

            <div className='flex flex-col gap-6 items-start'>

                <span className='text-text-1 text-3xl font-semibold'>How To Get Started</span>

                <p className='text-gray-1 text-lg'>Simple and easy way to start your investment <br/> in cryptocurrency</p>

                <Button>Get Started</Button>


            </div>


        </div>
    )
}
