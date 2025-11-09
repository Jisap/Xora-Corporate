import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'



Link

const Blog:FC = () => {
  return (
    <>
      <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
          <div className="blog-content text-center mb-10">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Our Blogs
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Strategies and Insights
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog