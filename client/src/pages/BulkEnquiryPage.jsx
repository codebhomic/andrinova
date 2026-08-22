import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function BulkEnquiryPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header />
        <Navbar activePage="bulk-enquiry" onNavigate={onNavigate} />

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
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Bulk Enquiry</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-purple-700 cursor-pointer"
              >
                Home
              </button>
              <span>→</span>
              <span className="text-purple-950 font-semibold">Bulk Enquiry</span>
            </div>
          </div>
        </div>

        {/* 2. HERO: BUSINESS TO BUSINESS */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E48]">
                Business to Business
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-lg">
                We are fast growing electronics distribution company in PAN INDIA with operational capability and excellent after sales services. We have quality brands with wide product selection to choose from.
              </p>
              <button className="bg-[#2D0B6B] hover:bg-[#200650] text-white px-8 py-3 text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-sm">
                Click here
              </button>
            </div>

            {/* Right Arch Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 sm:w-80 md:w-96 h-80 sm:h-96 rounded-t-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg relative flex items-center justify-center">
                <div className="w-full h-full bg-linear-to-br from-slate-200 via-slate-100 to-indigo-100 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-300 flex items-center justify-center text-4xl mb-3">
                    👥
                  </div>
                  <span className="font-bold text-sm text-gray-800">B2B Corporate Desk</span>
                  <span className="text-[11px] text-gray-500 mt-1">Dedicated Account Managers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE US (6 FEATURE CARDS) */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-10">
          <h2 className="text-2xl font-extrabold text-[#0B1E48] mb-8">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1: Certified Specialist */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 flex items-center justify-center relative">
                <svg className="w-20 h-20 text-slate-700" viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="16" fill="#F4C29E"/>
                  <path d="M50 16c-10 0-14 6-14 12 0 4 2 8 2 8s4-2 12-2 12 2 12 2 2-4 2-8c0-6-4-12-14-12z" fill="#2D3748"/>
                  <path d="M30 75c0-12 9-18 20-18s20 6 20 18v5H30v-5z" fill="#4B6CB7"/>
                  <path d="M50 57l-4 12 4 4 4-4-4-12z" fill="#E2E8F0"/>
                </svg>
                <div className="absolute right-0 bottom-2 bg-amber-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-black shadow-sm">
                  ★
                </div>
              </div>
            </div>

            {/* Card 2: Quality Seal */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 flex items-center justify-center relative">
                <div className="w-18 h-18 bg-amber-400 rounded-full flex items-center justify-center shadow-inner relative">
                  <div className="w-14 h-14 bg-amber-300 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white stroke-current" fill="none" strokeWidth="3.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-1 w-6 h-6 bg-red-500 rotate-45 -z-10"></div>
              </div>
            </div>

            {/* Card 3: Dedicated Support Team */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-end justify-center -space-x-3">
                <div className="w-14 h-18 bg-slate-400 rounded-full opacity-80 flex items-center justify-center text-xs text-white"></div>
                <div className="w-18 h-22 bg-amber-500 rounded-full z-10 flex items-center justify-center text-sm font-bold text-white shadow-md"></div>
                <div className="w-14 h-18 bg-slate-400 rounded-full opacity-80 flex items-center justify-center text-xs text-white"></div>
              </div>
            </div>

            {/* Card 4: Idea & Growth Analytics */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-14 bg-sky-400 rounded-t-xl"></div>
                <span className="text-xl text-gray-400">➔</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">💡</span>
                  <div className="flex items-end gap-1">
                    <span className="w-2.5 h-4 bg-red-400 rounded-xs"></span>
                    <span className="w-2.5 h-7 bg-red-500 rounded-xs"></span>
                    <span className="w-2.5 h-10 bg-red-600 rounded-xs"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Priority Helpdesk Agent */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white text-2xl relative">
                  👨‍💼
                  <span className="absolute -top-1 -right-1 text-xs">🎧</span>
                </div>
                <div className="mt-3 bg-sky-200 text-sky-900 font-extrabold text-[10px] tracking-wider px-3 py-1 rounded-sm uppercase">
                  SUPPORT
                </div>
              </div>
            </div>

            {/* Card 6: Bulk Logistics & Secure Delivery */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col items-center justify-center min-h-56 shadow-2xs hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="flex items-end gap-1">
                  <span className="text-4xl">📦</span>
                  <span className="text-5xl -ml-2">📦</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] font-bold shadow-xs">
                  ★
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. B2B INDUSTRIES WE SERVE */}
        <section className="max-w-350 mx-auto px-4 md:px-12 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold italic text-gray-900 mb-12 tracking-tight">
            B2B Industries we serve
          </h2>

          {/* Row 1: 3 Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {/* IT/IoT */}
            <div className="bg-[#FDF5EE] rounded-2xl px-6 py-4 flex items-center justify-between gap-6 min-w-64 border border-orange-100/50 shadow-2xs hover:scale-105 transition-transform cursor-pointer">
              <span className="font-extrabold italic text-sm text-gray-900">IT/IoT</span>
              <div className="text-3xl text-orange-500">
                <svg className="w-8 h-8 fill-[#FF6A00]" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17H8v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                </svg>
              </div>
            </div>

            {/* Automation */}
            <div className="bg-[#FDF5EE] rounded-2xl px-6 py-4 flex items-center justify-between gap-6 min-w-64 border border-orange-100/50 shadow-2xs hover:scale-105 transition-transform cursor-pointer">
              <span className="font-extrabold italic text-sm text-gray-900">Automation</span>
              <div className="text-3xl text-orange-500">🦾</div>
            </div>

            {/* Medical */}
            <div className="bg-[#FDF5EE] rounded-2xl px-6 py-4 flex items-center justify-between gap-6 min-w-64 border border-orange-100/50 shadow-2xs hover:scale-105 transition-transform cursor-pointer">
              <span className="font-extrabold italic text-sm text-gray-900">Medical</span>
              <div className="w-8 h-8 rounded-full border-2 border-[#FF6A00] flex items-center justify-center text-[#FF6A00] font-black text-xl">
                +
              </div>
            </div>
          </div>

          {/* Row 2: 2 Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Renewable Energy */}
            <div className="bg-[#FDF5EE] rounded-2xl px-6 py-4 flex items-center justify-between gap-6 min-w-64 border border-orange-100/50 shadow-2xs hover:scale-105 transition-transform cursor-pointer">
              <span className="font-extrabold italic text-sm text-gray-900 text-left leading-tight">
                Renewable<br/>Energy
              </span>
              <div className="text-3xl text-orange-500">
                <svg className="w-8 h-8 fill-[#FF6A00]" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 7a5 5 0 00-5 5c0 1.95 1.13 3.63 2.78 4.46l-1.5 2.6A8.003 8.003 0 014 12c0-4.41 3.59-8 8-8v3zm1 10.95v-3.03c-1.39-.2-2.61-.91-3.48-1.93l-2.6 1.53c1.47 1.83 3.64 3.09 6.08 3.43zM12 22l4-7h-8l4 7z"/>
                </svg>
              </div>
            </div>

            {/* Drone Manufacturer */}
            <div className="bg-[#FDF5EE] rounded-2xl px-6 py-4 flex items-center justify-between gap-6 min-w-64 border border-orange-100/50 shadow-2xs hover:scale-105 transition-transform cursor-pointer">
              <span className="font-extrabold italic text-sm text-gray-900 text-left leading-tight">
                Drone<br/>Manufacturer
              </span>
              <div className="text-3xl text-orange-500">🚁</div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}