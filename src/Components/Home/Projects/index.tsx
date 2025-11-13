"use client"

import { FC } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { companies, projects } from "@/app/api/data"
import SectionHeader from "@/Components/SharedComponents/SectionHeader"
import ProjectCard from "./ProjectCard"

const Projects: FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className="flex flex-col items-center">
            <SectionHeader 
              subtitle="Our partners"
              title="Breaking Boundaries, Build Dreams."
              position="center"
              titleClassName="w-full"
            />
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
                  <ProjectCard project={project} />
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