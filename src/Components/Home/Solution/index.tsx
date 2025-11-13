"use client"

import React, { FC } from 'react'
import { solutionData } from "@/app/api/data"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import SectionHeader from '../../SharedComponents/SectionHeader'
import ActionButton from '../../SharedComponents/ActionButton'
import SolutionCard from './SolutionCard'


const Solution: FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className="flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <SectionHeader 
              subtitle="Our Solution"
              title="Tailor-Made Bussiness Solutions for Modern Corporates"
            />
            <ActionButton
              href="/services"
              text="Explore More"
            />
          </div>

          <div className='relative mt-10'>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className='solution-wrapper'
            > 
              {solutionData.map((solution, index) => (
                <SwiperSlide key={index}> 
                  <SolutionCard solution={{ ...solution, link: '/services' }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution