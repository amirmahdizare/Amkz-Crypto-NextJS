import Image from 'next/image'
import React from 'react'
import bg  from '@images/bg-shadow.png'
import { HeroSection } from './components/HeroSection'

export default function page() {
    return (
        <div className='relative'>

            <Image sizes='90vw' alt='bg' src={bg} className='absolute -top-20 left-1/2 -translate-x-1/2 -z-10  transition-all duration-500 ' />

            <HeroSection/>
           
        </div>
    )
}
