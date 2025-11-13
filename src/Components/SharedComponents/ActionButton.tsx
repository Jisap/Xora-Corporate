import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ActionButtonProps {
  href: string;
  text: string;
  className?: string;
  variant?: 'dark' | 'light';
  icon?: string;
}

const ActionButton: FC<ActionButtonProps> = ({ href, text, className = '', variant = 'dark', icon = "tabler:arrow-right" }) => {
  const baseClasses = 'h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group';
  
  const variants = {
    dark: 'text-white bg-dark hover:bg-prim',
    light: 'text-dark bg-white hover:text-white hover:bg-prim',
  }

  const iconVariants = {
    dark: 'bg-prim text-white group-hover:-rotate-45',
    light: 'bg-prim text-white group-hover:bg-white group-hover:text-dark group-hover:-rotate-45',
  }

  return (
    <Link
      href= { href }
      className = {twMerge(baseClasses, variants[variant], className)}
    >
    { text }
    <Icon
      icon = {icon}
      width = "24"
      height = "24"
      className = {twMerge('rounded-full h-full w-[35px] p-1.5 transition-all duration-300', iconVariants[variant])}
    />
  </Link>
  );
};

export default ActionButton;
