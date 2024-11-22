import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full bg-hero font-heading'>
      <div className='container'>
        <div className='py-24 w-full flex flex-col justify-center items-center gap-4 md:gap-6'>
          <h2 className='text-center text-4xl lg:text-5xl font-semibold max-w-[800px] mx-auto leading-[45px] lg:leading-[60px]'>A full<span className='max-md:text-[#9CEAEC]'> customer</span>  service team, <span className='max-md:text-[#B69EE0]'> powered</span> by AI</h2>
          <p className='text-[14px] md:text-[16px] text-center tracking-wider mt-2 max-w-[700px] leading-[25px] md:leading-[30px]'>Don't settle for a basic chatbot - your customers deserve
          better. Get a fully stocked, AI-powered customer serviceautomation platform that resolves more inquiries
           with the least amount of effort.</p>


           <div className='flex items-center gap-10 flex-col md:flex-row mt-4 '>
            <Button text='See Ada in Action' className='background w-full'/>
            <Button text='Learn More' className='border border-[#9977D4] w-full' />
           </div>

          <div className='mt-10'>
            <Image src={'/images/heroimage.svg'} alt='hero-image' width={120} height={120} className='w-[400px] h-[400px] md:w-[650px] md:h-[600px] object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
