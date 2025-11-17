"use client"

import HeroSub from "@/Components/SharedComponents/HeroSub"
import { Icon } from "@iconify/react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Portfolio } from "@/app/api/data"

import portfolio1 from "../../../../../public/images/protfoliodetails/project-gallery-1.webp"
import portfolio2 from "../../../../../public/images/protfoliodetails/project-gallery-2.webp"
import portfolio3 from "../../../../..//public/images/protfoliodetails/project-gallery-3.webp"
import Link from "next/link"
import React from "react"
import Logo from '@/Components/Layout/Header/Logo';

type Props = {
  params: Promise<{ slug: string }>;
}

const PortfolioDetails = ({ params }: Props) => {
  const { slug } = React.use(params);

  if (!slug || slug === 'undefined') {
    return notFound();
  }

  const item = Portfolio.find((p) => p.slug === slug);

  if (!item) {
    console.error('No se encontró el proyecto para el slug:', slug);
    return notFound();
  }

  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/portfolio', text: 'Portfolio' },
  ]

  return (
    <>
      <HeroSub
        title={item.title}
        description="Explore our portfolio of projects and experiences."
        breadcrumbLinks={breadcrumbLinks} 
      />

      <section className="pb-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[60%] w-full">
            <div className="bg-white p-5 rounded-2xl space-y-6">
              <Image 
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <h4 className="font-unbounded font-medium uppercase text-3xl">
                {item.title}
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                {item.mainDescription}
              </p>

              <h4 className="font-unbounded font-medium uppercase text-3xl">
                Project Overview
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">{item.overview}</p>

              <h4 className="font-unbounded font-medium text-3xl">
                Project Gallery
              </h4>

              <p>{item.galleryDescription}</p>

              {/* Project Gallery Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src={portfolio1}
                  alt={`${item.title} gallery image 1`}
                  className="rounded-xl w-full h-auto object-cover md:col-span-2" // Span full width on medium screens and up
                />
                <Image
                  src={portfolio2}
                  alt={`${item.title} gallery image 2`}
                  className="rounded-xl w-full h-full object-cover"
                />
                <Image
                  src={portfolio3}
                  alt={`${item.title} gallery image 3`}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-black pb-5 font-semibold">
                Project Info
              </h4>

              <div className="space-y-6">
                {item.projectInfo?.map((info, index) => (
                  <div className="flex items-start gap-3" key={index}>
                    <div className="bg-[#007c7c] text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0">
                      <Icon 
                        icon="mdi:account-star"
                        width="22"
                        height="22"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        {info.label}
                      </p>
                      <p className="text-base font-semibold text-gray-900">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h4 className="text-black pb-5 font-semibold">Tags</h4>

              <div className="flex flex-wrap gap-2"> 
                {item.tags?.map((item) => (
                  <span key={item} className="border border-boder px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioDetails