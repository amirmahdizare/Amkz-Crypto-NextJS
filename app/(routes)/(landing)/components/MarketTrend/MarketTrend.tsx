import React from 'react'
import { CryptoItem } from './components/CryptoItem'

export const MarketTrend = () => {
  return (
    <div className='flex flex-col gap-6'>
        <span className='text-2xl font-semibold text-white'>Market Trend</span>

        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <CryptoItem
                symbol='BTC'
                fullname='Bitcoin'
                changePercent={1.41}
                currentValue={86000}
                icon={'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg'}
                />

            </div>
            
        </div>


    </div>
  )
}
