import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        marginTop: '27px',
        paddingLeft: '72px',
        paddingRight: '72px'
      }}
    >
      <div 
        className="bg-white flex justify-between items-center mx-auto"
        style={{
         
          // minWidth: '320px',
          height: '57px',
          borderRadius: '16px',
          border: '1px solid #E8E8E8',
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          paddingRight: '24px',
          opacity: 1,
        }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="w-5 h-5 bg-[#D9D9D9] rounded-full flex items-center justify-center"></div>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '14px',
              letterSpacing: '0%'
            }}
            className="text-gray-800 hidden sm:block"
          >
            Unique Techno Solutions
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {['Home', 'Product', 'Certification', 'About'].map((item, i) => (
            <Link
              key={i}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '14px',
                letterSpacing: '0%'
              }}
              className="text-gray-700 hover:text-blue-600 font-normal transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* Register/Login Buttons */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <button
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              borderRadius: '8px',
              // padding: '16px 24px',
            }}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
            className="text-gray-500"
          >
            or
          </span>
          <button
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
