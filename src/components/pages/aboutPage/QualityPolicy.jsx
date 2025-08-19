import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import icon from '../../../assets/value.png'

const QualityPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Quality Policy Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12  rounded-full flex items-center justify-center">
            <img src={icon} className="w-12 h-12 text-white" />
          </div>
          <h1 style={{fontFamily:'Ubuntu'}} className="text-3xl font-bold text-gray-800">Quality Policy</h1>
        </div>
        
        <div 
          className="p-6 rounded-lg"
          style={{
            background: 'linear-gradient(180deg, rgba(253, 255, 249, 0.41) 0%, rgba(194, 244, 69, 0.41) 100%)',
            boxShadow: '-11px 9px 14.1px 0px rgba(0, 0, 0, 0.25), 0px 4px 8.3px 0px #B1DB49'
          }}
        >
          <p 
            className="text-gray-700"
            style={{
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '0%'
            }}
          >
            Quality is an integral part of Unique Corporate Business Principles. These principles guide our actions to deliver products 
            and services that are safe, compliant and preferred. They are essential for the achievement of our ambition to be 
            recognized and trusted to offer products and services that enhance the quality of product. At Unique, our commitment is 
            to never compromise on the safety, compliance and quality of our products and services. This requires everybody to be 
            engaged, to understand their responsibility and to be empowered to take action in order to protect individuals, our 
            customers, our brands & our suppliers.
          </p>
        </div>
      </div>

      {/* Quality Objectives Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12  rounded-full flex items-center justify-center">
            <img src={icon} className="w-12 h-12 text-white" />
          </div>
          <h2 style={{fontFamily:'Ubuntu'}} className="text-3xl font-bold text-gray-800">Quality Objectives</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 mb-6">
          {/* Objective 1 */}
          <div className="relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-semibold text-[#333333] absolute -top-6 -left-6 z-10"
              style={{
                border: '3px solid #B1DB49',
                boxShadow: '0px 4px 25.4px 0px #C2F445',
                backgroundColor: 'white'
              }}
            >
              1
            </div>
            <div 
              className="w-[95%] lg:h-[175px] pt-8 pl-8 pr-6 pb-6 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(253, 255, 249, 0.41) 0%, rgba(194, 244, 69, 0.41) 100%)',
                boxShadow: '-11px 9px 14.1px 0px rgba(0, 0, 0, 0.25), 0px 4px 8.3px 0px #B1DB49'
              }}
            >
              <p 
                className="text-gray-700"
                style={{
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0%'
                }}
              >
                • Fostering a quality mind-set with the objective of developing, manufacturing and providing products and services with zero defects.
              </p>
            </div>
          </div>

          {/* Objective 2 */}
          <div className="relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-semibold text-[#333333] absolute -top-6 -left-6 z-10"
              style={{
                border: '3px solid #B1DB49',
                boxShadow: '0px 4px 25.4px 0px #C2F445',
                backgroundColor: 'white'
              }}
            >
              2
            </div>
            <div 
              className="pt-8 pl-8 pr-6 pb-6 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(253, 255, 249, 0.41) 0%, rgba(194, 244, 69, 0.41) 100%)',
                boxShadow: '-11px 9px 14.1px 0px rgba(0, 0, 0, 0.25), 0px 4px 8.3px 0px #B1DB49'
              }}
            >
              <p 
                className="text-gray-700"
                style={{
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0%'
                }}
              >
                • Continuously challenging ourselves to improve the quality management system to guarantee product safety, prevent quality incidents and eliminate defects through the review of quality objectives and results.
              </p>
            </div>
          </div>
        </div>

        {/* Objective 3 - Full Width */}
        <div className="mt-14 relative">
          <div 
            className=" w-12 h-12 rounded-full flex items-center justify-center text-2xl font-semibold text-[#333333] absolute -top-6 -left-6 z-10"
            style={{
              border: '3px solid #B1DB49',
              boxShadow: '0px 4px 25.4px 0px #C2F445',
              backgroundColor: 'white'
            }}
          >
            3
          </div>
          <div 
            className="pt-8 pl-8 pr-6 pb-6 rounded-lg"
            style={{
              background: 'linear-gradient(180deg, rgba(253, 255, 249, 0.41) 0%, rgba(194, 244, 69, 0.41) 100%)',
              boxShadow: '-11px 9px 14.1px 0px rgba(0, 0, 0, 0.25), 0px 4px 8.3px 0px #B1DB49'
            }}
          >
            <p 
              className="text-gray-700"
              style={{
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0%'
              }}
            >
              • Encouraging participation and promotion of quality responsibilities amongst all employees and our suppliers through standards, education, training, supervision and effective communication. At Unique, teamwork, engagement, ownership and support by everyone are vital for achieving our quality objectives. we are committed to providing the required leadership, management and resources and we will ensure that the Quality Policy is reviewed annually and to employees and our suppliers. At its core, Quality is first and foremost about trust in our products, our services and in our brands. It is about delivering what we promise in everything we do. Each and every one of us has the power to influence Quality and trust through our leadership, dedication and passion.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button 
          className="px-6 py-3 rounded-lg text-[#484848] font-medium transition-all hover:shadow-lg"
          style={{
            background: '#C2F445',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            fontFamily:'Inter'
          }}
        >
          Explore Products <ArrowRight className="w-4 h-4 inline ml-1" />
        </button>
        <button style={{fontFamily:'Inter'}} className="px-6 py-3 border border-[#C2F445] rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all">
          All Categories
        </button>
      </div>
    </div>
  );
};

export default QualityPolicy;