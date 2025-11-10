"use client"

import Companies from "@/Components/Home/Companies"
import Testimonials from "@/Components/Home/Testimonials.tsx"
import HeroSub from "@/Components/SharedComponents/HeroSub"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

Testimonials

const page = () => {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ]

  return (
    <>
      <HeroSub 
        title="About"
        description=""
        breadcrumbLinks={breadcrumbLinks} 
      />
      <section className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
          <div className="about-content text-center mb-10">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Choose the Best
            </span>

            <h2 className='w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold'>
              Empowering Business with Expertise.
            </h2>

            <Link
              href="/contact"
              className='text-white bg-dark h-[50px] lg:text-16 text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'
            >
              Explore More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default page