import Link from 'next/link'
import React from 'react'

export const LinkGroup = ({ title, links }: { title: string, links: Array<{ title: string, link: string }> }) => {
    return (

        <div className='flex flex-col gap-4 items-start'>

        <span className='font-bold text-lg text-white'>{title}</span>

        {links.map(item =><Link className='text-gray-1' href={item.link}>{item.title}</Link> )}


      </div>
    )
}
