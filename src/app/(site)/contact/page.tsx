import SolutionCard from '@/Components/Home/Solution/SolutionCard'
import HeroSub from '@/Components/SharedComponents/HeroSub'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const breadcrumbsLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" }
  ]

  return (
    <>
      <HeroSub
        title="Contact"
        description="Contact us"
        breadcrumbLinks={breadcrumbsLinks}
      />

      <div className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
          <div className='contact-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <div className='contact-item h-[230px] p-8 rounded-lg w-full bg-white shadow-xl border group hover:bg-prim transition hover:text-white duration-500 flex flex-col justify-between text-center'>
              <div className='contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
                <Icon
                  icon="tdesign:location"
                  width="24"
                  height="24"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>
              <div className='contact-info'>
                <h4 className='font-semibold font-unbounded text-18 mt-4 pb-2'>
                  Our Location
                </h4>

                <p className='text-sm text-gray-500 group-hover:text-gray-300'>
                  123 Main Street, Anytown USA
                </p>
              </div>
            </div>

            <div className='contact-item h-[230px] p-8 rounded-lg w-full bg-white shadow-xl border group hover:bg-prim transition hover:text-white duration-500 flex flex-col justify-between text-center'>
              <div className='contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
                <Icon
                  icon="ic:outline-email"
                  width="24"
                  height="24"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>
              <div className='contact-info'>
                <h4 className='font-semibold font-unbounded text-18 mt-4 pb-2'>
                  Email Us
                </h4>

                <p className='text-sm text-gray-500 group-hover:text-gray-300'>
                  webexample@axora.com
                </p>
              </div>
            </div>

            <div className='contact-item h-[230px] p-8 rounded-lg w-full bg-white shadow-xl border group hover:bg-prim transition hover:text-white duration-500 flex flex-col justify-between text-center'>
              <div className='contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
                <Icon
                  icon="material-symbols:call-outline-sharp"
                  width="24"
                  height="24"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>
              <div className='contact-info'>
                <h4 className='font-semibold font-unbounded text-18 mt-4 pb-2'>
                  Call Us
                </h4>

                <p className='text-sm text-gray-500 group-hover:text-gray-300'>
                    +1 (555) 555-5555
                </p>
              </div>
            </div>

            <div className='contact-item h-[230px] p-8 rounded-lg w-full bg-white shadow-xl border group hover:bg-prim transition hover:text-white duration-500 flex flex-col justify-between text-center'>
              <div className='contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
                <Icon
                  icon="hugeicons:chat"
                  width="24"
                  height="24"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>
              <div className='contact-info'>
                <h4 className='font-semibold font-unbounded text-18 mt-4 pb-2'>
                  Live Chat
                </h4>

                <p className='text-sm text-gray-500 group-hover:text-gray-300'>
                    livechat@axora.com
                    <Link href="/contact">Need help ?</Link>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default page