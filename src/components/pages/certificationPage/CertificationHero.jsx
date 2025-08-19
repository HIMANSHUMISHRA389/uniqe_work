import React from 'react';
import { ArrowRight } from 'lucide-react';

const CertificationHero = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Orange certification badge/icon placeholder */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Main heading */}
        <h1 style={{fontFamily:'Ubuntu',fontWeight:'500'}} className="text-4xl sm:text-5xl lg:text-[64px] text-[#1F2937] mb-6 leading-[73px]">
          Quality Certifications we own at
          <br />
          Unique Techno Solutions
        </h1>

        {/* Subheading */}
        <p style={{fontFamily:'Inter',fontWeight:'400'}} className="text-lg sm:text-xl text-[#606060] mb-12 max-w-3xl mx-auto leading-[28px]">
          Certified for Excellence: Proud holders of UL and ISO 9001:2015 certifications, ensuring 
          world-class quality and safety standards in every solution we deliver
        </p>

        {/* CTA buttons */}
        <div style={{fontFamily:'Inter',fontWeight:'500'}} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#C2F445] hover:bg-lime-500 text-[#484848] font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200">
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button style={{fontFamily:'Inter',fontWeight:'500'}} className="bg-white hover:bg-gray-50 text-[#131313] font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-colors duration-200">
            All Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationHero;