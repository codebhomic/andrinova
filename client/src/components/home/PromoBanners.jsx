import React from 'react';

export default function PromoBanners() {
  return (
    <section className="px-4 md:px-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white flex justify-between relative overflow-hidden">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Introducing</span>
            <h3 className="text-xl font-bold mt-1">SmarElex</h3>
            <p className="text-xs text-gray-300 mt-1">All band GNSS RTK Breakout - ZED-X20P</p>
            <ul className="text-[11px] text-gray-300 mt-3 space-y-1">
              <li>• Centimeter-Level RTK Accuracy</li>
              <li>• All-Band GNSS Support</li>
              <li>• Global Precision Positioning</li>
              <li>• High-Speed Real-Time Tracking</li>
            </ul>
            <button className="mt-4 bg-white text-gray-900 font-bold text-xs px-4 py-2 rounded uppercase hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="text-7xl flex items-center justify-center">📡</div>
        </div>

        <div className="bg-linear-to-r from-slate-900 to-gray-800 rounded-2xl p-6 text-white flex justify-between relative overflow-hidden">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Introducing</span>
            <h3 className="text-xl font-bold mt-1">ARDUINO Nesso N1</h3>
            <p className="text-xs text-gray-300 mt-1">Intelligence Starts at the Edge</p>
            <ul className="text-[11px] text-gray-300 mt-3 space-y-1">
              <li>• All-in-One IoT Platform</li>
              <li>• Multi-Protocol Wireless Support</li>
              <li>• Ready-to-Use Arduino Device</li>
              <li>• Portable Smart Development Kit</li>
            </ul>
            <button className="mt-4 bg-white text-gray-900 font-bold text-xs px-4 py-2 rounded uppercase hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="text-7xl flex items-center justify-center">⚡</div>
        </div>
      </div>
    </section>
  );
}