import React from 'react';

export default function RatingStars({ rating = 5, reviewCount = 0, showCount = true }) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <div className="text-yellow-400">
        {'★'.repeat(rating)}{'☆'.repeat(Math.max(0, 5 - rating))}
      </div>
      {showCount && (
        <span className="text-gray-400 text-[10px]">({reviewCount})</span>
      )}
    </div>
  );
}