import React, { useState, useEffect } from 'react';

const bannerSlides = [
  {
    id: 1,
    image: "https://robu.in/_next/image/?url=https%3A%2F%2Frobu-prod-media.s3.ap-south-1.amazonaws.com%2Ftheme%2F16%2Fb1Y4QfabM9wY6d6rGuulvh33jcCrq8LrroFyWr1M.webp&w=1920&q=75",
    alt: "Featured Banner 1",
    target: "shop"
  },
  {
    id: 2,
    image: "https://robu.in/_next/image/?url=https%3A%2F%2Frobu-prod-media.s3.ap-south-1.amazonaws.com%2Ftheme%2F16%2FiwKr8PucqQv18bbgVPs2Pq56jydYwpR2JIZ0eQ3q.webp&w=1920&q=75",
    alt: "Featured Banner 2",
    target: "shop"
  },
  {
    id: 3,
    image: "https://robu.in/_next/image/?url=https%3A%2F%2Frobu-prod-media.s3.ap-south-1.amazonaws.com%2Ftheme%2F16%2FUdISifDhL4gBxBQZwerXrMX5MiDOArif4z8EOtlH.webp&w=1920&q=75",
    alt: "Featured Banner 3",
    target: "shop"
  }
];

export default function HeroSection({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const quickServices = [
    { id: "pcb-manufacturing", title: "PCB Manufacturing", icon: "🟩", bg: "bg-red-50/70 border-red-100" },
    { id: "3d-printing", title: "3D Printing", icon: "🖨️", bg: "bg-purple-50/70 border-purple-100" },
    { id: "laser-cutting", title: "Laser Cutting", icon: "⚙️", bg: "bg-teal-50/70 border-teal-100" },
    { id: "custom-battery", title: "Custom Battery Pack", icon: "🔋", bg: "bg-blue-50/70 border-blue-100" },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  return (
    <div className="px-4 md:px-12 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
        
        {/* 1. Left Quick Service Cards */}
        <div className="flex flex-col justify-between gap-2.5">
          {quickServices.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onNavigate && onNavigate(item.id)}
              className={`p-4 rounded-xl border ${item.bg} flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow`}
            >
              <span className="font-bold text-gray-800 text-sm max-w-30">{item.title}</span>
              <span className="text-3xl">{item.icon}</span>
            </div>
          ))}
        </div>

        {/* 2. Uncropped Hero Slider */}
        <div 
          className="lg:col-span-3 border border-slate-200 rounded-2xl overflow-hidden relative group bg-white shadow-2xs flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out w-full h-full items-center"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerSlides.map((slide) => (
              <div 
                key={slide.id}
                onClick={() => onNavigate && onNavigate(slide.target)}
                className="w-full h-full shrink-0 cursor-pointer overflow-hidden flex items-center justify-center bg-white"
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center text-xl font-bold cursor-pointer transition-all opacity-0 group-hover:opacity-100 z-20"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center text-xl font-bold cursor-pointer transition-all opacity-0 group-hover:opacity-100 z-20"
          >
            ›
          </button>

          {/* Slider Dots */}
          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-full">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-6 h-2 bg-[#2D0B6B]' 
                    : 'w-2 h-2 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}