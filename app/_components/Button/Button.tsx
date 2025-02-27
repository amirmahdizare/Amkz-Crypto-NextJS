import React from 'react'
import { ButtonProps } from './props'
import clsx from 'clsx'

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={clsx('bg-primary rounded-lg px-6 py-3 text-white', className)} {...props}>
            {children}
        </button>
    )
}
