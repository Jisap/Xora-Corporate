"use client"

import { FC, useRef } from "react"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { companies, projects } from "@/app/api/data"
import SectionHeader from "@/Components/SharedComponents/SectionHeader"
import ProjectCard from "./ProjectCard"

import { motion, useInView } from 'framer-motion'
import { headerVariants, containerVariants, itemVariants } from './animations'

const Projects: FC = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <motion.div ref={headerRef} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"} variants={headerVariants} className="flex flex-col items-center">
            <SectionHeader
              subtitle="Our partners"
              title="Breaking Boundaries, Building Dreams."
              position="center"
              titleClassName="w-full"
            />
          </motion.div>

          <motion.div
            ref={projectsRef}
            className="relative mt-10 swiper-fade-out"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
          >
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={50}
              slidesPerView={1.5}
              loop={true}
              centeredSlides={true}
              speed={4000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1400: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="projects-swiper relative"
            >
              {projects?.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div variants={itemVariants}><ProjectCard project={project} /></motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section >
    </>
  )
}

export default Projects