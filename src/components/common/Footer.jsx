import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import pc from '../../assets/footerimage.png'

export default function Footer() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', { firstName, email });
  };

  return (
    <footer className="bg-[#1E1E1E] text-white py-16 px-8 mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content - Contact Us Section with PC Image */}
        <div className="bg-[#262626] rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div>
              <h2 style={{fontFamily:'Inter',fontWeight:'400'}} className="text-4xl font-bold mb-8">Contact Us</h2>
              
              <div className="flex gap-4">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-3 w-fit hover:bg-gray-100 transition-colors">
                  <Phone size={20} />
                  Phone number
                </button>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} />
                  <span style={{fontFamily:'Inter'}}>Email- xyz@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Side - Computer Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={pc}
                alt="Computer Setup" 
                className="w-[809px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Company Info and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left Side - Company Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span style={{fontFamily:'Inter'}} className="text-xl font-bold">UTS</span>
          </div>

          {/* Right Side - Book a Call Form */}
          <div className='bg-[#262626] rounded-xl p-8 w-full max-w-[594px]'>
            <h3 style={{fontFamily:'Inter'}} className="text-lg font-medium mb-6">Book a call</h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
              style={{fontFamily:'Inter'}}
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="lg:w-[184px] flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
              
              <input
              style={{fontFamily:'Inter'}}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-[184px] px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
              
              <button
              style={{fontFamily:'Inter'}}
                onClick={() => console.log('Send clicked:', { firstName, email })}
                className="bg-white text-gray-900 w-[112px] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row  items-center gap-4 text-sm text-[#606060] line-height-18">
            <span style={{fontFamily:'Inter'}}>© 2023 Unique Techno Solutions</span>
            <div className="flex gap-6">
              <a style={{fontFamily:'Inter'}} href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a style={{fontFamily:'Inter'}} href="#" className="hover:text-white transition-colors">Privacy & Cookies policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}