import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const shopCategories = [
  { id: 1, name: "SmartElex", type: "brand", logoText: "SmarElex", icon: "🤖" },
  { id: 2, name: "SimpliFly", type: "brand", logoText: "Simplifly", icon: "🦋" },
  { id: 3, name: "Electronic Components", type: "category", icon: "💡" },
  { id: 4, name: "3D Printers And Parts", type: "category", icon: "🖨️" },
  { id: 5, name: "Drone Parts", type: "category", icon: "🚁" },
  { id: 6, name: "Development Boards", type: "category", icon: "📟" },
  { id: 7, name: "Batteries, Power Supply And Accessories", type: "category", icon: "🔋" },
  { id: 8, name: "Sensors", type: "category", icon: "📡" },
  { id: 9, name: "Motors | Drivers | Pumps | Actuators", type: "category", icon: "⚙️" },
  { id: 10, name: "IoT And Wireless Modules", type: "category", icon: "📶" },
  { id: 11, name: "Electronic Modules And Displays", type: "category", icon: "🖥️" },
  { id: 12, name: "Mechanical Parts, Measurement & Workbench Tools", type: "category", icon: "🔧" },
  { id: 13, name: "DIY And Maker Kits", type: "category", icon: "🤖" },
  { id: 14, name: "Electric Vehicle Parts", type: "category", icon: "⚡" },
  { id: 15, name: "Prototyping Services", type: "white-card", icon: "⚙️" },
  { id: 16, name: "Refurbished And Partial Working", type: "category", icon: "🔄" },
];

export default function ShopPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <TopBar />
      <Header />
      <Navbar activePage="shop" onNavigate={onNavigate} />

      {/* 1. SHOP TITLE & BREADCRUMB BANNER */}
      <div className="w-full bg-[#EBF3FB] border-b border-gray-200 py-7 px-4 md:px-12 relative overflow-hidden">
        {/* Subtle Tech / Circuit Board SVG Graphic */}
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
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Shop</h1>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-purple-700 cursor-pointer"
            >
              Home
            </button>
            <span>→</span>
            <span className="text-purple-900 font-semibold">Shop</span>
          </div>
        </div>
      </div>

      {/* 2. DESCRIPTION TEXT BLOCK */}
      <div className="max-w-350 mx-auto px-4 md:px-12 py-8 text-xs text-gray-600 leading-relaxed space-y-3">
        <p>
          Shop online. Andrinova is <strong className="text-gray-800 font-semibold">India's Largest Robotics and Engineering Products Online Store</strong>. We offer start-to-end technical support for DIY and Hobbyist and to all of our customers.
        </p>
        <p>
          Buy from some of our highlighted categories including Robot Making Kits, E-bike Accessories, Drone Parts, Electronic Components, 3D Printing Accessories, Batteries, Motors, Microcontrollers(Arduino, Raspberry Pi etc.), Wheels, Robot Chassis, Carbon Fiber Products and more. YOUR IDEAS, OUR PARTS!
        </p>
        <p>
          For bulk orders, don't forget to directly get in touch with our <span className="text-purple-900 font-semibold underline cursor-pointer">Sales Team</span>.
        </p>
      </div>

      {/* 3. 5-COLUMN CATEGORIES & BRANDS GRID */}
      <div className="max-w-350 mx-auto px-4 md:px-12 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {shopCategories.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col items-center">
              
              {/* BRAND CARDS (SmartElex, SimpliFly) */}
              {item.type === 'brand' && (
                <div className="w-full aspect-4/3 bg-slate-50 border border-gray-200 rounded-xl flex flex-col items-center justify-center p-4 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl mb-1">{item.icon}</span>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{item.logoText}</span>
                </div>
              )}

              {/* WHITE PROTOTYPING CARD */}
              {item.type === 'white-card' && (
                <div className="w-full aspect-4/3 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-4 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <div className="text-center">
                    <span className="text-6xl text-gray-800">⚙️</span>
                  </div>
                </div>
              )}

              {/* STANDARD ORANGE CATEGORY CARDS */}
              {item.type === 'category' && (
                <div className="w-full aspect-4/3 bg-[#FF6A00] rounded-xl flex items-center justify-center text-6xl text-white shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <span>{item.icon}</span>
                </div>
              )}

              {/* CATEGORY TITLE */}
              <h3 className="mt-3 text-xs font-bold text-gray-800 text-center leading-snug">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FOOTER WITH NEWSLETTER */}
      <Footer />
    </div>
  );
}