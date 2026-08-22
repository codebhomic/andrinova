import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const servicesList = [
  {
    id: 1,
    title: "Andrinova Online SLA 3D Printing Service",
    btnColor: "bg-[#2D0B6B] hover:bg-[#200650]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <rect x="25" y="20" width="50" height="60" rx="4" />
        <line x1="25" y1="65" x2="75" y2="65" />
        <rect x="42" y="32" width="16" height="24" />
        <line x1="50" y1="20" x2="50" y2="32" />
        <circle cx="70" cy="73" r="2" fill="white" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Andrinova Online FDM 3D Printing Service",
    btnColor: "bg-[#FF6A00] hover:bg-[#e05d00]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="3" />
        <line x1="20" y1="70" x2="80" y2="70" />
        <line x1="20" y1="45" x2="80" y2="45" />
        <rect x="46" y="35" width="8" height="10" fill="white" />
        <path d="M42 70 L50 48 L58 70 Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Andrinova Metal Laser Cutting",
    btnColor: "bg-[#2D0B6B] hover:bg-[#200650]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <rect x="25" y="20" width="50" height="12" rx="2" />
        <polygon points="40,32 60,32 52,50 48,50" fill="white" />
        <path d="M50 50 L50 65" strokeDasharray="2 2" strokeWidth="2" />
        <polygon points="20,70 80,70 65,82 35,82" />
        <path d="M45 62 Q50 58 55 62" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Andrinova Customized Lithium ion Battery Pack",
    btnColor: "bg-[#2D0B6B] hover:bg-[#200650]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <path d="M20 25 L35 25 L45 45 L50 45 L50 55" strokeWidth="2" />
        <rect x="48" y="55" width="4" height="6" fill="white" />
        <rect x="22" y="62" width="22" height="18" rx="2" />
        <line x1="33" y1="58" x2="33" y2="62" />
        <path d="M30 71 L36 71 M33 68 L33 74" />
        <rect x="56" y="62" width="22" height="18" rx="2" />
        <line x1="67" y1="58" x2="67" y2="62" />
        <path d="M64 71 L70 71" />
        <line x1="18" y1="84" x2="82" y2="84" />
        <circle cx="28" cy="84" r="3" fill="white" />
        <circle cx="42" cy="84" r="3" fill="white" />
        <circle cx="58" cy="84" r="3" fill="white" />
        <circle cx="72" cy="84" r="3" fill="white" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Andrinova Non-Metal Laser Cutting Service",
    btnColor: "bg-[#2D0B6B] hover:bg-[#200650]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <rect x="44" y="20" width="12" height="24" rx="2" />
        <polygon points="42,44 58,44 52,56 48,56" fill="white" />
        <line x1="50" y1="56" x2="50" y2="68" strokeDasharray="2 2" strokeWidth="2" />
        <polygon points="18,74 82,74 70,86 30,86" />
        <rect x="36" y="74" width="28" height="6" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Andrinova PCB Manufacturing Service",
    btnColor: "bg-[#2D0B6B] hover:bg-[#200650]",
    icon: (
      <svg className="w-20 h-20 stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
        <rect x="15" y="20" width="70" height="60" rx="4" />
        <circle cx="28" cy="35" r="3" fill="white" />
        <path d="M28 35 L45 35 L55 45 L72 45" strokeWidth="2" />
        <circle cx="72" cy="45" r="3" fill="white" />
        <circle cx="28" cy="65" r="3" fill="white" />
        <path d="M28 65 L48 65 L60 55 L72 55" strokeWidth="2" />
        <circle cx="72" cy="55" r="3" fill="white" />
        <rect x="42" y="48" width="8" height="8" rx="1" fill="white" />
      </svg>
    )
  }
];

export default function LaserCuttingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header onNavigate={onNavigate} />
        <Navbar activePage="" onNavigate={onNavigate} />

        {/* 1. TITLE & BREADCRUMB BANNER */}
        <div className="w-full bg-[#EBF3FB] border-b border-gray-200 py-7 px-4 md:px-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" stroke="#2D0B6B">
              <path strokeWidth="1.5" d="M10 50h80l30 30h120l20-20h60m-200 40h70l20 20h90M40 140h100l30-30h110"/>
              <circle cx="90" cy="50" r="4" fill="#2D0B6B"/>
              <circle cx="240" cy="80" r="4" fill="#2D0B6B"/>
              <circle cx="210" cy="120" r="4" fill="#2D0B6B"/>
              <circle cx="270" cy="110" r="4" fill="#2D0B6B"/>
            </svg>
          </div>

          <div className="max-w-350 mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our Services</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
              <button 
                onClick={() => onNavigate && onNavigate('home')} 
                className="hover:text-purple-700 cursor-pointer"
              >
                Home
              </button>
              <span>→</span>
              <span className="text-purple-950 font-semibold">Our Services</span>
            </div>
          </div>
        </div>

        {/* 2. 6 SERVICES CARDS GRID */}
        <main className="max-w-350 mx-auto px-4 md:px-12 py-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv) => (
              <div 
                key={srv.id} 
                className="bg-[#F8F9FB] border border-gray-200/80 rounded-2xl flex justify-between overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-200 min-h-52"
              >
                {/* Left content */}
                <div className="p-6 flex flex-col justify-between flex-1 pr-4">
                  <h3 className="font-extrabold text-base text-gray-900 leading-snug">
                    {srv.title}
                  </h3>

                  <div>
                    <button 
                      onClick={() => onNavigate && onNavigate('login')}
                      className={`${srv.btnColor} text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors cursor-pointer shadow-xs`}
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Right orange artwork container */}
                <div className="bg-[#FF6A00] w-36 sm:w-44 flex items-center justify-center shrink-0">
                  {srv.icon}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}