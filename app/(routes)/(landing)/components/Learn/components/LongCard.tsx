import React from 'react'
import { BlogType } from '@types'
import Image from 'next/image'

export const LongCard = ({ img, tag, title }: BlogType) => {

    return (
        <div className='flex flex-row gap-4 rounded-3xl relative overflow-hidden flex-1 '>

            <Image src={img} alt={title} className='w-full' />


            <div className='absolute flex flex-col gap-5 items-start bottom-7 left-7'>

                <span className='text-white text-3xl font-bold'>{title}</span>

                <span className='p-1 bg-[rgba(255,255,255,0.07)] text-gray-1 uppercase rounded'> {tag}</span>

            </div>



        </div>
    )
}
