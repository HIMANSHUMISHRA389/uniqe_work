import React from 'react';
import { motion } from "framer-motion";
import icon from '../../../assets/features.png';

const FacilitiesWeProvide = () => {
  const facilities = [
    // Row 1
    [
      "CNC turning Center",
      "CNC Leaser Cutting Machine 3KW",
      "CNC Vertical Machining Center (VMC) Bed Size 1000x600mm",
      "CNC Brake Press"
    ],
    // Row 2
    [
      "Powder Coating Shop",
      "Drilling Shop",
      "Welding Shop (Tig+Mig)",
      "Press Shop upto 250 ton",
      "Fabrication Shop."
    ],
    // Row 3
    [
      "Wire Crimping Machine upto 5 ton",
      "Automatic Push Pull Tester",
      "Ferule Printing Machine",
      "Sleeve Cutting Machine",
      "Wire Cutting Machine"
    ],
    // Row 4
    [
      "CNC Pipe Bending Machine Upto 40 Dia",
      "Automatic Wire Cutting and Stripping Machine",
      "Fully Automatic Wire Cutting, Stripping & Crimping Machine."
    ]
  ];

  return (
    <div className=" mx-auto px-16 py-8 bg-gray-50 rounded-lg mt-0">
      {/* Header */}
      <div className="max-w-[98%] flex items-start gap-4 mb-8">
        <div className="rounded-full flex items-center justify-center flex-shrink-0">
          <img src={icon} alt="Facilities Icon" className="w-10 h-10" />
        </div>
        <div>
          <h2 style={{ fontFamily: 'Ubuntu' }} className="text-2xl font-bold text-[#131313] mb-2">
            Facilities We Provide
          </h2>
          <p style={{ fontFamily: 'Ubuntu' }} className="text-[#606060] leading-relaxed max-w-md">
            Comprehensive facilities designed to support innovation,
            efficiency, and seamless operations.
          </p>
        </div>
      </div>

      {/* Facility Rows */}
      <div className="max-w-[98%] space-y-14 lg:ml-12">
        {facilities.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-9">
            {row.map((facility, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 4px 15px rgba(177, 219, 73, 0.6)"
                }}
                style={{
                  background: '#E3FCA669',
                  boxShadow: '0px 0px 7.7px 0px #B1DB49',
                  height: '36px',
                  lineHeight: '14px',
                  fontFamily: 'Ubuntu'
                }}
                className="inline-flex items-center px-4 text-black text-[14px] rounded-full border border-[#B1DB49] cursor-pointer transition-all duration-300"
              >
                {facility}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesWeProvide;
