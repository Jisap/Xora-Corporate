import { Services } from '@/app/api/data';
import HeroSub from '@/Components/SharedComponents/HeroSub';
import ServiceDetailsClient from './ServiceDetailsClient';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createSlug } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import SectionHeader from '@/Components/SharedComponents/SectionHeader';
import ActionButton from '@/Components/SharedComponents/ActionButton';

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

      <section className="py-20 bg-prim-light">
        <div className="container mx-auto px-4">
          {/* Cabecera y botón de contacto */}
          <div className="flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row mb-12 w-full">
            <SectionHeader
              subtitle="Services Details"
              title="More Details about this service"
              position="left"
            />
            <ActionButton href="/contact" text="Request a Call" />
          </div>

          {/* Contenedor para el contenido principal y la barra lateral */}
          <div className="flex flex-col lg:flex-row gap-10">
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
                <div className="space-y-4">
                  {service.desc.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-4 lg:w-2/5">
              <ServiceDetailsClient faq={service.faq} />

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.process.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.process.desc}</p>
                <ul className="space-y-3">
                  {service.process.processItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon
                        icon="material-symbols:check-rounded"
                        width="24"
                        height="24"
                        className="bg-prim text-white rounded-full p-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='border-gray-100 shadow-lg bg-white p-5 rounded-xl'>
                <h4 className='text-black pb-5 text-xl font-semibold'>Tags</h4>
                <div className='flex flex-wrap gap-2'>
                {service.tags?.map(
                  (tag) => (
                    <span key={tag}className='border border-boder px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300'>
                      {tag}
                    </span>
                  )
                )}
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
