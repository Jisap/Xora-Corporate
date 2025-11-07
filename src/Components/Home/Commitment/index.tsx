"use client"

import { FC } from 'react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import { tags } from '@/app/api/data'




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

          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='w-full bg-white p-8 rounded-2xl'>
              <h2 className='font-chakrapetch text-20 lg:text-24 font-semibold mb-5'>
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

              <div className='flex gap-5'>
                <span className="text-5xl font-semibold">200</span>
                <p className='text-pera-dark flex justify-center items-center'>
                  Satisfied customers work with our axora.
                </p>
              </div>
            </div>

            <div className='w-full bg-white p-8 rounded-2xl'>
              <h2 className='font-chakrapetch text-20 lg:text-24 font-semibold mb-5'>
                Evaluating the Strategy to Achieve the Goals
              </h2>

              <div className='w-full h-[230px]'>
                <Image 
                  src="/images/commitment/strategy-chart.webp"
                  alt="strategy-chart"
                  width={350}
                  height={350}
                  className='w-full h-full object-contain mx-auto'
                />
              </div>
            </div>

            <div className='w-full bg-white p-8 rounded-2xl flex flex-col justify-between items-start md:col-span-2 lg:col-span-1'>
              <div className='mb-8'>
                <h2 className='font-chakrapetch text-20 lg:text-24 font-semibold pb-1'>
                  Evaluating the Strategy to Achieve the Goals
                </h2>

                <p className=''>
                  Our team are always available to addressed our concerns, providing quick solution.
                </p>
              </div>

              <ul className='flex flex-wrap gap-3 w-full'>
                {tags.map((tag, index) => (
                  <li 
                    key={index} 
                    className='border border-white rounded-md overflow-hidden cursor-pointer'
                  >
                    <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Commitment