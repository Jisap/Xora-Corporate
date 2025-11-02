import { headerItem } from '@/types/menu'
import React, { FC } from 'react'
import { Icon } from '@iconify/react'
import Logo from '../Logo';

interface SidebarProp {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar:FC<SidebarProp> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div
      className={`
        hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%] xxl:w-[40%] shadow-2xl bg-dark-blur backdrop-blur p-10 rounded-tl-3xl rounded-bl-3xl z-50
        transform transiton-transform duration-500 ease-in-out overflow-y-scroll
        ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className='tex-white flex justify-between items-center w-full'>
        <Logo />

        <div 
          className='close-btn group bg-white rounded-sm text-prim p-2 cursor-pointer'
          onClick={() => setIsOpenSidebar(false)}
        >
          <Icon icon="material-symbols:close" width="30" height="30" className='group-hover:rotate-90 transition duration-500'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar