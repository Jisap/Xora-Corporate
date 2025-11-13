'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const ServiceDetailsClient = ({ faq }: { faq?: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h4 className="font-unbounded font-medium text-2xl mb-4 text-gray-900">
        Preguntas Frecuentes
      </h4>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros
        servicios. Si no encuentras lo que buscas, no dudes en contactarnos.
      </p>

      <div className="space-y-3">
        {faq?.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index
                ? 'bg-prim text-white'
                : 'bg-white text-gray-900 border-gray-200'
              }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="font-medium">{item.question}</span>
              <Icon
                icon={
                  openIndex === index ? 'akar-icons:minus' : 'akar-icons:plus'
                }
                className="text-xl"
              />
            </button>

            {openIndex === index && (
              <div className="px-5 py-4 bg-gray-900/10 text-white/90 border-t border-white/30">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsClient;
