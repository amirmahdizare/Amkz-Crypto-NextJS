import React from 'react'
import { CryptoItem } from './components/CryptoItem'

export const MarketTrend = () => {
  return (
    <div className='flex flex-col gap-6 animate-translateUp4 '>
        <span className='text-2xl font-semibold text-white'>Market Trend</span>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 '>
            <div className='col-span-1'>
                <CryptoItem
                symbol='BTC'
                fullname='Bitcoin'
                changePercent={1.41}
                currentValue={86000}
                icon={'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg'}
                />
            </div>


            <div className='col-span-1'>
                <CryptoItem
                symbol='BTC'
                fullname='Bitcoin'
                changePercent={1.41}
                currentValue={86000}
                icon={'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg'}
                />
            </div>



            <div className='col-span-1'>
                <CryptoItem
                symbol='BTC'
                fullname='Bitcoin'
                changePercent={1.41}
                currentValue={86000}
                icon={'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg'}
                />
            </div>


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
