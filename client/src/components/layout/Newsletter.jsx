import React from 'react';

export default function Newsletter({ logoSrc = "/assets/images/andrinova-logo.png" }) {
  return (
    <section className="bg-slate-50 border-t border-b border-gray-200 px-4 md:px-12 py-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src={logoSrc} 
            alt="Andrinova" 
            className="h-12 w-auto object-contain"
          />
          <div>
            <h4 className="font-extrabold text-sm text-gray-900">Subscribe to our Newsletter</h4>
            <p className="text-xs text-gray-500">to get promotional offers & discounts</p>
          </div>
        </div>

        <div className="flex flex-1 max-w-xl gap-3">
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-1/2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600"
          />
          <input 
            type="email" 
            placeholder="Email Id" 
            className="w-1/2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600"
          />
          <button className="bg-[#2D0B6B] hover:bg-[#1e074a] text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}