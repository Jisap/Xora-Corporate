import HeroSub from '@/Components/SharedComponents/HeroSub';
import SectionHeader from '@/Components/SharedComponents/SectionHeader';
import { Services } from '@/app/api/data';
import { createSlug } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services' },
  ];

  return (
    <>
      <HeroSub
        title="Our Services"
        description="Explore our wide range of services designed to help your business thrive."
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className='container mx-auto pt-10 flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row bg-gray-50'>
        <SectionHeader
          subtitle="Services"
          title="Our Services"
          position="left"
        />

        <Link
          href="/contact"
          className='text-white bg-dark h-[50px] lg:text-16 text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'
        >
          Request a Call
          <Icon
            icon="tabler:arrow-right"
            width="24"
            height="24"
            className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 tansition-all duration-300'
          />
        </Link>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Services.map((service) => {
              const slug =
                service.slug ?? createSlug(service.shortTitle ?? '');

              return (
                <Link
                  key={service.id}
                  href={`/services/${slug}`}
                  className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-prim transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
