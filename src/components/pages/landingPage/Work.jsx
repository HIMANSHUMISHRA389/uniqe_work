import { ThumbsUp, CreditCard, Truck, Clock, Shield } from "lucide-react";

export default function WeWorkOn() {
  return (
    <div className="max-w-[100%] mx-auto py-8 px-18 bg-gray-50">
      <h1 style={{fontFamily:'Ubuntu'}} className="text-4xl font-bold text-center text-[#39302A] mb-16 animate-fade-in">We work on</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Quality */}
        <div className="flip-card animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front group flex flex-col items-center text-center rounded-2xl p-8 cursor-pointer" 
                 style={{
                   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)', 
                   boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                 }}>
              <div className="w-16 h-16 bg-[#E3FCA6] rounded-full flex items-center justify-center mb-6">
                <ThumbsUp className="w-8 h-8 text-[#39302A]" />
              </div>
              <h2 style={{fontFamily:'DM Sans'}} className="text-2xl font-semibold text-[#39302A] mb-4">Quality</h2>
              <p style={{fontFamily:'DM Sans'}} className="text-[#39302A] leading-relaxed px-4">
                Delivering top-tier hardware products built on precision and reliability.
              </p>
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center text-center rounded-2xl p-8"
                 style={{
                   background: '#C2F445',
                   boxShadow: '12px 16px 50px 0px #96FC0440'
                 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <ThumbsUp className="w-10 h-10 text-[#39302A]" />
              </div>
              <h3 style={{fontFamily:'DM Sans'}} className="text-xl font-bold text-white mb-4">Premium Standards</h3>
              <p style={{fontFamily:'DM Sans'}} className="text-white leading-relaxed px-2">
                ISO certified processes, rigorous testing, and continuous improvement ensure every product exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Cost */}
        <div className="flip-card animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front group flex flex-col items-center text-center rounded-2xl p-8 cursor-pointer" 
                 style={{
                   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)', 
                   boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                 }}>
              <div className="w-16 h-16 bg-[#E3FCA6] rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-[#39302A]" />
              </div>
              <h2 style={{fontFamily:'DM Sans'}} className="text-2xl font-semibold text-[#39302A] mb-4">Cost</h2>
              <p style={{fontFamily:'DM Sans'}} className="text-[#39302A] leading-relaxed px-4">
                Competitively priced solutions offering exceptional value without sacrificing standards.
              </p>
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center text-center rounded-2xl p-8"
                 style={{
                   background: '#C2F445',
                   boxShadow: '12px 16px 50px 0px #96FC0440'
                 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-10 h-10 text-[#39302A]" />
              </div>
              <h3 style={{fontFamily:'DM Sans'}} className="text-xl font-bold text-white mb-4">Smart Pricing</h3>
              <p style={{fontFamily:'DM Sans'}} className="text-white leading-relaxed px-2">
                Strategic partnerships and efficient operations allow us to provide premium hardware at competitive rates.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="flip-card animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front group flex flex-col items-center text-center rounded-2xl p-8 cursor-pointer" 
                 style={{
                   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)', 
                   boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                 }}>
              <div className="w-16 h-16 bg-[#E3FCA6] rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-[#39302A]" />
              </div>
              <h2 style={{fontFamily:'DM Sans'}} className="text-2xl font-semibold text-[#39302A] mb-4">Delivery</h2>
              <p style={{fontFamily:'DM Sans'}} className="text-[#39302A] leading-relaxed px-4">
                On-time shipments ensure your projects always stay ahead of schedule.
              </p>
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center text-center rounded-2xl p-8"
                 style={{
                   background: '#C2F445',
                   boxShadow: '12px 16px 50px 0px #96FC0440'
                 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <Truck className="w-10 h-10 text-[#39302A]" />
              </div>
              <h3 style={{fontFamily:'DM Sans'}} className="text-xl font-bold text-white mb-4">Swift Logistics</h3>
              <p style={{fontFamily:'DM Sans'}} className="text-white leading-relaxed px-2">
                Global network with real-time tracking ensures your hardware arrives exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Service */}
        <div className="flip-card animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front group flex flex-col items-center text-center rounded-2xl p-8 cursor-pointer" 
                 style={{
                   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)', 
                   boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                 }}>
              <div className="w-16 h-16 bg-[#E3FCA6] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#39302A]" />
              </div>
              <h2 style={{fontFamily:'DM Sans'}} className="text-2xl font-semibold text-[#39302A] mb-4">Service</h2>
              <p style={{fontFamily:'DM Sans'}} className="text-[#39302A] leading-relaxed px-4">
                Dedicated, responsive support tailored to each client's technical needs.
              </p>
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center text-center rounded-2xl p-8"
                 style={{
                   background: '#C2F445',
                   boxShadow: '12px 16px 50px 0px #96FC0440'
                 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <Clock className="w-10 h-10 text-[#39302A]" />
              </div>
              <h3 style={{fontFamily:'DM Sans'}} className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p style={{fontFamily:'DM Sans'}} className="text-white leading-relaxed px-2">
                Expert technical team available around the clock for installation, troubleshooting, and maintenance support.
              </p>
            </div>
          </div>
        </div>

        {/* Morality */}
        <div className="flip-card animate-slide-up" style={{animationDelay: '0.5s'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front group flex flex-col items-center text-center rounded-2xl p-8 cursor-pointer" 
                 style={{
                   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)', 
                   boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                 }}>
              <div className="w-16 h-16 bg-[#E3FCA6] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#39302A]" />
              </div>
              <h2 style={{fontFamily:'DM Sans'}} className="text-2xl font-semibold text-[#39302A] mb-4">Morality</h2>
              <p style={{fontFamily:'DM Sans'}} className="text-[#39302A] leading-relaxed px-4">
                Ethical business practices and integrity guide every partnership and decision.
              </p>
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center text-center rounded-2xl p-8"
                 style={{
                   background: '#C2F445',
                   boxShadow: '12px 16px 50px 0px #96FC0440'
                 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-[#39302A]" />
              </div>
              <h3 style={{fontFamily:'DM Sans'}} className="text-xl font-bold text-white mb-4">Ethical Standards</h3>
              <p style={{fontFamily:'DM Sans'}} className="text-white leading-relaxed px-2">
                Fair trade practices, sustainable sourcing, and transparent operations build trust with every partnership.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Flip Card Styles */
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 320px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}