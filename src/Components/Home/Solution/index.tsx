"use client"

import React, { FC, useRef } from 'react'
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
import { motion, useInView } from 'framer-motion'
import { containerVariants, itemVariants } from './animation';


const Solution: FC = () => {
  const headerRef = useRef(null);
  const swiperRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isSwiperInView = useInView(swiperRef, { once: true, amount: 0.2 });

  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row"
          >
            <SectionHeader
              subtitle="Our Solution"
              title="Tailor-Made Business Solutions for Modern Corporates"
            />
            <ActionButton
              href="/services"
              text="Explore More"
            />
          </motion.div>

          <motion.div
            ref={swiperRef}
            className='relative mt-10'
            variants={containerVariants}
            initial="hidden"
            animate={isSwiperInView ? "visible" : "hidden"}
          >
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
                <SwiperSlide key={index} >
                  <motion.div variants={itemVariants}>
                    <SolutionCard solution={{ ...solution, link: '/services' }} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Solution