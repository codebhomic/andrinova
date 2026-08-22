import React, { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function SellerFormPage({ onNavigate }) {
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    websiteUrl: '',
    address: '',
    businessType: '',
    name: '',
    jobTitle: '',
    phone: '',
    email: '',
    gstAvailable: '',
    category: '',
    productLink: '',
    anythingElse: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
    alert('Seller application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header onNavigate={onNavigate} />
        <Navbar activePage="" onNavigate={onNavigate} />

        {/* 1. HERO TITLE & BREADCRUMB BANNER */}
        <div className="w-full bg-[#EBF3FB] border-b border-gray-200 py-7 px-4 md:px-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" stroke="#2D0B6B">
              <path strokeWidth="1.5" d="M10 50h80l30 30h120l20-20h60m-200 40h70l20 20h90M40 140h100l30-30h110"/>
              <circle cx="90" cy="50" r="4" fill="#2D0B6B"/>
              <circle cx="240" cy="80" r="4" fill="#2D0B6B"/>
              <circle cx="210" cy="120" r="4" fill="#2D0B6B"/>
              <circle cx="270" cy="110" r="4" fill="#2D0B6B"/>
            </svg>
          </div>

          <div className="max-w-350 mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Seller Form</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('home')} 
                className="hover:text-purple-700 cursor-pointer"
              >
                Home
              </button>
              <span>→</span>
              <span className="text-purple-950 font-semibold">Seller Form</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN SELLER FORM CONTAINER */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Seller Form
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Company Name & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Country Based Enterprises<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all cursor-pointer"
                    required
                  >
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Company Website URL */}
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-2">
                  Company Website URL<span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="Company Website URL"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                  required
                />
              </div>

              {/* Row 3: Company Address */}
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-2">
                  Company Address
                </label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Company Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all resize-none"
                />
              </div>

              {/* Row 4: Business Type & Your Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Business Type<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all cursor-pointer"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Distributor / Wholesaler">Distributor / Wholesaler</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Individual Maker / Freelancer">Individual Maker / Freelancer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 5: Job Title & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#2D0B6B] focus-within:border-[#2D0B6B] transition-all">
                    <div className="flex items-center gap-1.5 px-3 py-3 bg-gray-50 border-r border-gray-200 text-xs font-semibold text-gray-700 shrink-0">
                      <span>🇮🇳</span>
                      <span>+91</span>
                      <span className="text-[10px] text-gray-400">▼</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 6: Email & GST Number Available */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    GST Number Available<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gstAvailable"
                    value={formData.gstAvailable}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all cursor-pointer"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Applied / In Process">Applied / In Process</option>
                  </select>
                </div>
              </div>

              {/* Row 7: Product Category & Products Link/Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Product Category<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Product Category"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-2">
                    Products Link/Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleChange}
                    placeholder="Products Link/Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 8: Anything Else */}
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-2">
                  Anything Else<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="anythingElse"
                  rows="4"
                  value={formData.anythingElse}
                  onChange={handleChange}
                  placeholder="Anything Else"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D0B6B] focus:border-[#2D0B6B] transition-all resize-none"
                  required
                />
              </div>

              {/* Row 9: Attachments */}
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-2">
                  Attachments
                </label>
                <label className="border border-dashed border-gray-300 bg-[#FAFAFA] hover:bg-[#F3F4F6] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-3 cursor-pointer transition-colors text-center">
                  <input type="file" multiple className="hidden" />
                  <div className="bg-[#2D0B6B] text-white p-2 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Click or drag files to this area to upload.
                  </span>
                </label>
              </div>

              {/* Row 10: Mock reCAPTCHA */}
              <div className="border border-gray-300 bg-[#F9F9F9] rounded-lg p-3 w-fit flex items-center gap-6 shadow-2xs">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isCaptchaChecked}
                    onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                    className="w-6 h-6 text-[#2D0B6B] rounded border-gray-400 focus:ring-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    I'm not a robot
                  </span>
                </label>

                <div className="flex flex-col items-center justify-center pl-4 border-l border-gray-200">
                  <div className="text-2xl text-blue-500 animate-spin-slow">
                    🔄
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight">reCAPTCHA</span>
                </div>
              </div>

              {/* Row 11: Centered Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#2D0B6B] hover:bg-[#1f074a] text-white px-12 py-3 rounded-lg text-sm font-bold transition-colors cursor-pointer shadow-sm"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}