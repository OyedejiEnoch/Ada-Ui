import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {

  const acheivements =[
    {
      title:'Forrester',
      text:'Conversational AI Wave Challenger'
    },
    {
      title:'G2',
      text:'High Performer Fall 2024'
    },
    {
      title:'ITRG',
      text:'Top Rated 2024'
    },
    {
      title:'Globe & Mail',
      text:'Top Growing Companies'
    },
  ]

  return (
    <section className='bg-[#1C1F24]'>
      <div className='container'>
        <div className='py-24 w-full flex flex-col '>
          <div className='flex flex-col items-start justify-start'>          
              <h2 className='text-[40px] leading-[48px] md:text-5xl max-w-[700px] md:leading-[60px]'>Basic chatbots have <span className='text-[#9CEAEC]'>no business </span> representing <span className='text-[#B69EE0]'> your business </span></h2>
              <p className='max-w-[600px] mt-6'>Ditch code-heavy, old school scripted chatbots. Integrate Ada with
                your existing business systems to resolve complex customer
                inquiries in record time.</p>

              <div className='flex items-center gap-10 flex-col md:flex-row mt-10'>
                <Button text='See Ada in Action' className='background w-full'/>
                <Button text='Learn More' className='border border-[#9977D4] w-full' />
            </div>
           </div>

           <div className='flex items-center justify-center'>
            <Image src={'/images/arc.svg'} alt='image' width={100} height={100} className='w-[300px] h-[300px] object-cover lg:object-contain lg:w-[1000px] lg:h-[800px]' />
           </div>



           <div className='mt-10 md:mt-2` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

            {acheivements.map((acheivement)=>(
              <div key={acheivement.title} className='border border-gray-100/20 rounded-lg flex justify-center items-center px-4 py-8 flex-col bg-deepblack shadow-lg'>
              <Image src={'/images/champion.svg'} alt='img' width={40} height={40} />
              <h2 className='text-2xl font-semibold mt-4'>{acheivement.title}</h2>
              <p className='text-xs text-gray-100/70 mt-1'>{acheivement.text}</p>
            </div>
            ))}
              
           </div>


           <div className='flex items-center mt-20 flex-col lg:flex-row gap-4'>
            <div className='flex-1'>
              <Image src={'/images/phonecall.svg'} alt='img' width={100} height={100}  className='w-[500px] h-[500px] object-cover'/>
            </div>

            <div className='flex-1 flex-col flex gap-4'>
              <h2 className='text-4xl md:text-5xl'>Resolve more phone calls with voice AI</h2> 
              <p className='text-sm text-gray-100 leading-[25px]'>Your customers are waiting — and they have been for some time — for the
              seamless experience only Ada platform can provide. Add intelligent phone
              automation using the same knowledge content in Ada easy-to-use
              platform.</p>

              <div className='max-w-[200px] mt-10'>
              <Button text='Learn More about ada'  className='background w-full' />
              </div>
            </div>

           </div>
        </div>
      </div>
    </section>
  )
}

export default About
