import React, { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LoginPage({ onNavigate, activeNav = "" }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { emailOrPhone, password });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header onNavigate={onNavigate} />
        <Navbar activePage={activeNav} onNavigate={onNavigate} />

        {/* LOGIN CARD CONTAINER */}
        <main className="max-w-350 mx-auto px-4 py-12 md:py-20 flex items-center justify-center">
          <div className="w-full max-w-lg bg-[#F8F9FC] border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-2xs">
            {/* Title */}
            <h1 className="text-3xl font-black text-[#0B1E48] mb-8 tracking-tight">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email or Mobile No Input */}
              <div className="flex items-center bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5 focus-within:border-[#28066E] focus-within:ring-1 focus-within:ring-[#28066E] transition-all">
                {/* Mail Icon */}
                <div className="text-gray-600 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Email or Mobile No"
                  className="w-full text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400 font-normal"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5 focus-within:border-[#28066E] focus-within:ring-1 focus-within:ring-[#28066E] transition-all">
                {/* Key Icon */}
                <div className="text-gray-600 mr-3 shrink-0">
                  <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="8" cy="8" r="5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 8h8m-4 0v3m3-3v2" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400 font-normal"
                  required
                />
                {/* Toggle Password Visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-700 cursor-pointer pl-2 shrink-0"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end pt-1">
                <a
                  href="#"
                  className="text-xs sm:text-sm font-semibold text-[#0B1E48] hover:text-[#28066E] transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#28066E] hover:bg-[#1f0357] text-white px-10 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer shadow-sm"
                >
                  Login
                </button>
              </div>

              {/* Register Link */}
              <div className="pt-4 text-xs sm:text-sm text-gray-800 font-normal">
                Don't have an account?{' '}
                <a
                  href="#"
                  className="text-[#0B1E48] font-bold hover:underline transition-colors"
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}