import React, { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const latestBrandsList = [
  { id: 1, name: "herelink", type: "text", style: "font-bold text-gray-900 text-lg tracking-tight font-serif" },
  { id: 2, name: "richbeam", type: "text", style: "font-extrabold text-blue-600 text-base lowercase tracking-wide" },
  { id: 3, name: "FOTEK", type: "text", style: "font-black text-red-600 text-lg tracking-wider" },
  { id: 4, name: "SONGLE", type: "badge", badgeBg: "bg-[#203a8f] text-white font-black italic px-4 py-1.5 rounded-sm text-sm" },
  { id: 5, name: "3D INNOVATIONS", type: "icon-text" },
  { id: 6, name: "V=GA PROCESSOR", type: "text", style: "font-black text-[#0066cc] text-sm tracking-wide" },
  { id: 7, name: "LEMON", subtitle: "HIGH QUALITY LIFE BATTERY", type: "lemon" },
  { id: 8, name: "Seeed Studio", type: "text", style: "font-bold text-green-700 text-base" },
  { id: 9, name: "Waveshare", type: "text", style: "font-bold text-blue-800 text-base" },
  { id: 10, name: "Arducam", type: "text", style: "font-extrabold text-orange-600 text-base" }
];

const sampleNewProducts = [
  { id: 1, title: "Arduino UNO R4 WiFi Development Board", price: "₹2,199", oldPrice: "₹2,499", rating: 5, inStock: true, tag: "NEW" },
  { id: 2, title: "Raspberry Pi 5 - 8GB RAM Active Cooler Kit", price: "₹8,499", oldPrice: "₹9,200", rating: 5, inStock: true, tag: "HOT" },
  { id: 3, title: "ESP32-S3 Dual Type-C Development Module", price: "₹650", oldPrice: "₹799", rating: 4, inStock: true, tag: "NEW" },
  { id: 4, title: "Ender 3 V3 SE Auto-Leveling 3D Printer", price: "₹18,999", oldPrice: "₹21,500", rating: 5, inStock: true, tag: "POPULAR" },
  { id: 5, title: "LiPo 4S 14.8V 5200mAh 60C XT60 Battery", price: "₹3,450", oldPrice: "₹3,800", rating: 4, inStock: true, tag: "NEW" },
  { id: 6, title: "BLDC 2207 2450KV Drone Racing Motor", price: "₹1,299", oldPrice: "₹1,499", rating: 5, inStock: true, tag: "NEW" },
  { id: 7, title: "High Precision Time-of-Flight LiDAR Sensor", price: "₹1,850", oldPrice: "₹2,100", rating: 4, inStock: true, tag: "NEW" },
  { id: 8, title: "Dual Channel Motor Driver 20A 6V-30V", price: "₹899", oldPrice: "₹1,050", rating: 5, inStock: true, tag: "NEW" }
];

export default function NewArrivalsPage({ onNavigate }) {
  const [selectedSort, setSelectedSort] = useState('latest');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-brands-rtl {
          display: flex;
          width: max-content;
          animation: scrollRightToLeft 25s linear infinite;
        }
        .brands-marquee-container:hover .animate-brands-rtl {
          animation-play-state: paused;
        }
      `}</style>

      <div>
        <TopBar />
        <Header onNavigate={onNavigate} />
        <Navbar activePage="new-arrivals" onNavigate={onNavigate} />

        <main className="max-w-350 mx-auto px-4 md:px-12 py-6">
          {/* 1. Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-6">
            <button 
              type="button"
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:text-purple-700 cursor-pointer"
            >
              Home
            </button>
            <span>→</span>
            <button 
              type="button"
              onClick={() => onNavigate && onNavigate('shop')} 
              className="hover:text-purple-700 cursor-pointer"
            >
              Shop
            </button>
            <span>→</span>
            <span className="text-purple-950 font-bold">Latest Products</span>
          </div>

          {/* 2. Latest Brands Section (Moving Right-To-Left) */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-black text-[#0B1E48] mb-4">
              Latest Brands
            </h2>

            <div className="border border-gray-200/90 bg-white rounded-2xl p-5 sm:p-6 overflow-hidden shadow-2xs brands-marquee-container">
              <div className="animate-brands-rtl flex items-center gap-12 sm:gap-16">
                {[...latestBrandsList, ...latestBrandsList, ...latestBrandsList].map((brand, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity select-none"
                  >
                    {brand.type === 'text' && (
                      <span className={brand.style}>{brand.name}</span>
                    )}

                    {brand.type === 'badge' && (
                      <span className={brand.badgeBg}>{brand.name}</span>
                    )}

                    {brand.type === 'icon-text' && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-500 font-bold text-base">▶</span>
                        <div className="flex flex-col leading-none">
                          <span className="font-black text-blue-500 text-[10px]">3D</span>
                          <span className="font-bold text-gray-700 text-[9px] uppercase tracking-tighter">INNOVATIONS</span>
                        </div>
                      </div>
                    )}

                    {brand.type === 'lemon' && (
                      <div className="flex flex-col items-center leading-tight">
                        <div className="flex items-center gap-0.5">
                          <span className="font-black text-amber-500 text-base tracking-wider">LEM</span>
                          <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block mx-0.5"></span>
                          <span className="font-black text-amber-500 text-base tracking-wider">N</span>
                        </div>
                        <span className="text-[7px] text-gray-500 font-bold uppercase tracking-tight">
                          {brand.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Filter & Sort Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <h3 className="text-lg md:text-xl font-black text-gray-900">
              New Arrivals <span className="text-xs text-gray-500 font-normal">(Showing 1–8 of 420 items)</span>
            </h3>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 font-medium">Sort by:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 bg-white outline-none cursor-pointer"
              >
                <option value="latest">Sort by latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>

          {/* 4. Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
            {sampleNewProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200/90 rounded-2xl p-4 bg-white hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                {/* Product Image Placeholder */}
                <div className="relative bg-gray-50 rounded-xl h-44 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-5xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <div className="text-amber-400 text-xs mb-1">
                    {'★'.repeat(product.rating)}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-purple-900 transition-colors line-clamp-2 mb-2">
                    {product.title}
                  </h4>
                </div>

                {/* Price & Add to Cart */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-sm font-black text-[#2D0B6B]">{product.price}</span>
                    <span className="text-[11px] text-gray-400 line-through ml-1.5">{product.oldPrice}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('login')}
                    className="bg-[#2D0B6B] hover:bg-[#1f074a] text-white p-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                    title="Add to Cart"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </button>
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