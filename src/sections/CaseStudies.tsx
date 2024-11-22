import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className='w-full'>
        <div className='container'>
            <div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className=''>
                    <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-10 py-8 flex-col bg-deepblack'>
                        <h2 className='text-3xl'>AI-powered automation built for CX teams</h2>
                        <div className='mt-6'>
                        <Button text='View all case studies' className='background' />
                        </div>
                    </div>
                </div>

                <div className='col-span-1'>
                    <div className='border border-gray-100/20 rounded-lg flex justify-start items-start px-6 py-8 flex-col bg-deepblack'>
                        <div className='flex items-start md:items-center flex-col md:flex-row gap-4 justify-between w-full'>
                            <Image src={'/images/airasialogo.svg'} alt='img' width={80} height={80} />

                            <p className='text-[#9977D4] font-semibold text-sm'>Read the Air Asia Case Study</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-6 mt-8'>
                            {/* left */}
                        

                            <div className='flex flex-col  gap-6'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-3xl font-semibold'>75%</h2>
                                    <p className='text-xs md:text-sm text-gray-300'>inquiries resolved</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-3xl font-semibold'>11</h2>
                                    <p className='text-xs md:text-sm text-gray-300'>languages supported</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-3xl font-semibold'>8x</h2>
                                    <p className='text-xs md:text-sm text-gray-300'>increase in product upsell</p>
                                </div>
                            </div>

                            <div className=' flex flex-col justify-between gap-8'>
                                <h2 className='text-sm text-gray-300'>“Ada has supported our customer's agents to contribute to the overall
                                    ancillary income through our Customer Happiness contact channels by
                                    selling eight times more ancillary products compared with 12 months
                                    ago.”
                                </h2>

                                <div className='flex items-center gap-4'>
                                    <Image src={'/images/profileimg.svg'} alt='img' width={60} height={60}/>

                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-xl md:text-2xl font-semibold'>Bayley Clark</h2>
                                        <p className='text-xs md:text-sm text-gray-300'>Head of Customer Support Strategy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default CaseStudies
