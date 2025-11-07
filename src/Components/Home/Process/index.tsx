"use client"

import React, { FC } from 'react'
import { solutionData } from "@/app/api/data"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Icon } from '@iconify/react'
import Link from 'next/link'




const Process: FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className='porcess-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row'>
            <div>
              <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                Our Process
              </span>

              <h2 className='w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold'>
                Seamless Process, Great Results.
              </h2>
            </div>

            <div className='space-x-3 flex xl:flex-row flex-col xl:space-y-0 space-y-3'>
              <p className='text-pera-dark text-16 pb-0 lg:pb-0 xl:pb-3'>
                Developing personalized customer journeys to increase satisfaction and loyalty.
              </p>
            </div>

            <Link
              href="/constact"
              className='text-white bg-dark h-[50px] lg:text-16 text-sm xl:w-[230px] w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0'
            >
              Request a Call
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
              />
            </Link>
          </div>

          <div className='process-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='process-item bg-white shadow-xl rounded-lg p-8 relative'>
              <span className='font-unbounded'>01</span>
              <h4 className='font-chakrapetch font-semibold pb-3'>
                Discovery & Planning
              </h4>
              <p className='text-16 text-pera-dark'>
                The first step in out process is understanding your uniques business needs, objetives, and out customes challenges.
              </p>
              <Icon
                icon="si:arrow-right-duotone"
                width="24"
                height="24"
                className='hidden xl:inline-flex items-center justify-center'
              />
            </div>

            <div className='process-item bg-white shadow-xl rounded-lg p-8 relative'>
              <span className='font-unbounded'>02</span>
              <h4 className='font-chakrapetch font-semibold pb-3'>
                Execution & Delivery
              </h4>
              <p className='text-16 text-pera-dark'>
                Once the plan is in place, our team moves forward with execution, turning strategies into action to delivery
              </p>
              <Icon 
                icon="si:arrow-right-duotone" 
                width="24"
                height="24"
                className='hidden xl:inline-flex items-center justify-center'  
              />
            </div>

            <div className='process-item bg-white shadow-xl rounded-lg p-8 relative md:col-span-2 lg:col-span-1'>
              <span className='font-unbounded'>03</span>
              <h4 className='font-chakrapetch font-semibold pb-3'>
                Discovery & Planning
              </h4>
              <p className='text-16 text-pera-dark'>
                After project completion, we conduct a thorough review to ensuer everything alingns with your goals and requeriments.
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Process