// d:\React-Utilidades\next16-axora-corporate\src\Components\SharedComponents\SectionHeader.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  position?: 'left' | 'center' | 'right';
  children?: React.ReactNode; // Para contenido adicional como un botón o descripción
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  position = 'left', // Valor por defecto
  children,
}) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={`flex flex-col gap-2 ${alignmentClasses[position]}`}>
      <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
        {subtitle}
      </span>
      <h2 className='w-full mt-4 font-chakrapetch lg:text-35 font-semibold'>
        {title}
      </h2>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeader;
