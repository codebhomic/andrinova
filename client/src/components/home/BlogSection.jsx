import React from 'react';

const blogs = [
  "Arduino Physical AI Challenge India 2026 - Build...",
  "Arduino UNO Q or Raspberry Pi 5: Which one to get in...",
  "SimpliFly SF10 2.4GHz 10-Channel RC Transmitter &...",
  "Arduino Day 2026 – Celebrate Innovation with...",
];

export default function BlogSection() {
  return (
    <section className="px-4 md:px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
        <button className="border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-semibold px-4 py-1.5 rounded-lg">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {blogs.map((title, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 h-36 flex items-center justify-center text-4xl text-white">
              💡
            </div>
            <div className="p-3">
              <h3 className="font-bold text-xs text-gray-800 line-clamp-2">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}