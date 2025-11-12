"use client"

import Companies from "@/Components/Home/Companies"
import Team from "@/Components/Home/Team"
import Testimonials from "@/Components/Home/Testimonials.tsx"
import HeroSub from "@/Components/SharedComponents/HeroSub"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"



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

          <div className='about-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row'>
            <div>
              <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                Choose the Best
              </span>

              <h2 className='w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold'>
                Empowering Business with Expertise.
              </h2>
            </div>

            <Link
              href="/contact"
              className='text-white bg-dark h-[50px] lg:text-16 text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'
            >
              Request a Call
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
              />
            </Link>
          </div>

          <div className="about-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className='about-item w-full bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500  flex flex-col space-y-6 justify-between'>
              <div className='about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12'>
                <Icon
                  icon="famicons:bulb-outline"
                  width="40"
                  height="40"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>

              <h4 className='group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18'>
                Innovative Solutions
              </h4>

              <p className='text-pera-dark font-normal group-hover:text-white transition-colors duration-500'>
                We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.
              </p>
            </div>

            <div className='about-item w-full bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500  flex flex-col space-y-6 justify-between'>
              <div className='about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12'>
                <Icon
                  icon="la:award"
                  width="40"
                  height="40"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>

              <h4 className='group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18'>
                Award-Winning Expertise
              </h4>

              <p className='text-pera-dark font-normal group-hover:text-white transition-colors duration-500'>
                Recognized by industry leaders, our award-winning team has a proven record of delivering excellence accross projects
              </p>
            </div>

            <div className='about-item w-full bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500  flex flex-col space-y-6 justify-between'>
              <div className='about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12'>
                <Icon
                  icon="streamline-plump:customer-support-3"
                  width="40"
                  height="40"
                  className='group-hover:text-white transition-colors duration-500'
                />
              </div>

              <h4 className='group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18'>
                Support & Training
              </h4>

              <p className='text-pera-dark font-normal group-hover:text-white transition-colors duration-500'>
                We provide comprehensive support and training to ensure your business is fully equipped to take advantage of our expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-prim-light overflow-hidden py-14 lg:py-18 xl:py-22'>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14 flex flex-col lg:flex-row items-start gap-5'>
          <div className="content w-full lg:w-[55%]">

              <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                Get to Know Us
              </span>

              <h2 className='w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold pb-5'>
                Driving Innovation and Excellence for Sustainable Corporate Success Worldwide.
              </h2>

              <div className="flex lg:flex-row flex-col gap-4">
                <div className="bg-white p-5 rounded-xl">
                  <h4 className="font-unbounded text-xl pb-3">
                    Our Mission
                  </h4>

                  <p className="capitalize pb-5">
                    Our mission is empower businesses through innovate best solution, exceptional service.
                  </p>

                  <ul className="space-y-2.5">
                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim' 
                      />
                      Innovation & Excellence
                    </li>

                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim' 
                      />
                      Exceptional Customer
                    </li>

                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim' 
                      />
                      Bussiness Growth
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl">
                  <h4 className="font-unbounded text-xl pb-3">
                    Our Vision
                  </h4>

                  <p className="capitalize pb-5">
                    Our vision is to become a global leader in providing transformative business solutions.
                  </p>

                  <ul className="space-y-2.5">
                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim'
                      />
                      Leader in Solutions
                    </li>

                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim'
                      />
                      Transformative Impact
                    </li>

                    <li className="flex gap-1">
                      <Icon
                        icon="weui:arrow-outlined"
                        width="12"
                        height="24"
                        className='text-prim'
                      />
                      Sustainable success
                    </li>
                  </ul>
                </div>
              </div>
        
            <Link
              href="/contact"
              className='text-white bg-dark h-[50px] lg:text-16 text-sm w-full rounded-xl font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5'
            >
              Learn More About Us
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
              />
            </Link>
          </div>

          <div className="image lg:w-[45%] md:w-3/4 w-full md:mx-auto md:py-10 rounded-lg overflow-hidden">
            <Image 
              src="/images/about/about-01.webp"
              alt="About"
              width={300}
              height={300}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <Companies />
      <Testimonials />
      <Team limit={4}/>

    </>
  )
}

export default page