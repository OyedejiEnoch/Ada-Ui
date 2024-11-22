import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const footer =[
        {
            title:'Industries',
            list:['Pricing', 'Website Monitoring', 'Newsletter Monitoring', 'Blog']
        },
        {
            title:'Inspire',
            list:['Notion Competitor Monitoring Template', 'Competitor Analysis Prompts', 'Figma Competitor SWOT Template', 'Best Software Tools']
        },
        {
            title:'Legal',
            list:['About Us', 'Contact ', 'FAQ', 'Privacy Policy', 'Terms and Conditions', 'Imprint']
        },
    ]

  return (
    <section className=''>
        <div className='container'>
            <div className='py-20 flex lg:flex-row flex-col max-md:gap-8 justify-start items-start md:justify-between'>
                <div className='flex items-center flex-col gap-4'>
                    <Image src={'/images/logo2.svg'} alt='logo' width={130} height={130} />
                    <div className='flex items-center gap-4'>
                        <Image src={'/images/linkedin.svg'} alt='logo' width={10} height={10} />
                        <Image src={'/images/facebook.svg'} alt='logo' width={10} height={10} />
                        <Image src={'/images/twitter.svg'} alt='logo' width={10} height={10} />
                    </div>
                </div>


                <div className='flex flex-wrap gap-6'>
                    {footer.map((footer)=>(

                    <div key={footer.title} className='flex flex-col gap-6 mx-2 lg:mx-10'>
                        <h2 className='font-semibold text-[22px]'>{footer.title}</h2>
                        <ul className='flex flex-col gap-8'>
                            {footer.list.map((list)=>(

                            <li className='text-xs text-gray-400'>{list}</li>
                            ))}

                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Footer
