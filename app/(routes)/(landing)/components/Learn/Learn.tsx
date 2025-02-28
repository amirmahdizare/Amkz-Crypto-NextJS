import React from 'react'
import { blogs } from './data'
import { NormalCard } from './components/NormalCard'
import { LongCard } from './components/LongCard'

export const Learn = () => {
    return (
        <div className='flex flex-col gap-8 items-center'>

            <div className='flex flex-col gap-3 items-start'>
                <span className='text-text-1 text-3xl font-semibold'>Learn About Cryptocurrency</span>

                <p className='text-gray-1 text-lg'>Learn all about cryptocurrency to start investing.</p>

            </div>


            <div className='grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>

                {blogs.map((blog, index) => {

                    if (index == 0)
                        return <div className='col-span-2 flex'><LongCard key={blog.id} {...blog} /></div>

                    return <div className='col-span-1 flex'><NormalCard key={blog.id} {...blog} /></div>
                })}

            </div>



        </div>
    )
}
