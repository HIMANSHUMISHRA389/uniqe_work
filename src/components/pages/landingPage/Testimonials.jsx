import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import background from "../../../assets/Vector.png"
import { ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Orlando Diggs",
      position: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      name: "Mollie Hall",
      position: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      name: "Lori Bryson",
      position: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      name: "Kate Morrison",
      position: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      name: "Mollie Hall",
      position: "Position, Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentSlide * 3, (currentSlide * 3) + 3);

  return (
    <div className="relative bg-white py-16 overflow-hidden max-w-[98%] mx-auto">
      {/* Background Image extending across entire white container */}
      <img 
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain opacity-80 "
      />
      
      {/* Testimonial Container */}
      <section 
        className="relative py-16 overflow-hidden mx-auto  rounded-3xl z-10"
        style={{ 
          background: "linear-gradient(0.27deg, #C2F445 0.24%, #FDFFF9 99.76%)" 
        }}
      >

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <p style={{fontFamily:'Ubuntu'}} className="text-[14px] text-[#202939] tracking-wide mb-2">
            What customers say
          </p>
          <h2 style={{fontFamily:'Ubuntu'}} className="text-[38px] font-bold text-[#202939] mb-12">
            Customer testimonials
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              >
                {/* Star Rating */}
                <div className="flex justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF881B] text-[#FF881B]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === currentSlide 
                    ? 'bg-green-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons - Now on white background with background image */}
      <div className="relative z-10 flex justify-center mt-12 space-x-2">
        <button
        style={{fontFamily:'Inter'}}
          className="inline-flex items-center px-6 py-3 bg-[#C2F445] text-[#484848] text-[14px] font-medium rounded-full hover:bg-lime-600 transition"
        >
          Explore Products
           <ArrowRight className="w-4 h-4" />
        </button>
        <button
         style={{fontFamily:'Inter'}}
          className="inline-flex items-center px-6 py-3 border border-[#C2F445] text-[#131313] text-[14px] font-medium rounded-full hover:bg-gray-100 transition "
          
        >
          All Categories
        </button>
      </div>
    </div>
  );
};

export default Testimonials;