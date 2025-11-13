import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  position?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  position = 'left',
  children,
  titleClassName = 'w-full lg:w-3/4',
}) => {
  const alignmentClasses = `text-${position}`;
  const flexAlignment = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <div className={`solution-content flex flex-col ${alignmentClasses} ${flexAlignment[position]} gap-4`}>
      <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3 w-fit'>
        {subtitle}
      </span>
      <h2 className={`font-chakrapetch lg:text-35 font-semibold ${titleClassName}`}>
        {title}
      </h2>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeader;