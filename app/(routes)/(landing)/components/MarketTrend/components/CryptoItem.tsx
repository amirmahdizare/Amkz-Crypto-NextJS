import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import sampleChart from '@images/sample-chart.svg'
import Image from 'next/image'

export const CryptoItem = ({ icon, symbol, fullname, currentValue, changePercent }: { icon: string, symbol: string, fullname: string, currentValue: number, changePercent: number }) => {
    return (
        <Link href={`/trade/${symbol.toLocaleLowerCase()}`} className='flex flex-col gap-4 border hover:-translate-y-1 hover:border-primary transition-all duration-300  border-border-color p-4 bg-[rgba(255,255,255,0.02)] rounded-2xl'>

            <div className='flex flex-row justify-between'>

                <div className='flex flex-row gap-4 items-center'>

                    <img src={icon} className='w-12 h-12 aspect-square rounded-full' />

                    <span className='text-lg font-semibold text-white uppercase'>{symbol}</span>

                    <span className='uppercase bg-gray-2 text-black-1 p-1 rounded text-xs font-semibold'>
                        {fullname}
                    </span>

                </div>


                <div  className='rounded-full text-[#B6B6B6] bg-[#261337]    flex flex-row justify-center items-center shrink-0 w-12 aspect-square'>
                    <ArrowUpRightIcon className='size-8'/>
                </div>

            </div>

            <div className='bg-text-1 w-full h-[1px] opacity-5'  ></div>

            <div className='flex flex-row gap-4 justify-between items-center'>

                <div className='flex flex-col gap-2.5'>
                    <span className='text-text-1 text-2xl'>${currentValue.toLocaleString()}</span>


                    <span className='text-lg text-gray-1'>{changePercent}%</span>

                </div>


                <Image src={sampleChart} alt={symbol} />

            </div>

        </Link>
    )
}
