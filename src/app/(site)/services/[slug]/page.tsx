import { Services } from '@/app/api/data';
import HeroSub from '@/Components/SharedComponents/HeroSub';
import ServiceDetailsClient from './ServiceDetailsClient';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createSlug } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import SectionHeader from '@/Components/SharedComponents/SectionHeader';

interface Props {
  params: { slug: string };
}

const ServiceDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;

  if (!slug || slug === 'undefined') {
    return notFound();
  }

  const service = Services.find(
    (s) =>
      s.slug === slug || createSlug(s.shortTitle ?? '') === slug
  );

  if (!service) {
    console.error('No se encontró el servicio para el slug:', slug);
    return notFound();
  }

  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services' },
    { href: `/services/${slug}`, text: service.shortTitle ?? 'Details' },
  ];

  return (
    <>
      <HeroSub
        title={service.title}
        description={service.shortDesc}
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className='container mx-auto pt-10 flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row bg-gray-50'>
        <SectionHeader
          subtitle="Services Details"
          title="More Details about this service"
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
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/5 bg-white rounded-2xl shadow-md overflow-hidden">
            {service.img && (
              <Image
                src={service.img}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          </div>

          <aside className="lg:w-2/5">
            <ServiceDetailsClient faq={service.faq} />
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
