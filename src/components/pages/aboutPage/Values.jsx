import { 
  Users, 
  ThumbsUp, 
  ShieldCheck, 
  HeartHandshake, 
  Trophy, 
  UserCheck 
} from 'lucide-react';

const values = [
  {
    icon: <Users size={32} />,
    title: 'Customer Commitment',
    desc: 'We develop relationship that make a positive difference in our customers.',
    backTitle: 'Customer First',
    backDesc: 'Building lasting partnerships through exceptional service, understanding unique needs, and delivering solutions that exceed expectations every time.',
  },
  {
    icon: <ThumbsUp size={32} />,
    title: 'Quality',
    desc: 'We provide outstanding products & unsurpassed service that together deliver premium value to our customers.',
    backTitle: 'Excellence Standard',
    backDesc: 'Rigorous quality control, continuous improvement processes, and attention to detail ensure every product meets the highest industry standards.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Integrity',
    desc: 'We upload high standards of integrity all our actions.',
    backTitle: 'Ethical Foundation',
    backDesc: 'Transparency, honesty, and moral principles guide every decision, creating trust and accountability in all our business relationships.',
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Team Work',
    desc: 'We work together, across boundaries of integrity all our actions.',
    backTitle: 'Collaborative Spirit',
    backDesc: 'Cross-functional collaboration, shared goals, and mutual support drive innovation and success across all departments.',
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Respect for people',
    desc: 'We value people encourage their development and reward their performance.',
    backTitle: 'People Excellence',
    backDesc: 'Investing in talent development, recognizing achievements, and creating an inclusive environment where everyone can thrive and grow.',
  },
  {
    icon: <Trophy size={32} />,
    title: 'Will to win',
    desc: 'We exhibit strong will to win in the market place every aspect of our business.',
    backTitle: 'Competitive Edge',
    backDesc: 'Strategic thinking, market leadership, and relentless pursuit of excellence drive us to achieve outstanding results in every endeavor.',
  },
];

export default function Values() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="flex items-start gap-4 mb-12">
          {/* Icon placeholder */}
          <div className="w-12 h-12 bg-[#E3FCA6] rounded-lg flex items-center justify-center mt-1">
            <ShieldCheck className="w-6 h-6 text-[#39302A]" />
          </div>
          <div>
            <h2
              style={{ fontFamily: 'Ubuntu' }}
              className="text-[40px] leading-[48px] font-bold text-[#39302A] animate-fade-in"
            >
              Values
            </h2>
            <p
              style={{ fontFamily: 'Ubuntu', fontWeight: '400' }}
              className="text-[18px] leading-[26px] text-[#606060] mt-2 max-w-xl"
            >
              Our values reflect who we are and what we stand for as a company.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {values.map((item, index) => (
            <div
              key={index}
              className="flip-card animate-slide-up"
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front w-[392px] h-[300px] px-6 py-8 flex flex-col items-center justify-start gap-7 rounded-[12px] cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, rgba(150, 252, 4, 0.17) 100%)',
                    boxShadow: '12px 16px 50px 0px #9A9A9A1F'
                  }}
                >
                  {/* Icon circle */}
                  <div className="w-[52px] h-[52px] text-[#39302A] rounded-full bg-[#E3FCA6] flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: 'DM Sans', fontWeight: '500' }}
                    className="text-[24px] leading-[32px] text-center text-[#39302A]"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{ fontFamily: 'DM Sans', fontWeight: '400' }}
                    className="text-center text-[16px] leading-[24px] text-[#39302A]"
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  className="flip-card-back w-[392px] h-[300px] px-6 py-8 flex flex-col items-center justify-center gap-6 rounded-[12px]"
                  style={{
                    background: '#C2F445',
                    boxShadow: '12px 16px 50px 0px #96FC0440'
                  }}
                >
                  {/* Icon circle */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    {item.icon.type === Users && <Users size={40} className="text-[#39302A]" />}
                    {item.icon.type === ThumbsUp && <ThumbsUp size={40} className="text-[#39302A]" />}
                    {item.icon.type === ShieldCheck && <ShieldCheck size={40} className="text-[#39302A]" />}
                    {item.icon.type === HeartHandshake && <HeartHandshake size={40} className="text-[#39302A]" />}
                    {item.icon.type === UserCheck && <UserCheck size={40} className="text-[#39302A]" />}
                    {item.icon.type === Trophy && <Trophy size={40} className="text-[#39302A]" />}
                  </div>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: 'DM Sans', fontWeight: '600' }}
                    className="text-[20px] leading-[28px] text-center text-white"
                  >
                    {item.backTitle}
                  </h3>

                  {/* Description */}
                  <p
                    style={{ fontFamily: 'DM Sans', fontWeight: '400' }}
                    className="text-center text-[14px] leading-[22px] text-white px-2"
                  >
                    {item.backDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
          width: 392px;
          height: 300px;
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
    </section>
  );
}