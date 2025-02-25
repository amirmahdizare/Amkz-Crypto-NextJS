import Image from 'next/image'
import React from 'react'
import bg  from '@images/bg-shadow.png'

export default function page() {
    return (
        <div>

            <Image alt='bg' src={bg} />
           
        </div>
    )
}
