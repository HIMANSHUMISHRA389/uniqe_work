import React from 'react';
import one from '../../../assets/K8s Operator.png';
import two from '../../../assets/K9s Operator.png';
import three from '../../../assets/K10s Operator.png';
import four from '../../../assets/K11s Operator.png';
import five from '../../../assets/k12soperator.png';

const Expertise = () => {
  const industries = [
    {
      title: "Medical Solution",
      description:
        "Unique Techno Solutions delivers innovative, reliable medical equipment—enhancing comfort, safety, and care for every patient.",
      image: one
    },
    {
      title: "Power Solution",
      description:
        "Unique Techno Solutions delivers innovative, ergonomic power solutions—enabling efficient energy distribution and connectivity.",
      image: two
    },
    {
      title: "School Solution",
      description:
        "Unique Techno Solutions delivers innovative, ergonomic school furniture—enhancing comfort, focus, and productivity in modern learning environments.",
      image: three
    },
    {
      title: "Telecom",
      description:
        "Unique Techno Solutions delivers advanced telecom infrastructure and services—empowering seamless communication networks.",
      image: four
    },
    {
      title: "Solar Solution",
      description:
        "Unique Techno Solutions delivers sustainable solar installations—powering clean energy solutions for a better future.",
      image: five
    }
  ];

  return (
    <div className="bg-[#FDFFF9] py-16 px-4">
      <div className="max-w-[80%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            style={{ fontFamily: 'Inter' }}
            className="inline-block bg-[#C2F4454F] text-sm px-4 py-2 rounded-full mb-4 transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            Industries We Work In
          </div>
          <h2
            style={{ fontFamily: 'Ubuntu' }}
            className="text-[42px] leading-[54px] font-[500]  text-gray-900 leading-tight"
          >
            We collaborate with a diverse range of
            <br />
            industries, <span style={{ fontFamily: 'Ubuntu' }} className="font-bold">leveraging our expertise.</span>
          </h2>
        </div>

        {/* Industries Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-8 ">
          {industries.slice(0, 3).map((industry, index) => (
            

<div
  key={index}
  className="group relative bg-white rounded-xl border border-gray-200 shadow-sm cursor-pointer
             overflow-hidden max-w-[90%] py-6
             transition-transform duration-300 ease-out hover:scale-[1.03]"
>
  {/* Animated fill overlay (top -> bottom) */}
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 rounded-xl bg-[#B1DB49]
               origin-top scale-y-0 transition-transform duration-500 ease-out
               will-change-transform group-hover:scale-y-100"
  />

  {/* Inner content (stays above overlay) */}
  <div className="relative z-10 h-full">
    <div className="border-b rounded-xl border-gray-200 px-4 transition-colors duration-300 group-hover:border-transparent">
      {/* Image (consistent height) */}
      <div className="flex justify-center items-center h-40 mb-4">
        <img
          src={industry.image}
          alt={industry.title}
          className="object-contain h-full"
        />
      </div>

      {/* Content */}
      <div className="min-h-[130px]">
        <h3
          style={{ fontFamily: 'Inter' }}
          className="text-base font-medium text-gray-900 mb-2"
        >
          {industry.title}
        </h3>
        <p
          style={{ fontFamily: 'Inter' }}
          className="text-sm text-gray-600 leading-relaxed"
        >
          {industry.description}
        </p>
      </div>
    </div>
  </div>
</div>




          ))}
        </div>
        {/* Industries Grid - Second Row */}
        <div className="max-w-[64%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-8 mx-auto">
          {industries.slice(3, 5).map((industry, index) => (
            
              <div
  key={index}
  className="group relative bg-white rounded-xl border border-gray-200 shadow-sm cursor-pointer
             overflow-hidden max-w-[90%] py-6
             transition-transform duration-300 ease-out hover:scale-[1.03]"
>
  {/* Animated fill overlay (top -> bottom) */}
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 rounded-xl bg-[#B1DB49]
               origin-top scale-y-0 transition-transform duration-500 ease-out
               will-change-transform group-hover:scale-y-100"
  />

  {/* Inner content (stays above overlay) */}
  <div className="relative z-10 h-full">
    <div className="border-b rounded-xl border-gray-200   px-4 transition-colors duration-300 group-hover:border-transparent">
      {/* Image (consistent height) */}
      <div className="flex justify-center items-center h-40 mb-4">
        <img
          src={industry.image}
          alt={industry.title}
          className="object-contain h-full"
        />
      </div>

      {/* Content */}
      <div className="min-h-[130px]">
        <h3
          style={{ fontFamily: 'Inter' }}
          className="text-base font-medium text-gray-900 mb-2"
        >
          {industry.title}
        </h3>
        <p
          style={{ fontFamily: 'Inter' }}
          className="text-sm text-gray-600 leading-relaxed"
        >
          {industry.description}
        </p>
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;