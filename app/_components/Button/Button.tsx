import React from 'react'
import { ButtonProps } from './props'

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className='bg-primary rounded-xl px-6 py-2 text-white' {...props}>
            {children}
        </button>
    )
}
