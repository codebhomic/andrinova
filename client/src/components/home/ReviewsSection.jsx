import React, { useState, useEffect } from 'react';

const reviewsData = [
  {
    id: 1,
    initial: "N",
    bg: "bg-[#00897B]",
    name: "Niraj Kumar Maurya",
    date: "2026-04-21",
    rating: 5,
    text: "Better service."
  },
  {
    id: 2,
    initial: "S",
    bg: "bg-[#F4511E]",
    name: "Small Idea",
    date: "2026-04-20",
    rating: 5,
    text: "Best place for all hobbyist"
  },
  {
    id: 3,
    initial: "H",
    bg: "bg-[#E65100]",
    name: "Harkeet Singh",
    date: "2026-04-19",
    rating: 5,
    text: "Very good person and polite"
  },
  {
    id: 4,
    initial: "A",
    bg: "bg-[#1E88E5]",
    name: "Amit Sharma",
    date: "2026-04-18",
    rating: 5,
    text: "Super fast delivery and authentic components."
  },
  {
    id: 5,
    initial: "R",
    bg: "bg-[#6A1B9A]",
    name: "Rahul Verma",
    date: "2026-04-17",
    rating: 5,
    text: "Great quality PCB and prompt technical support."
  },
  {
    id: 6,
    initial: "P",
    bg: "bg-[#00ACC1]",
    name: "Pooja Patel",
    date: "2026-04-15",
    rating: 5,
    text: "Excellent packaging, all sensors worked flawlessly."
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive max index calculation (shifts 1 item at a time)
  const maxIndex = reviewsData.length - 1;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="px-4 md:px-12 py-8 bg-white">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center gap-1.5">
        <span className="text-blue-600">Google</span> 
        <span>Backed Trust in Every Order</span>
      </h2>

      <div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 1. Fixed Left Google Overview Box */}
        <div className="border border-blue-100 bg-[#F4F8FE] rounded-2xl p-6 flex flex-col justify-between shrink-0 shadow-2xs">
          <div>
            <span className="text-2xl font-black text-blue-600 tracking-tight">Google</span>
            <p className="text-xs font-bold text-gray-800 mt-2">Customer Reviews</p>
          </div>
          <div className="text-amber-400 text-lg tracking-widest mt-6">
            ★★★★★
          </div>
        </div>

        {/* 2. Sliding Reviews Carousel */}
        <div className="lg:col-span-3 overflow-hidden relative rounded-2xl">
          <div 
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 34}%)` 
            }}
          >
            {reviewsData.concat(reviewsData).map((rev, idx) => (
              <div 
                key={idx}
                className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] shrink-0 border border-gray-200 bg-white rounded-2xl p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between min-h-36"
              >
                {/* Header: Avatar, Name & Date */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${rev.bg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}>
                    {rev.initial}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-extrabold text-xs text-gray-900 truncate">
                      {rev.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {rev.date}
                    </p>
                  </div>
                </div>

                {/* Rating Stars with checkmark */}
                <div className="flex items-center gap-1.5 my-2">
                  <div className="text-amber-400 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-purple-700 text-xs font-bold">✔</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-700 font-normal leading-relaxed line-clamp-2">
                  {rev.text}
                </p>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Review"
            className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Review"
            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}