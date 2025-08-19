import React from 'react';
import icon from '../../../assets/iconTwo.png';
import { ArrowRight } from "lucide-react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  // Observer for stats section
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.2,    // trigger when 20% visible
  });

  return (
    <section className="mt-14 bg-[#f8f9fa] py-12 px-6 md:px-16 text-[#425466]">
      <div className="max-w-6xl mx-auto">
        {/* Icon + Title */}
        <div className="flex items-center gap-2 mb-6">
          <img src={icon} className="w-14 h-14" alt="About Icon" />
          <h2
            style={{ fontWeight: '700', fontFamily: 'Ubuntu' }}
            className="text-[40px] leading-[48px] text-[#313131]"
          >
            About Us
          </h2>
        </div>

        {/* About Content */}
        <ul
          style={{ fontWeight: 400, fontFamily: 'Ubuntu' }}
          className="lg:ml-15 space-y-4 list-disc list-inside text-[24px] leading-[30px]"
        >
          <li>
            <strong>M/S UNIQUE TECHNO SOLUTIONS PVT LTD</strong> was established in <strong>Rudrapur (UK)</strong> on 1st August 2005.
          </li>
          <li>
            In the highly competitive telecommunication, automobile harness & component industry, innovation and quality is the key to success and UNIQUE helps you to achieve competitive edge by providing you the cost effective products of high quality and precision.
          </li>
          <li>
            Our company symbolizes the <strong>best in corporate philosophies, as pioneering innovative approach</strong> through indigenously developed expertise. Our expertise in product design, process engineering, material sourcing, coupled with our team of application engineers, sales and customer support enables us to help you design and manufacture your next generation product successfully.
          </li>
          <li>
            UNIQUE has nearly 90 employees, <strong>highly skilled and competent who engaged in the process</strong> of delivering world-class products. Our company is being managed by a team of highly experienced technocrats and engineers having more than 5 years in the harness industry. The products are manufactured under stringent quality controls.
          </li>
          <li>
            We are in the process of developing suppliers whose <strong>products meet EMS requirements.</strong>
          </li>
        </ul>

        {/* Divider */}
        <hr className="mt-8 border-t border-gray-300" />

        {/* Stats with CountUp - Triggered on Scroll */}
        <div ref={ref} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-[40px] leading-[48px] text-[#313131] font-medium">
              {inView && <CountUp end={1000} duration={3} />}+
            </h3>
            <p className="text-[16px] mt-2 text-[#61646B] leading-[100%]">Completed Projects</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-[40px] leading-[48px] text-[#313131] font-medium">
              {inView && <CountUp end={500} duration={3} />}+
            </h3>
            <p className="text-[16px] mt-2 text-[#61646B] leading-[100%]">Happy Clients</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-[40px] leading-[48px] text-[#313131] font-medium">
              {inView && <CountUp end={250} duration={3} />}+
            </h3>
            <p className="text-[16px] mt-2 text-[#61646B] leading-[100%]">On Going Projects</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-[40px] leading-[48px] text-[#313131] font-medium">
              {inView && <CountUp end={5} duration={3} />}+
            </h3>
            <p className="text-[16px] mt-2 text-[#61646B] leading-[100%]">Branches</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            className="px-6 py-3 rounded-lg text-[#484848] font-medium transition-all hover:shadow-lg"
            style={{
              background: '#C2F445',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Inter'
            }}
          >
            Explore Products <ArrowRight className="w-4 h-4 inline ml-1" />
          </button>
          <button
            style={{ fontFamily: 'Inter' }}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all"
          >
            All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
