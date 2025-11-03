import { headerItem } from '@/types/menu'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const MobileHeaderLink: React.FC<{ item: headerItem }> = ({ item }) => {
  
  const path = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    // Only toggle if there is a submenu
    if (item.submenu) {
      setSubmenuOpen(prev => !prev);
    } 
  }

  return (
    <div className='relative w-full py-4'>
      {item.submenu ? (
        <div 
          className='flex items-center justify-between w-full text-white cursor-pointer' 
          onClick={handleToggle}
        >
          <span>{item.label}</span>
          <Icon 
            icon="iconamoon:arrow-down-2-duotone" 
            width="22" 
            height="22" 
            className={`
              transition-transform duration-300 
              ${submenuOpen ? "rotate-180" : ""}
            `} 
          />
        </div>
      ) : (
        <Link 
          href={item.href || '#'} 
          className='flex items-center justify-between w-full text-white'
        >
          <span>{item.label}</span>
          <div className='w-[22px] h-[22px]' />
        </Link>
      )}

      {item.submenu && (
        <div className={`
          transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 rounded-lg mt-2
          ${submenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          {item.submenu.map((subitem, index) => (
            <Link
              key={index}
              href={subitem.href}
              className={`
                  block px-4 py-2 transition 
                  ${path === subitem.href
                    ? "text-white bg-dark"
                    : "text-gray-300 hover:bg-white hover:text-dark"}
              `}
            >
              {subitem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink