import HeroSub from '@/Components/SharedComponents/HeroSub';
import SectionHeader from '@/Components/SharedComponents/SectionHeader';
import { Services } from '@/app/api/data';
import { createSlug } from '@/lib/utils';
import ActionButton from '@/Components/SharedComponents/ActionButton';
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

      <section className="py-20 bg-prim-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row mb-12">
            <SectionHeader
              subtitle="Services"
              title="Our Services"
              position="left"
            />
            <ActionButton
              href="/contact"
              text="Request a Call"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Services.map((service) => {
              const slug =
                service.slug ?? createSlug(service.shortTitle ?? '');

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full h-60 overflow-hidden">
                    <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon
                        icon={service.icon}
                        width="32"
                        height="32"
                        className="text-white" />
                    </div>
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow 2xl:flex-row 2xl:justify-between 2xl:items-end hover:bg-pera-light transition-colors duration-300">
                    <div className="grow mb-4 2xl:mb-0">
                      <Link href={`/services/${slug}`}>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-prim transition-colors">
                          {service.shortTitle}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="mt-auto 2xl:mt-0 pt-4 2xl:pt-0 2xl:ps-4 shrink-0">
                      <ActionButton href={`/services/${slug}`} text="Learn More" variant='light' />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
