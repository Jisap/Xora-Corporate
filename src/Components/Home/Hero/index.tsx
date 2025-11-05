import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { FC } from 'react'

const Hero:FC = () => {
  return (
    <>
      <div className='hero h-screen w-full bg-midnight_text relative overflow-hidden pt-44 pb-20'>
        <div className="hero-image bg-[url(/images/hero/hero-bg.jpg)] absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"></div>
        <div className='shape-1 absolute z-30 top-0 left-0 w-[300px] h-auto flex justify-start items-start'>
          <img 
            src="/images/hero/pattern-2.svg"
            alt="element-image"
          />
        </div>

        <div className='shape-2 absolute z-30 right-0 bottom-0 w-[300px] h-auto flex justify-center items-start'>
          <img 
            src="/images/hero/pattern-3.svg"
            alt="element-image"
          />
        </div>

        <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) z-20 relative text-white px-4 h-full flex flex-col justify-center items-start'>
          <div className="hero-content text-white">
            <h2 className='md:text-60 sm:text-40 text-28 text-white mb-9 lg:mb-3 w-full lg:w-3/4'>
              Transforming Ideas Into Reality
            </h2>

            <Link 
              href="/about"
              className='text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'
            >
              Get Started Now
              <Icon 
                icon="tabler:arrow-right" 
                width="24" 
                height="24" 
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300' 
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero