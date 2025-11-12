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
    { href: "/team", text: "Team" },
  ]

  return (
    <>
      <HeroSub
        title="Team"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      
      <Team limit={3}/>

    </>
  )
}

export default page