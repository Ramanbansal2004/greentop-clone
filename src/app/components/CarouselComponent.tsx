'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

const services = [
  {
    title: 'Lawn Care and Maintenance',
    image: 'https://circlelandscapes.ca/uploads/service/Lawn Care and Maintenance_1714920639.jpg',
    description: 'Our seasoned professionals employ industry-leading techniques...',
    link: 'https://circlelandscapes.ca/service/professional-lawn-care-and-maintenance',
  },
  {
    title: 'Snow Removal',
    image: 'https://circlelandscapes.ca/uploads/service/Snow Removal and Winter Maintenance_1714924520.png',
    description: 'We provide quick and efficient snow removal services...',
    link: 'https://circlelandscapes.ca/service/snow-removal-and-winter-property-care',
  },
  {
    title: 'Landscaping Design',
    image: 'https://circlelandscapes.ca/uploads/service/Garden Design and Installation_1714920839.jpg',
    description: 'Transform your yard into a work of art...',
    link: 'https://circlelandscapes.ca/service/custom-landscaping-design-installation',
  },
  {
    title: 'Patios & Walkways',
    image: 'https://circlelandscapes.ca/uploads/service/Patio and Walkway_1714921790.png',
    description: 'Functional and aesthetic patios designed for durability.',
    link: 'https://circlelandscapes.ca/service/patio-and-walkway-outdoor-hardscapes',
  },
];

export default function CarouselComponent() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 20,
    },
    loop: false,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div ref={sliderRef} className="keen-slider">
        {services.map((s, i) => (
          <div key={i} className="keen-slider__slide bg-white rounded shadow overflow-hidden">
            <div className="relative w-full h-64">
              <Image src={s.image} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.description}</p>
              <a
                href={s.link}
                className="inline-block mt-4 text-purple-700 font-semibold hover:underline group"
                target="_blank"
              >
                Read More
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
