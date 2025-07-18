"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { KeenSliderInstance } from "keen-slider";

function AutoplayPlugin(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000); // 2 seconds
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const services = [
  {
    title: "Lawn Care and Maintenance",
    image:
      "https://circlelandscapes.ca/uploads/service/Lawn Care and Maintenance_1714920639.jpg",
    description:
      "Our seasoned professionals employ industry-leading techniques...",
    link: "https://circlelandscapes.ca/service/professional-lawn-care-and-maintenance",
  },
  {
    title: "Snow Removal",
    image:
      "https://circlelandscapes.ca/uploads/service/Snow Removal and Winter Maintenance_1714924520.png",
    description: "unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als",
    link: "https://circlelandscapes.ca/service/snow-removal-and-winter-property-care",
  },
  {
    title: "Landscaping Design",
    image:
      "https://circlelandscapes.ca/uploads/service/Garden Design and Installation_1714920839.jpg",
    description: "Transform your yard into a work of art...",
    link: "https://circlelandscapes.ca/service/custom-landscaping-design-installation",
  },
  {
    title: "Patios & Walkways",
    image:
      "https://circlelandscapes.ca/uploads/service/Patio and Walkway_1714921790.png",
    description: "Functional and aesthetic patios designed for durability.",
    link: "https://circlelandscapes.ca/service/patio-and-walkway-outdoor-hardscapes",
  },
];

export default function CarouselComponent() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
  loop: true,
  slides: {
    perView: 3,
    spacing: 40,
  },
  breakpoints: {
    '(max-width: 768px)': {
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
  },
}, [AutoplayPlugin]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">More Facilities</h2>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {services.map((s, i) => (
          <div
            key={i}
            className="keen-slider__slide group bg-transparent hover:bg-white hover:shadow-xl duration-100 overflow-hidden"
          >
            {/* Image with overlay */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/2.5] overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-4 py-2 bg-green-600 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Read More
              </a>
            </div>

            {/* Text content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-800">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
