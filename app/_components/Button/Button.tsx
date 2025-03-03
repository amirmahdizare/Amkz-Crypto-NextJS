import React from 'react'
import { ButtonProps } from './props'
import clsx from 'clsx'

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={clsx('bg-primary rounded-lg px-5 py-2 text-white', className)} {...props}>
            {children}
        </button>
    )
}
