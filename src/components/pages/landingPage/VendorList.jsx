import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import icon from '../../../assets/fluent-mdl2_service-off.png'

const VendorList = () => {
  const vendors = [
    "Bonton", "Avon Steel", "BMIC", "Promt", "Polycab", "Vikas Strips",
    "Jupiter Telelinks", "SK Aggarwal", "Deep Cables", "Atuliya ENT.",
    "Chetan Cables", "Good Luck", "IGI", "AST", "Miracle Cables (I) PVT LTD",
    "The Wipe Hotwire India Thermal Equipment (P) LTD.", "Rajdoot Cables", "NRG",
    "Hisar Steels", "Phonix", "Haryana Steel Monger", "Bombay Metal & Alloy",
    "JWT", "Deepak Metal", "Vital", "Steel Deal", "Terminal Technology",
    "Guru Cycle", "Ultra Wiring", "Satnam Rubber", "Micro Plastic",
    "BKS Auto", "Modvek", "Adityabh IND.", "Jyco Elesi Metals", "J&K Engg. Works",
    "CNV ENT.", "V.K Auto India", "A.P. IND", "Techno Metals",
    "Guru Nanak ENT.", "Molex"
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden max-w-[98%] mx-auto">
      <div className="relative z-10  mx-auto px-13">
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src={icon}
              alt="Vendor Icon"
              className="w-14 h-14"
            />
          </div>
          <h2 style={{ fontFamily: 'Ubuntu' }} className="mb-2 text-[42px] font-bold text-[#131313]">
            Our Vendor List
          </h2>
        </div>

        {/* Vendor Tags */}
        <div className="flex flex-wrap gap-11 ml-5">
          {vendors.map((vendor, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px #B1DB49" }} // ✅ Hover Animation
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: "#E3FCA669",
                boxShadow: "0px 0px 7.7px 0px #B1DB49",
                height: "36px",
                lineHeight: "14px",
                fontFamily: 'Ubuntu'
              }}
              className="cursor-pointer inline-flex items-center px-[25px] py-[11px] text-black text-[14px] rounded-full border border-[#B1DB49]"
            >
              {vendor}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorList;
