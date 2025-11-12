"use client"

import Companies from "@/Components/Home/Companies"
import Team from "@/Components/Home/Team"
import Testimonials from "@/Components/Home/Testimonials.tsx"
import HeroSub from "@/Components/SharedComponents/HeroSub"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


type FAQItem = {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Bexon offer to clients ?",
    answer: "Gettin started is easy! Simply reach out to us through our contact form o give us a call, and we'll shcedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring queality control and timely delivery."
  },
  {
    question: "How do you ensuer the success of a project ?",
    answer: "We're committed to providing our clients with the best possible service. We'll work closely with you to understand your goals and objectives, and develop a customized plan to achieve them. Our team is dedicated to delivering results, and we're always available to answer any questions you may have."
  },
  {
    question: "What is the process for selecting a project ?",
    answer: "We'll start by reviewing your requirements and goals, and then work with you to develop a customized plan. We'll also provide you with a detailed project timeline, so you can plan your work and stay on track. Once we've completed the project, we'll provide you with a detailed report and recommendations for future projects."
  },
  {
    question: "What is the process for selecting a project ?",
    answer: "We'll start by reviewing your requirements and goals, and then work with you to develop a customized plan. We'll also provide you with a detailed project timeline, so you can plan your work and stay on track. Once we've completed the project, we'll provide you with a detailed report and recommendations for future projects."
  },
  {
    question: "Can I schedule a consultation with Bexon ?",
    answer: "Yes, we're always available to schedule consultations. Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you."
  },
  {
    question: "Do you offer a free consultation ?",
    answer: "No, we're not currently offering a free consultation. However, we do offer a range of packages that include one-on-one consultations, project management, and more. Contact us to learn more about our packages and how they can benefit your business."
  }
]


const page = () => {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/faq", text: "Faq" },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <HeroSub
        title="Faq"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 flex flex-wrap lg:flex-nowrap gap-5'>

          <div className="lg:w-[50%] w-full">
            <Image 
              src="/images/faq/faq-image-01.webp"
              alt="Faq"
              width={300}
              height={300}
              className="w-full rounded-xl"
            />
          </div>
          
          <div className="lg:w-[50%] w-full">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300
                ${openIndex === index ? "bg-prim text-white" : "bg-white text-black"}
              `}
                >
                  <button
                    className='w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none'
                    onClick={() => toggle(index)}
                  >
                    <span className='font-medium'>
                      {item.question}
                    </span>
                    <Icon
                      icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"} className='text-xl'
                    />
                  </button>

                  {openIndex === index && (
                    <div className='px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90'>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className='bg-light overflow-hidden py-14 lg:py-18 '>
        <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 gap-5'>
          <div className="w-full text-center mb-10">
            <span className="subt-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Common Questions
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Need help? Start Here
            </h2>

            <div className="space-y-4 w-full lg:w-[70%] lg:mx-auto">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300
                ${openIndex === index ? "bg-prim text-white" : "bg-white text-black"}
              `}
                >
                  <button
                    className='w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none'
                    onClick={() => toggle(index)}
                  >
                    <span className='font-medium'>
                      {item.question}
                    </span>
                    <Icon
                      icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"} className='text-xl'
                    />
                  </button>

                  {openIndex === index && (
                    <div className='px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90'>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page