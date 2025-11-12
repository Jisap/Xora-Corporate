import HeroSub from '@/Components/SharedComponents/HeroSub'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
  params: 
    Promise<{
      slug: string
    }> 
}


const ServiceDetails = async({params}: Props) => {

  const { slug } = await params

  const service = ServiceDetails.find((s) => s.slug === slug)
  if(!service) return notFound()

  const breadcrumbLinks = [
    {href: "/", text: "Home"},
    {href: "/services", text: "Services Details"},
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <HeroSub title={service.title} description={service.description} breadcrumbLinks={breadcrumbLinks} />

    <section className='pb-20'>
      <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 flex space-y-14'>
        <div className='lg:w-[60%] w-full'>
          <div className='bg-white rounded-2xl spacy-y-6 p-5'>
            {service.image && (
              <Image 
                src={service.image}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>  

      <h4 className='font-unbounded font-medium text-3xl'>
        Our Range of Customer Services
      </h4>

      <p className='pb-4 text-pera-dark text-16 leading-6'>
        At Bexon, we dont just focus on solving customer probles. We also provide a range of services to help our clients achieve their goals. From consulting to project management, we have the expertise and resources to help you succeed.
      </p>

      <div className='space-y-4 w-full'>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden transition-all duration-300
              ${openIndex === index ? "bg-prim text-white" : "bg-white text-black"}
            `}
          >
            <button
              className='w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none'
              onClick={() => toggle(index)}
            >
              <span className='font-medium'>
                {item.question}
              </span>
              <Icon 
                icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"} className='text-xl' 
              />
            </button>

            {openIndex === index && (
              <div className='px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default ServiceDetails