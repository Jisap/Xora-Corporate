import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className='contact-item h-[230px] p-8 rounded-lg w-full bg-white shadow-xl border group hover:bg-prim transition hover:text-white duration-500 flex flex-col justify-between text-center'>
      <div className='contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
        <Icon
          icon={icon}
          width="24"
          height="24"
          className='group-hover:text-white transition-colors duration-500'
        />
      </div>
      <div className='contact-info'>
        <h4 className='font-semibold font-unbounded text-18 mt-4 pb-2'>
          {title}
        </h4>
        <p className='text-sm text-gray-500 group-hover:text-gray-300'>
          {description}
          {link && <Link href="/contact" className='group-hover:underline'><br/>Need help ?</Link>}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;