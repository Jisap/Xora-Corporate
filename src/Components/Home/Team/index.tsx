"use client"

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

        <div className="team-wrapper">

        </div>
      </div>
    </div>
  )
}

export default Team