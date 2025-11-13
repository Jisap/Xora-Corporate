import ActionButton from '@/Components/SharedComponents/ActionButton'
import PatternImage from '@/Components/SharedComponents/PatternImage'
import { Icon } from '@iconify/react'
import React, { FC } from 'react'

const Hero:FC = () => {
  return (
    <>
      <div className='hero h-screen w-full bg-midnight_text relative overflow-hidden pt-44 pb-20'>
        <div className="hero-image bg-[url(/images/hero/hero-bg.jpg)] absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"></div>
        
        <PatternImage 
          src="/images/hero/pattern-2.svg" 
          positionClasses='top-0 left-0 justify-start' 
        />
        <PatternImage 
          src="/images/hero/pattern-3.svg" 
          positionClasses='right-0 bottom-0 justify-center' 
        />

        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] z-20 relative text-white px-4 h-full flex flex-col justify-center items-start'>
          <div className="hero-content text-white">
            <h2 className='md:text-60 sm:text-40 text-28 text-white mb-9 lg:mb-3 w-full lg:w-3/4'>
              Transforming Ideas Into Reality
            </h2>

            <ActionButton 
              href="/about"
              text="Get Started Now"
            />
          </div>
        </div>

        <div className="absolute w-[320px] h-[320px] rounded-full bg-dark opacity-80 blur-[80px] -left-[50px] -bottom-[50px]"></div>
      
        <div className="solution-box absolute lg:block hidden lg:bottom-5 bottom-0 lg:right-5 right-0 bg-white/10 backdrop-blur-sm p-8 max-w-md rounded-md z-10">
          <Icon 
            icon="tdesign:quote-filled"
            width="60"
            height="60"
            className='text-white'
          />

          <p className='text-white pt-3 pb-8'>
            Commited to delivering innovative solutions that drive success. With a focus on quality.
          </p>

          <div className="hero-counter text-7xl font-medium text-white font-unbounded">
            <span className='counter'>10</span>
            <span className='count-plus'>M</span>+
            <sup></sup>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero