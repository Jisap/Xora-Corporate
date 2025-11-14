import HeroSub from '@/Components/SharedComponents/HeroSub'
import React from 'react'
import ContactCard from './ContactCard'
import { ContactCardsData } from '@/app/api/data'
import ActionButton from '@/Components/SharedComponents/ActionButton'


const page = () => {

  const breadcrumbsLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" }
  ]

  return (
    <>
      <HeroSub
        title="Contact"
        description="Contact us"
        breadcrumbLinks={breadcrumbsLinks}
      />

      <div className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
          <div className='contact-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            {ContactCardsData.map((card, index) => (
              <ContactCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
          <div className='flex flex-col lg:flex-row w-full gap-5'>
            <div className='w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-8 font-unbounded'>
                Feel Free to Get in Touch or Visit our Location.
              </h2>

              <form className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-gray-600 font-medium mb-2'>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder='Enter Your Name' 
                    className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'
                  />
                </div>

                <div>
                  <label className='block text-gray-600 font-medium mb-2'>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder='Enter Your email address'
                    className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'
                  />
                </div>

                <div>
                  <label className='block text-gray-600 font-medium mb-2'>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder='Enter Your Phone Number'
                    className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'
                  />
                </div>

                <div>
                  <label className='block text-gray-600 font-medium mb-2'>
                    Choose an option
                  </label>
                  <select
                    className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'
                  >
                    <option>Training and Development</option>
                    <option>Marketing Strategy</option>
                    <option>IT Support & Maintenance</option>
                    <option>Security & Compliance</option>
                    <option>Performance & Reliability</option>
                    <option>Management & Monitoring</option>
                    <option>Business Strategy</option>
                    <option>Sustainability & ESG</option>
                    <option>Customer Engagement</option>
                  </select>
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-gray-600 font-medium mb-2'>
                    Type Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder='Enter Your Message'
                    className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'
                  />
                </div>

                <ActionButton
                  href="/contact"
                  text="Send Message"
                />
              </form>
            </div>

            <div className='w-full lg:w-[50%] h-[300px] lg:h-[500px] mt-10'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.47827017203!2d-3.844343387490552!3d40.43809861028444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1763140830874!5m2!1ses!2ses" width="100%" height="100%"  loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page