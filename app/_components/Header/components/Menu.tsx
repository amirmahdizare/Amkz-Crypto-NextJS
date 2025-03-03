'use client'
import React, { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { Navbar } from './Navbar'
import { Logo } from './Logo'

export const Menu = () => {

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if(typeof document!='object') return 

        
        if (open)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'unset'

    }, [open])

    return (
        <>
            <div className='cursor-pointer text-white lg:hidden' onClick={() => setOpen(true)}>
                <Bars3Icon className='size-7' />
            </div>


            <div className='hidden lg:flex order-2'>
                <Navbar />
            </div>

            {createPortal(<div className={clsx('flex flex-col gap-2 items-center fixed top-0 right-0 w-full bg-white h-full transition-all duration-700 z-10', open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0')}>

                <div className='flex flex-col gap-4 justify-start items-start w-full p-4'>

                    <div className=' flex flex-row-reverse justify-between w-full' >
                        <XMarkIcon className='text-black size-7 cursor-pointer' onClick={() => setOpen(false)} />
                        <Logo mode='light' />
                    </div>

                    <div className='bg-gray-200 w-full h-[1px]'></div>

                    <Navbar />

                </div>

            </div>, document.body)}




        </>
    )
}
