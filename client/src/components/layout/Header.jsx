import React, { useState } from 'react';
import logoImg from '../../logo.jpeg';

export default function Header({ onNavigate }) {
  const [query, setQuery] = useState('');

  const handleNav = (page) => {
    if (typeof onNavigate === 'function') {
      onNavigate(page);
    }
  };

  return (
    <header className="py-2.5 px-3 sm:px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        
        {/* Top Row on Mobile: Logo & Icons */}
        <div className="w-full md:w-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            type="button"
            onClick={() => handleNav('home')} 
            className="flex items-center cursor-pointer bg-transparent border-0 p-0 shrink-0"
          >
            <img 
              src={logoImg} 
              alt="Andrinova Private Limited" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-102"
            />
          </button>

          {/* Action Icons for Mobile Screen */}
          <div className="flex md:hidden items-center gap-4 text-gray-700 text-xs font-medium">
            {/* Compare */}
            <button
              type="button"
              onClick={() => handleNav('login')}
              className="p-1 cursor-pointer hover:text-purple-700 transition-colors"
              title="Compare"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4"/>
              </svg>
            </button>

            {/* Account */}
            <button
              type="button"
              onClick={() => handleNav('login')}
              className="p-1 cursor-pointer hover:text-purple-700 transition-colors"
              title="Account"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={() => handleNav('login')}
              className="p-1 cursor-pointer hover:text-purple-700 transition-colors relative"
              title="Cart"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white rounded-full text-[9px] w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full flex-1 max-w-3xl">
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-700 bg-white shadow-2xs"
          >
            <div className="pl-3.5 text-gray-400">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="servo motor 9g" 
              className="w-full py-2 sm:py-2.5 px-3 text-xs sm:text-sm outline-none text-gray-800 bg-transparent placeholder-gray-400 font-normal"
            />
            <button 
              type="submit"
              className="bg-[#2D0B6B] hover:bg-[#200650] text-white px-5 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Desktop Action Icons */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-gray-700 text-xs font-medium shrink-0">
          <button
            type="button"
            onClick={() => handleNav('login')}
            className="flex items-center gap-1.5 cursor-pointer hover:text-purple-700 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4"/>
            </svg>
            <span>Compare</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('login')}
            className="flex items-center gap-1.5 cursor-pointer hover:text-purple-700 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            <span>Orders</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('login')}
            className="cursor-pointer hover:text-purple-700 transition-colors"
            title="Settings"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => handleNav('login')}
            className="cursor-pointer hover:text-purple-700 transition-colors"
            title="Account"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => handleNav('login')}
            className="cursor-pointer hover:text-purple-700 transition-colors"
            title="Wishlist"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => handleNav('login')}
            className="cursor-pointer hover:text-purple-700 transition-colors relative"
            title="Cart"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}