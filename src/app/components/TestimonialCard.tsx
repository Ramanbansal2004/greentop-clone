// components/TestimonialCard.tsx
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  text: string;
  name: string;
  company: string;
  avatar: string;
}

export default function TestimonialCard({
  text,
  name,
  company,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <p className="text-gray-700 text-base mb-4">{text}</p>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 relative">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
}
