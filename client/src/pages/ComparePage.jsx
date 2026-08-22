import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ComparePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header onNavigate={onNavigate} />
        <Navbar activePage="shop" onNavigate={onNavigate} />

        <main className="max-w-350 mx-auto px-4 md:px-12 py-6">
          {/* 1. BREADCRUMBS */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-6">
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:text-purple-700 cursor-pointer"
            >
              Home
            </button>
            <span>→</span>
            <button 
              onClick={() => onNavigate && onNavigate('shop')} 
              className="hover:text-purple-700 cursor-pointer"
            >
              Shop
            </button>
            <span>→</span>
            <span className="text-purple-950 font-bold">Product Comparision</span>
          </div>

          {/* 2. EXACT COMPARISON BOX */}
          <div className="w-full border border-gray-200 rounded-lg p-20 md:p-28 flex items-center justify-center bg-white shadow-2xs my-6">
            <p className="text-sm md:text-base font-normal text-gray-800 text-center tracking-tight">
              No items in your Comparison.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}