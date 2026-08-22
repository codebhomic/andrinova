import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const whyChooseUsData = [
  {
    id: 1,
    title: "Expertise",
    desc: "With years of experience in DIY and Electronics Industry, we bring unparalleled expertise and knowledge to the table, ensuring the success and sustainability of your ATL Labs.",
    icon: (
      <div className="w-20 h-20 relative flex items-center justify-center">
        <svg className="w-18 h-18 text-slate-700" viewBox="0 0 100 100">
          <circle cx="50" cy="35" r="16" fill="#F4C29E" />
          <path d="M50 16c-10 0-14 6-14 12 0 4 2 8 2 8s4-2 12-2 12 2 12 2 2-4 2-8c0-6-4-12-14-12z" fill="#2D3748" />
          <path d="M30 75c0-12 9-18 20-18s20 6 20 18v5H30v-5z" fill="#4B6CB7" />
          <path d="M50 57l-4 12 4 4 4-4-4-12z" fill="#E2E8F0" />
        </svg>
        <div className="absolute right-0 bottom-1 bg-amber-400 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-black shadow-xs">
          ★
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Quality Assurance",
    desc: "We prioritize quality in everything we do, from sourcing the best-in-class equipment to delivering exceptional customer service, guaranteeing the utmost satisfaction of our clients.",
    icon: (
      <div className="w-20 h-20 relative flex items-center justify-center">
        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-inner relative">
          <div className="w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white stroke-current" fill="none" strokeWidth="3.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-1 w-5 h-5 bg-red-500 rotate-45 -z-10"></div>
      </div>
    )
  },
  {
    id: 3,
    title: "Dedicated B2G Team",
    desc: "Our B2G team offers end-to-end support, addressing government project challenges. We deliver seamless processes and tailored solutions to meet your needs.",
    icon: (
      <div className="flex items-end justify-center -space-x-2.5">
        <div className="w-12 h-16 bg-slate-400 rounded-full opacity-80"></div>
        <div className="w-16 h-20 bg-rose-500 rounded-full z-10 shadow-md"></div>
        <div className="w-12 h-16 bg-slate-400 rounded-full opacity-80"></div>
      </div>
    )
  },
  {
    id: 4,
    title: "Innovation–Driven Approach",
    desc: "At Andrinova we share the vision of fostering a culture of innovation and entrepreneurship among students, driving positive change and impact in society.",
    icon: (
      <div className="flex items-center gap-3">
        <div className="w-8 h-12 bg-sky-400 rounded-t-lg"></div>
        <span className="text-lg text-gray-400">➔</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">💡</span>
          <div className="flex items-end gap-1">
            <span className="w-2 h-3 bg-red-400 rounded-xs"></span>
            <span className="w-2 h-6 bg-red-500 rounded-xs"></span>
            <span className="w-2 h-9 bg-red-600 rounded-xs"></span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Technical Support And After Sales Service",
    desc: "We prioritize quality in everything we do, from sourcing the best-in-class equipment to delivering exceptional customer service, guaranteeing the utmost satisfaction of our clients.",
    icon: (
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white text-2xl relative">
          👨‍💼
          <span className="absolute -top-1 -right-1 text-xs">🎧</span>
        </div>
        <div className="mt-2 bg-sky-200 text-sky-900 font-extrabold text-[9px] tracking-wider px-2.5 py-0.5 rounded-sm uppercase">
          SUPPORT
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Original and Genuine Products",
    desc: "We assure the authenticity and durability of our products through sourcing genuine equipment, ensuring long-term reliability and peace of mind for your investment.",
    icon: (
      <div className="relative">
        <div className="flex items-end gap-1">
          <span className="text-3xl">📦</span>
          <span className="text-4xl -ml-2">📦</span>
        </div>
        <div className="absolute -top-2 -right-2 bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-[9px] font-bold shadow-xs">
          ★
        </div>
      </div>
    )
  }
];

const customerLogos = [
  { name: "IIT Palakkad Technology iHub Foundation", type: "tech", label: "IIT Palakkad\nTechnology iHub Foundation", sub: "Driving automation for energy and safety" },
  { name: "IIT-Bombay", type: "iit", label: "IIT-Bombay" },
  { name: "Indian Institute Of Science", type: "iisc", label: "Indian Institute\nOf Science" },
  { name: "CDAC", type: "cdac", label: "CENTRE FOR DEVELOPMENT OF ADVANCED COMPUTING" },
  { name: "CSIR-CEERI Pilani", type: "ceeri", label: "CSIR-CEERI\nPilani" },
  { name: "GITAM", type: "gitam", label: "GITAM", sub: "(DEEMED TO BE UNIVERSITY)\nVISAKHAPATNAM • HYDERABAD • BENGALURU" },
  { name: "NESAC", type: "nesac", label: "North Eastern Space Applications Centre (NESAC)" },
  { name: "ISRO", type: "isro", label: "Indian Space Research Organisation (ISRO)" },
  { name: "TiHAN IIT HYDERABAD", type: "tihan", label: "TiHAN\nIIT HYDERABAD" }
];

export default function AtalKitPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header />
        <Navbar activePage="atl-kits" onNavigate={onNavigate} />

        {/* 1. HEADER BANNER */}
        <div className="w-full bg-[#EBF3FB] border-b border-gray-200 py-7 px-4 md:px-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" stroke="#2D0B6B">
              <path strokeWidth="1.5" d="M10 50h80l30 30h120l20-20h60m-200 40h70l20 20h90M40 140h100l30-30h110" />
              <circle cx="90" cy="50" r="4" fill="#2D0B6B" />
              <circle cx="240" cy="80" r="4" fill="#2D0B6B" />
              <circle cx="210" cy="120" r="4" fill="#2D0B6B" />
              <circle cx="270" cy="110" r="4" fill="#2D0B6B" />
            </svg>
          </div>

          <div className="max-w-350 mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Atal Tinkering Lab ( ATL )
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-purple-700 cursor-pointer"
              >
                Home
              </button>
              <span>→</span>
              <span className="text-purple-950 font-semibold">Atal Tinkering Lab ( ATL )</span>
            </div>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Andrinova is now Dealing in Atal Tinkering Lab Packages Ensuring Quality and Trust
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                We are excited to announce that Andrinova is now offering comprehensive solutions for Atal Tinkering Labs (ATLs). As a pioneer in Atal Innovation Mission, we are dedicated to fostering innovation and creativity among students through our tailored ATL packages.
              </p>
              <button className="bg-[#2D0B6B] hover:bg-[#200650] text-white px-8 py-3 text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-sm">
                Enquire Now
              </button>
            </div>

            {/* Right Graphic Banner */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative border-2 border-orange-400 rounded-3xl p-3 bg-white max-w-lg w-full shadow-sm">
                <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-orange-50 to-indigo-50 p-6 flex flex-col items-center justify-center min-h-75">
                  <div className="text-6xl mb-4">🤖 🛠️ 🔬</div>
                  <p className="font-extrabold text-sm text-gray-800 text-center">
                    Empowering Next-Gen Innovators
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Hands-on STEM & Robotics Learning Ecosystem
                  </p>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-3 -right-3 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                  <span className="text-orange-500 text-sm">💡</span>
                  <span>CREATIVITY</span>
                </div>
                <div className="absolute -bottom-3 left-6 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                  <span className="text-amber-500 text-sm">⭐</span>
                  <span>INSPIRATION</span>
                </div>
                <div className="absolute -bottom-3 right-6 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                  <span className="text-purple-600 text-sm">📐</span>
                  <span>INVENTION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE US */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsData.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="h-32 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-[#0B1E48] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. OUR CUSTOMERS */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-left">
            Our Customers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center mb-10">
            {customerLogos.map((cust, idx) => (
              <div 
                key={idx} 
                className="w-full h-24 border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-xs transition-shadow bg-slate-50/50"
              >
                <span className="font-black text-xs text-gray-800 tracking-tight whitespace-pre-line text-center">
                  {cust.label}
                </span>
                {cust.sub && (
                  <span className="text-[8px] text-gray-500 font-semibold mt-0.5 whitespace-pre-line text-center">
                    {cust.sub}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="bg-[#2D0B6B] hover:bg-[#200650] text-white px-8 py-2.5 text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer">
            VIEW MORE
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}