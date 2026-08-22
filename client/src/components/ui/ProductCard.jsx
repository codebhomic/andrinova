import React from 'react';
import RatingStars from './RatingStars';

export default function ProductCard({ title, sku, price, icon = "📦", rating = 5, reviewCount = 0 }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative bg-white group">
      <button 
        type="button" 
        aria-label="Add to wishlist" 
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
      >
        ♡
      </button>
      
      <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:scale-105 transition-transform">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-xs text-gray-800 line-clamp-2">{title}</h4>
        <p className="text-[10px] text-gray-400 mt-1">SKU: {sku}</p>
        
        <div className="mt-1">
          <RatingStars rating={rating} reviewCount={reviewCount} />
        </div>

        <p className="text-sm font-extrabold text-gray-900 mt-2">
          ₹{price} <span className="text-[10px] text-gray-400 font-normal">(Incl. GST)</span>
        </p>

        <button 
          type="button" 
          className="w-full mt-3 border border-[#2D0B6B] text-[#2D0B6B] hover:bg-[#2D0B6B] hover:text-white transition-colors text-xs font-bold py-2 rounded flex items-center justify-center gap-1.5"
        >
          Add to Cart 🛍
        </button>
      </div>
    </div>
  );
}