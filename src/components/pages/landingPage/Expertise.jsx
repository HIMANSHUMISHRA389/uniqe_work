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
      <div className="max-w-[94%] mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-8">
          {industries.slice(0, 3).map((industry, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-18 shadow-sm transition-all duration-300 
                         hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer group overflow-hidden 
                         opacity-50 hover:opacity-100 hover:bg-[#B1DB49] border-gray-200"
            >
              {/* Overlay for dark effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <div className="rounded-lg h-40 mb-4 overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-20">
                <h3
                  style={{ fontFamily: 'Inter' }}
                  className="text-lg font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1"
                >
                  {industry.title}
                </h3>
                <p
                  style={{ fontFamily: 'Inter' }}
                  className="text-sm leading-relaxed transition-transform duration-300 group-hover:translate-x-2"
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
{/* Industries Grid - Second Row */}
         <div className="max-w-[64%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mb-8 mx-auto">
          {industries.slice(3, 5).map((industry, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-18 shadow-sm transition-all duration-300 
                         hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer group overflow-hidden 
                         opacity-50 hover:opacity-100 hover:bg-[#B1DB49] border-gray-200"
            >
              {/* Overlay for dark effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <div className="rounded-lg h-40 mb-4 overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-20">
                <h3
                  style={{ fontFamily: 'Inter' }}
                  className="text-lg font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1"
                >
                  {industry.title}
                </h3>
                <p
                  style={{ fontFamily: 'Inter' }}
                  className="text-sm leading-relaxed transition-transform duration-300 group-hover:translate-x-2"
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;