import HeroSub from '@/Components/SharedComponents/HeroSub'
import React from 'react'
import ContactCard from './ContactCard'
import { ContactCardsData } from '@/app/api/data'


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
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page