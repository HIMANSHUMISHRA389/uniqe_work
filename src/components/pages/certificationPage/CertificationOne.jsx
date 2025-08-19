import React, { memo, useEffect } from "react";
import { MapPin } from "lucide-react";
import certificateImage from "../../../assets/cOnewebP.webp"; // Replace with actual path

// Static styles
const badgeStyle = {
  backgroundColor: '#E3FCA6',
  color: '#000000',
  fontFamily: 'Ubuntu',
  fontWeight: '500'
};

const CertificationOne = memo(() => {
  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = certificateImage;
  }, []);

  return (
    <section className="py-12 bg-white text-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          style={{ fontFamily: 'Ubuntu', fontWeight: '500' }}
          className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-2"
        >
          Quality Certification By <br />
          <span className="text-black font-bold">
            International Bench Marking & Certification
          </span>
        </h2>

        {/* Badge & Location */}
        <div className="flex justify-center items-center gap-4 mt-4 mb-8 flex-wrap">
          <span
            style={badgeStyle}
            className="text-[20px] font-medium px-3 py-1 rounded-sm w-[180px] shadow-sm"
          >
            ISO-9001:2015
          </span>
          <span
            style={{ fontFamily: 'Ubuntu', fontWeight: '400' }}
            className="text-black text-[18px] leading-[24px] flex items-center gap-1"
          >
            <MapPin className="text-red-500 w-4 h-4" />
            Kanpur
          </span>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <img
            src={certificateImage}
            alt="ISO 9001:2015 Quality Certification from International Bench Marking & Certification"
            className="rounded-xl shadow-lg object-contain"
            style={{ maxWidth: '400px', maxHeight: '550px', width: '100%', height: 'auto' }}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
});

CertificationOne.displayName = "CertificationOne";

export default CertificationOne;
