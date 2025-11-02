"use client"


import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo';
import { HeaderData } from './Navigation/menuData';
import HeaderLink from './Navigation/headerLink';
import Link from 'next/link';
import { Icon } from "@iconify/react";

const Header: React.FC = () => {

  const [sticky, setSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed h-24 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar items-center transition-all duration-500 rounded-3xl
          ${sticky ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]" : "bg-white/10 backdrop-blur-sm"}
        `}
      >
        <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between items-center xl:gap-16 lg:gap-8 py-6'>
          <div className='text-white'>
            <Logo />
          </div>

          <nav className='hidden lg:flex grow items-center justify-center space-x-10 text-base'>
            {HeaderData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div className='nva-right gap-4 hidden lg:flex items-center'>
            <Link href="/contact" className="text-white bg-dark h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group">
              Let&apos;s Talk
              <Icon 
                icon="tabler:arrow-right" 
                width="24" 
                height="24" 
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header