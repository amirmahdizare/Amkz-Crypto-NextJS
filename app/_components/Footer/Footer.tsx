import React from 'react'
import { LinkGroup } from './components/LinkGroup'

export const Footer = () => {
  return (
    <footer className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8 gap-12'>

      <div className='col-span-1 lg:col-span-2 flex flex-col gap-2 items-start justify-between lg:justify-evenly'>

        <div className='text-xl font-bold flex flex-row gap-0.5 items-center'>
          <span className='text-white'>Amkz</span>
          <span className='text-primary'>Crypto</span>
        </div>

        <div className='flex flex-row gap-3 items-start'>

          <div className='h-6 aspect-square bg-gray-500 rounded-full '></div>
          <div className='h-6 aspect-square bg-gray-500 rounded-full '></div>
          <div className='h-6 aspect-square bg-gray-500 rounded-full '></div>
          <div className='h-6 aspect-square bg-gray-500 rounded-full '></div>

        </div>

        <span className='text-gray-1'>
          2021 AmkzCrypto. All rights reserved
        </span>



      </div>

      <div className='col-span-1'>
        <LinkGroup
          title='About Us'
          links={[
            { title: 'About', link: 'https://amkz.dev' },
            { title: 'Carears', link: 'https://amkz.dev' },
            { title: 'Blog', link: 'https://amkz.dev' },
            { title: 'Legal & Privacy', link: 'https://amkz.dev' },
          ]}

        />
      </div>
      <div className='col-span-1'>

        <LinkGroup
          title='Services'
          links={[
            { title: 'Aplications', link: 'https://amkz.dev' },
            { title: 'Affilliate', link: 'https://amkz.dev' },
            { title: 'Buy Crypto', link: 'https://amkz.dev' },
            { title: 'Institutional Services', link: 'https://amkz.dev' },
          ]}

        />

      </div>

      <div className='col-span-1'>

        <LinkGroup
          title='Learn'
          links={[
            { title: 'What is Cryptocurency?', link: 'https://amkz.dev' },
            { title: 'Crypto Basic', link: 'https://amkz.dev' },
            { title: 'Tips and Tutorials', link: 'https://amkz.dev' },
            { title: 'Market Update', link: 'https://amkz.dev' },
          ]}

        />

      </div>




    </footer>
  )
}
