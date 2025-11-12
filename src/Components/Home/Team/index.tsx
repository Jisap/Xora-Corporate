"use client"

import { team } from "@/app/api/data"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"


interface TeamProps {
  limit?: number;
}

const Team: FC<TeamProps> = ({ limit }) => {

  const displayTeam = limit ? team.slice(0, limit) : team

  return (
    <div className='bg-prim-light overflow-hidden py-14 lg:py-18 xl:py-22'>
      <div className='container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14'>
        <div className="team-content gap-2 text-center">
          <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
            Meet our Team
          </span>

          <h2 className='w-full mx-auto lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold pb-5'>
            Meet Our Team Success Stories Fuel our Innovation.
          </h2>
        </div>

        <div className="team-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeam.map((member) => (
            <div key={member.id} className="team-item group">
              <div className="team-imag bg-white rounded-xl overflow-hidden relative">
                <Image 
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />

                {/* overlay social icons */}
                <div className="flex group-hover:opacity-100 gap-3 justify-center items-center z-20 text-white absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 transition-opacity duration-300">
                  <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <Icon 
                      icon="gg:facebook"
                      width="30"
                      height="30"
                      className="bg-white text-black rounded-sm hover:bg-prim hover:text-white border border-gray-600 transition-colors duration-300 cursor-pointer"
                    />
                  </Link>

                  <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <Icon
                      icon="mdi:twitter"
                      width="30"
                      height="30"
                      className="bg-white text-black rounded-sm hover:bg-prim hover:text-white border border-gray-600 transition-colors duration-300 cursor-pointer"
                    />
                  </Link>

                  <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <Icon
                      icon="ri:instagram-line"
                      width="30"
                      height="30"
                      className="bg-white text-black rounded-sm hover:bg-prim hover:text-white border border-gray-600 transition-colors duration-300 cursor-pointer"
                    />
                  </Link>

                  <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <Icon
                      icon="ri:linkedin-fill"
                      width="30"
                      height="30"
                      className="bg-white text-black rounded-sm hover:bg-prim hover:text-white border border-gray-600 transition-colors duration-300 cursor-pointer"
                    />
                  </Link>
                </div>
              </div>

              <div className="team-content flex justify-between items-start gap-2 pt-2">
                <div>
                  <h4 className="font-unbounded text-xl">
                    {member.name}
                  </h4>

                  <span>
                    {member.post}
                  </span>
                </div>

                <Icon 
                  icon="humbleicons:at-symbol"
                  width={30}
                  height={30}
                  className="bg-white p-1 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team