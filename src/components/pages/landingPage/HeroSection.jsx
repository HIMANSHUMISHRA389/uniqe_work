import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import heroone from '../../../assets/Subtractoneweb.webp'
import herotwo from '../../../assets/SubtractTwoweb.webp'
import herothree from '../../../assets/Subtractthreeweb.webp'
import herofour from '../../../assets/Subtractfourweb.webp'
import herofive from '../../../assets/Subtractfiveweb.webp'

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(true);

  
  const slides = useMemo(() => [
    {
      title: "Innovative Renewable Energy Excellence",
      description: "Unique Techno Solutions provides advanced electronic and solar products, driving sustainability, efficiency, and reliable power everywhere.",
      categories: [
        { name: "Solar System", icon: "🤖" },
        { name: "Concentration Series", icon: "⚡" },
        { name: "School Series", icon: "💻" }
      ],
      image: herofive
    },
   
    {
      title: "Superior Electrical Product Excellence",
      description: "Unique Techno Solutions provides advanced electronic and solar products, driving sustainability, efficiency, and reliable power everywhere.",
      categories: [
        { name: "Wiring harness series", icon: "🏥" },
        { name: "Electrical series", icon: "🛏️" }
      ],
      image: herotwo
    },
    {
      title: "Empowering Modern Learning Environments",
      description: "Unique Techno Solutions provides advanced electronic and solar products, driving sustainability, efficiency, and reliable power everywhere.",
      categories: [
        { name: "Dress Series", icon: "⭐" },
        { name: "Concentration series", icon: "🚑" },
        { name: "School Series", icon: "🛠️" }
      ],
      image: herothree
    },
    {
      title: "Connecting Tomorrow, Today Reliably",
      description: "Unique Techno Solutions provides advanced electronic and solar products, driving sustainability, efficiency, and reliable power everywhere.",
      categories: [
        { name: "Telecom Series", icon: "🤖" }
      ],
      image: herofour
    },
     {
      title: "Unmatched Medical Quality Solutions",
      description: "Unique Techno Solutions provides advanced electronic and solar products, driving sustainability, efficiency, and reliable power everywhere.",
      categories: [
        { name: "Bed Series", icon: "🛏️" },
        { name: "Mobility Series", icon: "♿" },
        { name: "Cart Series", icon: "🛒" },
        { name: "Seating Series", icon: "🪑" },
        { name: "Trolley Series", icon: "🚐" },
        { name: "Storage Series", icon: "📦" },
        { name: "Seating Series", icon: "💺" },
        { name: "General Series", icon: "⚕️" },
        { name: "Examination Series", icon: "🔍" }
      ],
      image: heroone
    },
  ], []);

  // Get the background color for the welcome badge based on active slide
  const welcomeBadgeBackground = useMemo(() => {
    return activeSlide === 0 ? '#C2F4442E' : '#2B59FF14';
  }, [activeSlide]);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => new Set([...prev, index]));
            resolve(index);
          };
          img.onerror = reject;
          img.src = slide.image;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, [slides]);

  // Optimized carousel timer with play/pause functionality
  // useEffect(() => {
  //   if (!isPlaying) return;
    
  //   const interval = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [slides.length, isPlaying]);

  // Memoized slide navigation function
  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  // Navigation functions for arrows
  const goToPreviousSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    handleUserInteraction();
  }, [slides.length]);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    handleUserInteraction();
  }, [slides.length]);

  // Pause carousel on user interaction
  const handleUserInteraction = useCallback(() => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000); // Resume after 10 seconds
  }, []);

  // Memoized current slide data
  const currentSlide = slides[activeSlide];
//
  return (
    <div className="bg-white relative overflow-hidden pt-16 sm:pt-20 lg:pt-2">
      <div className=" container max-w-[98%] mx-auto px-3 sm:px-4 md:px-0 lg:px-0 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 lg:py-1 xl:py-1 2xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 w-full items-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-12rem)] xl:min-h-[calc(100vh-14rem)]">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-full lg:max-w-2xl xl:max-w-3xl">
              {/* Welcome Badge with dynamic background color */}
              <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-4">
                <div 
                  className="px-3 sm:px-4 md:px-5 lg:px-4 py-1 md:py-2 lg:py-0 rounded-full inline-flex items-center space-x-2 max-w-fit transition-colors duration-300"
                  style={{ background: welcomeBadgeBackground }}
                >
                  <span 
                    className="text-black text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: '400',
                      lineHeight: '1.2'
                    }}
                  >
                    Welcome to,
                  </span>
                  <span 
                    className="text-blue-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: '400',
                      lineHeight: '1.2'
                    }}
                  >
                    Unique Techno Solution
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">👋</span>
                </div>
              </div>
              
              {/* Title with proper laptop sizing */}
              <h1 
                className="text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-6 transition-all duration-300 ease-in-out text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
                style={{
                  fontFamily: 'Ubuntu, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.1',
                  letterSpacing: '0.02em'
                }}
              >
                {currentSlide.title}
              </h1>
              
              {/* Description with better laptop sizing */}
              <p 
                style={{fontFamily:'Inter', fontWeight:'400'}} 
                className="mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
              >
                {currentSlide.description}
              </p>

              {/* Action Buttons with better laptop sizing */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6">
                <button 
                  className="px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-3 lg:py-2.5 xl:py-3 rounded-lg text-gray-800 transition-all hover:shadow-lg inline-flex items-center justify-center transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
                  style={{
                    background: '#C2F445',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    lineHeight: '1.25',
                    textAlign: 'center'
                  }}
                >
                  Explore Products <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 ml-2" />
                </button>
                <button 
                  className="px-3 sm:px-4 md:px-5 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-3 lg:py-2.5 xl:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    lineHeight: '1.25',
                    textAlign: 'center'
                  }}
                >
                  All Categories
                </button>
              </div>

              {/* Series Categories with proper spacing and sizing */}
              <div>
                <h3 
                  style={{fontFamily:'Inter'}} 
                  className="mb-2 sm:mb-3 md:mb-4 lg:mb-3 text-xs sm:text-sm md:text-base lg:text-sm text-gray-600"
                >
                  Series
                </h3>
                {/* Removed fixed height container to allow all cards to be visible */}
                <div className="overflow-visible min-h-58" >
                  <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                    {currentSlide.categories.map((category, index) => (
                      <div
                        key={`${activeSlide}-${index}`}
                        className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-2 bg-white px-2 sm:px-3 md:px-4 lg:px-3 xl:px-4 py-1 sm:py-1.5 md:py-2 lg:py-1.5 xl:py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer transform hover:scale-105 mb-2"
                      >
                        <span className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">{category.icon}</span>
                        <span 
                          className="text-gray-700 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '400',
                            lineHeight: '1.2'
                          }}
                        >
                          {category.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Carousel with better laptop sizing */}
          <div className="relative order-1 lg:order-2 h-48 sm:h-64 md:h-80 lg:h-80 xl:h-96 2xl:h-[500px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden ">
              {/* Loading placeholder */}
              {!imagesLoaded.has(activeSlide) && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                  <div className="text-gray-500 text-sm md:text-base lg:text-base xl:text-lg">Loading...</div>
                </div>
              )}
              
              {/* Optimized image rendering - only render visible and adjacent slides */}
              {slides.map((slide, index) => {
                const isActive = index === activeSlide;
                const isAdjacent = Math.abs(index - activeSlide) <= 1 || 
                  (activeSlide === 0 && index === slides.length - 1) ||
                  (activeSlide === slides.length - 1 && index === 0);
                
                if (!isActive && !isAdjacent) return null;
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading={index <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      style={{
                        willChange: isActive ? 'opacity' : 'auto'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Navigation with Arrows and Indicators */}
      <div className=" absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 md:space-x-6 z-10">
        {/* Left Arrow */}
        <button
          onClick={goToPreviousSlide}
          className="p-1.5 sm:p-2 md:p-2.5 lg:p-2 xl:p-2.5 bg-[#2929290D] hover:bg-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-black" />
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
              className={`w-2 sm:w-2.5 md:w-3 lg:w-2.5 xl:w-3 h-2 sm:h-2.5 md:h-3 lg:h-2.5 xl:h-3 rounded-full transition-all duration-200 ${
                index === activeSlide
                  ? 'bg-lime-400 scale-110 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNextSlide}
          className="p-1.5 sm:p-2 md:p-2.5 lg:p-2 xl:p-2.5 bg-[#2929290D] hover:bg-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);