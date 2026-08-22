import React, { useState } from 'react';
import logoImg from '../../logo.jpeg';

export default function Footer() {
  const [firstName, setFirstName] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${firstName} (${emailId})`);
    setFirstName('');
    setEmailId('');
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700 font-sans">
      {/* 1. TOP NEWSLETTER BAR */}
      <div className="border-b border-gray-200 py-6 px-4 md:px-12">
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Prominent Large Brand Logo & Newsletter Heading */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img 
              src={logoImg} 
              alt="Andrinova Private Limited" 
              className="h-24 sm:h-28 md:h-32 w-auto object-contain transition-transform hover:scale-102"
            />
            <div className="border-t sm:border-t-0 sm:border-l sm:border-gray-300 pt-3 sm:pt-0 sm:pl-6">
              <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                Subscribe to our Newsletter
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                to get promotional offers & discounts
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full sm:w-48 px-4 py-3 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-700 bg-white placeholder-gray-400"
              required
            />
            <input 
              type="email" 
              placeholder="Email Id" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full sm:w-60 px-4 py-3 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-700 bg-white placeholder-gray-400"
              required
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#2D0B6B] hover:bg-[#200650] text-white px-7 py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* 2. MAIN FOOTER LINKS */}
      <div className="py-12 px-4 md:px-12">
        <div className="max-w-350 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Download App & Contact Details */}
          <div>
            <h4 className="font-extrabold text-sm text-gray-900 mb-4">Download App</h4>
            <div className="space-y-2.5 mb-6">
              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 bg-black text-white px-3.5 py-2 rounded-lg w-fit hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.39 0 .76.15 1.04.43l10.22 10.22L5.54 21.57c-.28.28-.65.43-1.04.43-.83 0-1.5-.67-1.5-1.5zm13.17-6.83l2.88-2.88c.78-.78.78-2.05 0-2.83l-2.88-2.88-2.12 2.12 2.12 6.47z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300 leading-none">GET IT ON</div>
                  <div className="text-xs font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="flex items-center gap-3 bg-black text-white px-3.5 py-2 rounded-lg w-fit hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.7-0.93 2.73.99.08 2.02-.48 2.64-1.23z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300 leading-none">AVAILABLE ON THE</div>
                  <div className="text-xs font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            <div className="text-xs space-y-1">
              <p className="font-semibold text-gray-800">Got Questions?</p>
              <p className="text-gray-500 text-[11px]">Call us between 9:15 AM to 6:15 PM</p>
              <p className="text-gray-500 text-[11px]">Monday–Saturday</p>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-base">📞</span>
                <div>
                  <p className="font-extrabold text-xs text-gray-900">1800 266 6123</p>
                  <p className="font-extrabold text-xs text-gray-900">020 68197600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 1: Information */}
          <div>
            <h4 className="font-extrabold text-sm text-gray-900 mb-4">Information</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-900 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Videos</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 2: My Account */}
          <div>
            <h4 className="font-extrabold text-sm text-gray-900 mb-4">My Account</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-900 transition-colors">Cart</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Checkout</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Payment Options</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-extrabold text-sm text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Andrinova B2B</a></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h4 className="font-extrabold text-sm text-gray-900 mb-4">Policies</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-900 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Macfos Csr</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Shipping & Refund</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">E-Waste Collection</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT & PAYMENT BADGES */}
      <div className="border-t border-gray-100 py-4 px-4 md:px-12 bg-gray-50/50">
        <div className="max-w-350 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© Andrinova Private Limited - All Rights Reserved</p>
          <div className="flex items-center gap-3">
            <span className="bg-white px-2 py-1 border border-gray-200 rounded font-bold text-[10px] text-blue-700">VISA</span>
            <span className="bg-white px-2 py-1 border border-gray-200 rounded font-bold text-[10px] text-orange-600">Mastercard</span>
            <span className="bg-white px-2 py-1 border border-gray-200 rounded font-bold text-[10px] text-blue-500">Amex</span>
            <span className="bg-white px-2 py-1 border border-gray-200 rounded font-bold text-[10px] text-green-700">UPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}