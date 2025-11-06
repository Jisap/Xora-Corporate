"use client"

import { FC } from 'react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'




const Commitment: FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className='commitment-content bg-white p-8 rounded-2xl'>
            <div>
              <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                Choose the Best
              </span>

              <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold'>
                Committed Delivering Measurable Results and Building from the Lasting Relationship through out trus 
                and innovation and corporate shared
              </h2>
            </div>

            <Link
              href="/services"
              className='text-white bg-dark h-[50px] lg:text-16 text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5'
            >
              Learn More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
              />
            </Link>
          </div>

          <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='w-full bg-white p-8 rounded-2xl'>
              <h2 className='font-chakrapetch lg:text-24 font-semibold mb-5'>
                Rebranding Strategy for a Growing
              </h2>

              <div className='w-fit flex items-center pt-8 pb-10 overflow-hidden'>
                <Image 
                  src="/images/commitment/user1.jpg"
                  alt="user-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
                />
                <Image 
                  src="/images/commitment/user2.jpg"
                  alt="user-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full scale-110 border-4 border-white shadow-xl z-2"
                />
                <Image 
                  src="/images/commitment/user3.jpg"
                  alt="user-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Commitment