"use client"

import { FC } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { companies, projects } from "@/app/api/data"
import Link from "next/link"
import { Icon } from "@iconify/react"

const Projects: FC = () => {
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
                Breaking Boundaries, Build Dreams.
              </h2>
            </div>
          </div>

          <div className="relative mt-10 swiper-fade-out">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1.5}
              loop={true}
              centeredSlides={true}
              speed={4000}
              autoplay={{
                delay: 2500, // Añadimos un delay para que el autoplay funcione
                disableOnInteraction: false,
              }}
              freeMode={true}
              allowTouchMove={false}
              breakpoints={{
                1400: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="projects-swiper relative"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="projects-item flex flex-col sm:flex-row justify-center items-center w-full bg-white shadow-2xl p-5 rounded-xl gap-5 h-auto lg:h-[550px]">
                    <div className="project-image w-full sm:w-[50%] h-full">
                      <Image 
                        src={project.image}
                        alt="project-image"
                        width={350}
                        height={350}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="project-content w-full sm:w-[50%]">
                      <span className="bg-white border border-prim rounded-sm px-2 text-prim font-chakrapetch font-medium">
                        {project.category}
                      </span>

                      <h4 className="font-unbounded text-16 lg:text-24 pt-2 pb-4">
                        {project.title}
                      </h4>

                      <p className="text-prim-dark font-normal text-14 pb-5">
                        {project.description}
                      </p>

                      <Link
                        href={project.link}
                        className='text-dark h-[50px] lg:text-16 text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group group-hover:text-white'
                      >
                        Learn More
                        <Icon
                          icon="tabler:arrow-right"
                          width="24"
                          height="24"
                          className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 group-hover:bg-white group-hover:text-dark tansition-all duration-300'
                        />
                      </Link>
                    </div>
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

export default Projects