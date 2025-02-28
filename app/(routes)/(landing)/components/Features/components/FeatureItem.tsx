import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { FeatureType } from '@types'
import Image from 'next/image'
import React from 'react'

export const FeatureItem = ({ icon, description, title }:FeatureType) => {
    return (
        <div className='flex flex-col gap-4 justify-between border lg:hover:-translate-y-1 lg:hover:border-primary transition-all duration-300  border-border-color p-6 bg-[rgba(255,255,255,0.02)] rounded-2xl'>

            <Image alt={title} src={icon} className='size-20 aspect-square' />

            <span className='text-text-1 text-xl'>{title}</span>

            <p className='text-gray-1'>
                {description}
            </p>

            <div className='flex flex-row gap-2 items-center text-primary'>
                <span className='font-normal'>See Explained</span>
                <ArrowRightIcon className='size-4' />
            </div>


        </div>
    )
}
