import React from 'react';

const row1 = [
  "WeAct Studio",
  "RunCam",
  "VEGA Processor",
  "Taparia",
  "DWIN",
  "FLIR",
  "Seeed Studio",
  "Waveshare"
];

const row2 = [
  "M5STACK",
  "PIMORONI",
  "Kamoer",
  "Arducam",
  "Realtek",
  "WOER",
  "SparkFun",
  "Adafruit"
];

const row3 = [
  "ALTERA",
  "HTRC",
  "DOBOT",
  "Extech",
  "NEXTION",
  "SanDisk",
  "STMicroelectronics",
  "Espressif"
];

export default function BrandShowcase() {
  return (
    <section className="px-4 md:px-12 py-10 bg-white overflow-hidden">
      {/* Dynamic Keyframe Animations */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 30s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-350 mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0B1E48]">
          Our Featured Brands
        </h2>
        <button 
          type="button"
          className="border border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-4 marquee-container">
        {/* ROW 1: Slides to the LEFT */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left flex gap-4">
            {[...row1, ...row1, ...row1].map((brand, idx) => (
              <div
                key={`r1-${idx}`}
                className="bg-white border border-gray-200/90 rounded-2xl px-10 py-5 flex items-center justify-center min-w-56 sm:min-w-64 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
              >
                <span className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide group-hover:text-purple-900 select-none">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Slides to the RIGHT */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right flex gap-4">
            {[...row2, ...row2, ...row2].map((brand, idx) => (
              <div
                key={`r2-${idx}`}
                className="bg-white border border-gray-200/90 rounded-2xl px-10 py-5 flex items-center justify-center min-w-56 sm:min-w-64 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
              >
                <span className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide group-hover:text-purple-900 select-none">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: Slides to the LEFT */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left flex gap-4">
            {[...row3, ...row3, ...row3].map((brand, idx) => (
              <div
                key={`r3-${idx}`}
                className="bg-white border border-gray-200/90 rounded-2xl px-10 py-5 flex items-center justify-center min-w-56 sm:min-w-64 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
              >
                <span className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide group-hover:text-purple-900 select-none">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}