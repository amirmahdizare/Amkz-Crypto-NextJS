import Image from 'next/image'
import React from 'react'
import bg  from '@images/bg-shadow.png'
import { Features, HeroSection , MarketTrend } from './components'

export default function page() {
    return (
        <div className='relative flex flex-col gap-32'>

            <Image sizes='90vw' alt='bg' src={bg} className='absolute top-0 left-1/2 -translate-x-1/2 -z-10  transition-all duration-500 ' />

            <HeroSection/>

            <MarketTrend />

            <Features/>
           
        </div>
    )
}
