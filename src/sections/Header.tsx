'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Header = () => {

  const [isMobileNavOpen, setIsMobileNavOpen]=useState(false)

  return (
    <section className='w-full bg-black text-white sticky top-0 left-0'>
      <div className='container '>
        <div className='w-full flex items-center justify-between h-16 lg:h-20 '>
        
          {/* left */}
          <div>
            <Image src={'/images/adalogo.svg'} alt='logo' width={60} height={60} />
          </div>

          {/* middle */}
          <ul className='items-center hidden lg:flex'>
            <li className='text-sm text-gray-100 mx-10 tracking-wider cursor-pointer'>Pricing</li>
            <li className='text-sm text-gray-100 mx-10 tracking-wider cursor-pointer'>Platform</li>
            <li className='text-sm text-gray-100 mx-10 tracking-wider cursor-pointer'>Solution</li>
            <li className='text-sm text-gray-100 mx-10 tracking-wider cursor-pointer'>Resources</li>
          </ul>


          {/* right */}
          <div className='hidden lg:block'>
            <Button text='Get a Demo' className='background' />
          </div>

          <div className='flex lg:hidden items-center'>
          <button onClick={()=>setIsMobileNavOpen((curr)=> !curr)} className='size-10 border-2 rounded-lg relative border-transparent'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className={twMerge('w-4 h-0.5 bg-gray-200 -translate-y-1 transition duration-300', isMobileNavOpen && 'translate-y-0 rotate-45')}></div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className={twMerge('w-4 h-0.5 bg-gray-200 translate-y-1 transition duration-300', isMobileNavOpen && 'translate-y-0 -rotate-45')}></div>
            </div>
          </button>
        </div>

        </div>
      </div>
      
    </section>
  )
}

export default Header
