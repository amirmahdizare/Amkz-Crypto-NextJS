import { BlogType } from '@types'
import Image from 'next/image'
import React from 'react'

export const NormalCard = ({ img, tag, title, summary }: BlogType) => {
    return (
        <div className='flex flex-col gap-5 items-center border border-border-color rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.02)]'>
            <Image src={img} alt={title} className='w-full' />

            <div className='px-5 pb-5 flex flex-col gap-4 items-start'>

                <span className='p-1 bg-[rgba(255,255,255,0.07)] text-gray-1 uppercase text-sm rounded'> {tag}</span>

                <span className='text-white  font-bold text-lg'>{title}</span>

                <p className='text-gray-1 line-clamp-2 text-ellipsis'>{summary}</p>


            </div>


        </div>
    )
}
