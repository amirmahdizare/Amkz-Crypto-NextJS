import React from 'react'
import { Button } from '@components'
import Link from 'next/link'

export default function () {
    return (
        <div className='flex flex-col h-full min-h-96 gap-4 items-center justify-center w-full'>
            <h1 className='text-gray-200 text-2xl '>Page Doesn't Exist!</h1>
            <Link href={'/'}>
                <Button>Back To Home</Button>
            </Link>
        </div>
    )
}
