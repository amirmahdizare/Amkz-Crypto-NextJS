import React from 'react'
import { ButtonProps } from './props'

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className='bg-primary rounded-lg px-6 py-3 text-white' {...props}>
            {children}
        </button>
    )
}
