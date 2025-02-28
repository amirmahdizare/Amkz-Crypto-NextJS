import React from 'react'
import { StepType } from '@types'
import Image from 'next/image'

export const Step = ({description ,   icon , title}:StepType) => {
  return (
    <div className='border border-border-color rounded-2xl p-5 flex flex-row gap-5 items-center justify-start max-w-[500px]'>

        <Image src={icon} alt={title} className='size-20' />
        
        <div className='flex flex-col gap-3'>
            <span className='text-xl text-text-1 font-semibold'>{title}</span>
            <p className='text-gray-1'>{description}</p>

        </div>
        
    </div>
  )
}
