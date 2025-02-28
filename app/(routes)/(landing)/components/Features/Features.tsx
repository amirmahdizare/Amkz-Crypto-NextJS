import React from 'react'
import { features } from './data'
import { FeatureItem } from './components/FeatureItem'



export const Features = () => {
    return (
        <div className='flex flex-col gap-16 items-center animate-translateUp animation-delay-1100'>

            <div className='flex flex-col gap-4 items-center text-center'>
                <span className='text-3xl lg:text-4xl font-black  text-white' >
                    AmkzCrypto Amazing Features
                </span>

                <p className='text-lg text-gray-300 '>
                    Explore sensational features to prepare your best investment in cryptocurrency
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {features?.map(item => <div className='col-span-1 flex' key={item.title}><FeatureItem {...item} /></div>)}
            </div>

        </div>
    )
}
