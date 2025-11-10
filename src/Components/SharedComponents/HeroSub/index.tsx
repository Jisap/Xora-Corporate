import Breadcrumbs from '@/Components/Breadcrumb'
import React, { FC } from 'react'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, breadcrumbLinks }) => {
  return (
    <section className='bg-cover relative overflow-hidden section-banner'>
      <div className='w-full h-full absolute z-0 rounded-b-[119px] -left-1/4 top-0'></div>
      <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 relative z-1'>
        <div className='absolute -bottom-35 left-0 flex flex-col h-full text-start items-start'>
          <Breadcrumbs links={breadcrumbLinks} />
        </div>
      </div>
    </section>
  )
}

export default HeroSub