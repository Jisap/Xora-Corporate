"use client"

import { FC } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { companies } from "@/app/api/data"

const Companies:FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className='company-content text-center w-full'>
            <div>
              <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                Our partners
              </span>

              <h2 className='w-full mt-4 font-chakrapetch lg:text-35 font-semibold'>
                Join over <span className="bg-dark text-white px-2 rounded-sm">1000+</span> Companie with Axora Here
              </h2>
            </div>
          </div>

          <div className="relative mt-10">
            <Swiper 
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 2500, // Añadimos un delay para que el autoplay funcione
                disableOnInteraction: false,
              }}
              freeMode={true}
              allowTouchMove={false}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="companies-swiper relative"
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <div className="companies-item h-[100px] w-full bg-white shadow-xl px-8 rounded-xl flex items-center justify-center cursor-pointer">
                    <Image 
                      src={company.image}
                      alt="company-image"
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
         </div> 
      </section>
    </>
  )
}

export default Companies