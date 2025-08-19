import React from 'react';
import imageOne from '../../../assets/GroupMapp.png';
import imageTwo from '../../../assets/mapBorder.png';
import one from '../../../assets/Frame One.png';
import two from '../../../assets/Frame Two.png';
import three from '../../../assets/Frame Three.png';
import four from '../../../assets/Frame Four.png';
import five from '../../../assets/Frame Five.png';

const Location = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes borderPulse {
          0% { 
            box-shadow: 0 0 0 0 rgba(194, 244, 69, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 15px 8px rgba(194, 244, 69, 0.2);
            transform: scale(1.02);
          }
          100% { 
            box-shadow: 0 0 0 0 rgba(194, 244, 69, 0);
            transform: scale(1);
          }
        }

        /* New map animation */
        @keyframes mapEntrance {
          0% { transform: scale(0.8) rotate(-5deg) translateY(20px); opacity: 0; }
          50% { transform: scale(1.02) rotate(1deg) translateY(0); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .blink-animation {
          animation: blink 2s infinite;
        }

        .border-animation {
          animation: borderPulse 3s infinite;
        }

        .map-entrance {
          animation: mapEntrance 1.5s ease-out forwards;
        }

        .marker-float {
          animation: float 3s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(194, 244, 69, 0.4);
          animation: pulseRing 2s infinite;
          z-index: -1;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div style={{ fontFamily: 'Inter' }} className="inline-block bg-[#C2F4454F] text-lime-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Units
          </div>

          <h1
            style={{
              fontWeight: 400,
              fontSize: '42px',
              lineHeight: '54px',
              textAlign: 'center',
              margin: 0,
              fontFamily: 'Ubuntu'
            }}
          >
            Location where we have our
          </h1>

          <h1
            style={{
              fontWeight: 500,
              fontSize: '42px',
              lineHeight: '54px',
              textAlign: 'center',
              margin: 0,
              color: '#4B5563',
              fontFamily: 'Ubuntu'
            }}
          >
            Group of Companies
          </h1>
        </div>

        {/* India Map Container */}
        <div className="p-8 flex justify-center">
          <div
            className="relative border-animation map-entrance"
            style={{ width: '590px', height: '680px' }}
          >
            {/* Main Map */}
            <img
              src={imageTwo}
              alt="Location map"
              style={{
                width: '590px',
                height: '680px',
                display: 'block'
              }}
            />

            {/* Border Overlay */}
            <img
              src={imageOne}
              alt="Map border"
              className="absolute top-0 left-0 pointer-events-none"
              style={{
                width: '590px',
                height: '680px'
              }}
            />

            {/* Location Icons with animations */}
            {[
              { src: one, top: '20%', left: '8%', delay: '0s' },
              { src: two, top: '22%', left: '37%', delay: '0.4s' },
              { src: three, top: '32%', left: '15%', delay: '0.8s' },
              { src: four, top: '16%', left: '29%', delay: '1.2s' },
              { src: five, top: '10%', left: '11%', delay: '1.6s', height: '66px' }
            ].map((marker, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: marker.top,
                  left: marker.left,
                  animationDelay: marker.delay
                }}
              >
                <div className="pulse-ring"></div>
                <img
                  src={marker.src}
                  alt={`Location ${i + 1}`}
                  className="blink-animation marker-float"
                  style={{
                    height: marker.height || '40px',
                    animationDelay: marker.delay
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Location;
