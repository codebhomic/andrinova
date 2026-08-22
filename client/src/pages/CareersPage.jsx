import React, { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const jobListings = [
  {
    id: 1,
    title: "Quality & Assembly Executive (Warehouse)",
    type: "Full Time",
    location: "Pune",
    posted: "2 months ago",
    description: "QUALITY & ASSEMBLY EXECUTIVE (Warehouse) Job Description: We are looking for a Quality & Assembly Executive (Warehouse) who will be responsible for testing, inspecting, and assembling components...",
  },
  {
    id: 2,
    title: "Electronics Project Engineer",
    type: "Full Time",
    location: "Pune",
    posted: "2 days ago",
    description: "Job Description Electronics Project Engineer Job Summary: We are seeking a skilled Electronics Project Engineer to design, prototype, and assemble cutting-edge robotics hardware...",
  },
  {
    id: 3,
    title: "Junior Customer Care Executive",
    type: "Full Time",
    location: "Pune",
    posted: "4 days ago",
    description: "Junior Customer Care Executive Job Summary: We at Andrinova are building a High-Performance team & have a vacancy for a Junior Customer Care Executive to assist our tech maker community...",
  },
  {
    id: 4,
    title: "UAV Systems Engineer (Drone Operations & Integration)",
    type: "Full Time",
    location: "Pune",
    posted: "1 week ago",
    description: "UAV Systems Engineer Job Summary: Responsible for autonomous flight system integration, testing flight controllers, ESC calibrations, and drone telemetry diagnostics...",
  },
  {
    id: 5,
    title: "Electronics Testing Engineer",
    type: "Full Time",
    location: "Pune",
    posted: "3 weeks ago",
    description: "Electronics Testing Engineer Job Summary: Execute validation tests on microcontrollers, sensors, power modules, and battery management boards ensuring zero defect delivery...",
  },
  {
    id: 6,
    title: "Sales Executive – Expo & Lead Conversion",
    type: "Full Time",
    location: "Pune",
    posted: "1 month ago",
    description: "Sales Executive Job Summary: Engage with B2B engineering institutions, manage technical exhibition booths, and drive conversion pipelines for bulk component supplies...",
  }
];

export default function CareersPage({ onNavigate }) {
  const [searchJob, setSearchJob] = useState('');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col justify-between">
      <div>
        <TopBar />
        <Header />
        <Navbar activePage="careers" onNavigate={onNavigate} />

        <main className="max-w-350 mx-auto px-4 md:px-12 py-6">
          {/* 1. BREADCRUMB */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-purple-700 cursor-pointer">
              Home
            </button>
            <span>→</span>
            <span className="text-purple-950 font-bold">Careers</span>
          </div>

          {/* 2. HEADER INTRO SECTION */}
          <section className="mb-12">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Whats there in Andrinova for you ???
            </h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Well this ...
            </h2>

            <div className="space-y-4 text-xs md:text-[13px] text-gray-700 leading-relaxed font-normal">
              <p>
                Many roles in other Organizations make you stuck in a particular department such as Warehousing or Logistics or Procurement without any chance to properly understand or learn how the other departments work & interlink with each other. We have no such red tapes. You are free to interact & understand how every department functions. Everyone is there to help you. All you have to do is ask respectfully. Plus, <strong className="font-bold text-gray-900">its crazy fun & interesting!</strong> You get to see the impact of your work directly in the company's performance.
              </p>
              <p>
                <strong className="font-bold text-gray-900">We follow the OKR(Objective and Key Results) methodology religiously.</strong> It may happen that one of the company's OKR is directly connected to your own! It's exhilarating as well as nerve-racking! You are handed over responsibility straight away.
              </p>
              <p>
                <strong className="font-bold text-gray-900">Freedom to try & fail.</strong> If you have an idea which you want to try out, you've got complete freedom to pitch it with your teammates/Category Lead or Manager & convince them why it is worth trying! Your ideas & plans will be heard, pondered over & collectively analysed before approving or rejecting it (with a valid & just explanation of course!)
              </p>
              <p>
                <strong className="font-bold text-gray-900">Work with a young & energetic team.</strong> Progression is based solely on merit & performance. No orthodox or rigid rules will limit your growth.
              </p>
            </div>
          </section>

          {/* 3. SEARCH BAR SECTION */}
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-4 border-t border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Wish to be a part of our team?
            </h3>

            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 w-full md:w-auto"
            >
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden px-3 py-2 w-full md:w-80 bg-white focus-within:border-purple-800 focus-within:ring-1 focus-within:ring-purple-800">
                <svg className="w-4 h-4 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  value={searchJob}
                  onChange={(e) => setSearchJob(e.target.value)}
                  placeholder="Search for Jobs..." 
                  className="w-full text-xs text-gray-800 outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              <button 
                type="submit" 
                className="bg-[#2D0B6B] hover:bg-[#200650] text-white px-7 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
          </section>

          {/* 4. 3-COLUMN JOB CARDS GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {jobListings.map((job) => (
              <div 
                key={job.id} 
                className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Image Placeholder & Job Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                      </svg>
                    </div>

                    <h4 className="font-extrabold text-sm text-gray-900 leading-snug">
                      {job.title}
                    </h4>
                  </div>

                  {/* Metadata Tags */}
                  <div className="space-y-2 mb-4 text-xs text-gray-700 font-medium">
                    {/* Full Time */}
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                      <span>{job.type}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>{job.location}</span>
                    </div>

                    {/* Posted Date */}
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  {/* Description Snippet */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-3">
                    {job.description}
                  </p>

                  <button className="text-xs font-semibold text-gray-800 hover:text-purple-900 flex items-center gap-1 cursor-pointer mb-6">
                    <span>Read More</span>
                    <span className="text-[9px]">▼</span>
                  </button>
                </div>

                {/* Quick Apply Action Button */}
                <button className="w-fit bg-[#2D0B6B] hover:bg-[#200650] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
                  Quick Apply
                </button>
              </div>
            ))}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}