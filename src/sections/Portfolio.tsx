import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <section className='w-full'>
        <div className='container'>
            <div className='py-20 flex flex-col gap-16'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h2 className='text-4xl font-semibold'>4,272,090,866</h2>
                    <p className='text-sm text-gray-200'>conversations automated</p>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-10'>
                    {/* left */}
                    <div className='flex-1 flex flex-col gap-8'>
                        <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 flex-col bg-deepblack shadow-lg'>
                            <span className='text-xs font-semibold'>Up to</span>
                            <h2 className='text-5xl font-semibold'>77%</h2>
                            <p className='max-w-[300px]'>of customer service interactions
                            resolved through automation</p>
                        </div>
                        <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 flex-col bg-deepblack shadow-lg'>
                            <h2 className='text-5xl font-semibold'>50+</h2>
                            <p className='max-w-[300px]'>languages supported instantly</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex-1 flex flex-col gap-6'>   
                        <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 gap-4 bg-deepblack shadow-lg'>
                            <Image src={'/images/tangologo.svg'} alt='logo' width={120} height={120} />
                            <p className=''>6.7x ROI in year 1</p>
                        </div>
                        <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 gap-4 bg-deepblack shadow-lg'>
                            <Image src={'/images/digicellogo.svg'} alt='logo' width={120} height={120} />
                            <p className=''>6.7x ROI in year 1</p>
                        </div>
                        <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 gap-4 bg-deepblack shadow-lg'>
                            <Image src={'/images/mokalogo.svg'} alt='logo' width={120} height={120} />
                            <p className=''>6.7x ROI in year 1</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Portfolio
