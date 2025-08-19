import React, { memo, useEffect } from "react";
import { MapPin } from "lucide-react";
import certificateImage from "../../../assets/cFourwebP.webp";

const CertificationFour = memo(() => {
  // Preload image on component mount
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
          UL Certificate For Wiring Harness
        </h2>

        {/* Location */}
        <div className="flex justify-center items-center gap-4 mt-4 mb-8 flex-wrap">
          <span
            style={{ fontFamily: 'Ubuntu', fontWeight: '400' }}
            className="text-black text-[21px] leading-[27px] flex items-center gap-1"
          >
            <MapPin className="text-red-500 w-4 h-4" />
            Rudrapur
          </span>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <img
            src={certificateImage}
            alt="UL Certificate for Wiring Harness from Rudrapur"
            className="max-w-full h-auto rounded-xl shadow-lg object-contain"
            style={{maxWidth: '400px', maxHeight: '550px', width: '100%', height: 'auto'  }}
            decoding="async"
            width="873"
            height="1240"
          />
        </div>
      </div>
    </section>
  );
});

CertificationFour.displayName = 'CertificationFour';

export default CertificationFour;
