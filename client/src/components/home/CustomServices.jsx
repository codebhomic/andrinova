import React from 'react';

const services = [
  { name: "Andrinova Online FDM 3D Printing Service", icon: "🖨️" },
  { name: "Andrinova Non-Metal Laser Cutting Service", icon: "📐" },
  { name: "Andrinova Metal Laser Cutting", icon: "⚡" },
  { name: "Andrinova Online SLA 3D Printing Service", icon: "🧪" },
  { name: "Andrinova PCB Manufacturing Service", icon: "📟" },
  { name: "Andrinova Customized Lithium ion Battery Pack", icon: "🔋" },
];

export default function CustomServices({ onNavigate }) {
  return (
    <section className="px-4 md:px-12 py-8 bg-slate-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Andrinova Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <div 
            key={idx} 
            onClick={() => onNavigate && onNavigate('services')}
            className="bg-white rounded-xl border border-gray-200 p-6 flex justify-between items-center shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="max-w-40">
              <h3 className="font-extrabold text-sm text-gray-900 leading-snug">{srv.name}</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate && onNavigate('services');
                }}
                className="mt-4 bg-[#2D0B6B] hover:bg-[#1f074a] text-white text-xs font-bold py-2 px-4 rounded cursor-pointer"
              >
                Order Now
              </button>
            </div>
            <div className="bg-[#FF6A00] w-24 h-24 rounded-lg flex items-center justify-center text-4xl text-white">
              {srv.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}