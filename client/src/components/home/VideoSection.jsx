import React from 'react';

const shortVideos = [
  "How to Setup and Use CAN Protocol with MCP2515",
  "PID Tuning for Self-Balancing Robot Explained",
  "How to Use Waveshare Human Micro-Motion mmWave Sensor",
  "Interfacing DHT11 Sensor with STM32 Board",
];

export default function VideoSection() {
  return (
    <section className="px-4 md:px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Short Videos</h2>
        <button className="border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-semibold px-4 py-1.5 rounded-lg">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shortVideos.map((title, idx) => (
          <div key={idx} className="cursor-pointer group">
            <div className="bg-[#E67E22] rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                ▶
              </div>
            </div>
            <h3 className="font-bold text-xs text-gray-800 mt-2 line-clamp-2">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}