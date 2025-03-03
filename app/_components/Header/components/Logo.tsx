import clsx from 'clsx'
import React from 'react'

export const Logo = ({ mode }: { mode: 'light' | 'dark' }) => {
    return (
        <div className='text-xl font-bold flex flex-row justify-center gap-0.5 items-center lg:order-1 order-2 flex-1 lg:flex-none text-center'>
            <span className={clsx(mode == 'light' ? 'text-black' : 'text-white')}>Amkz</span>
            <span className='text-primary'>Crypto</span>
        </div>
    )
}
