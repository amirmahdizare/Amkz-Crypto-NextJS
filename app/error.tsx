'use client'

import { useEffect } from 'react'
import { Button } from '@components'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col  min-h-64  gap-4 justify-center items-center h-full w-full'>
            <Button
                onClick={
                    () => reset()
                }
            >
                Retry
            </Button>
        </div>
    )
}