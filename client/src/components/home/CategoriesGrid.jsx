import React from 'react';

const categories = [
  { name: "Development Boards", icon: "📟" },
  { name: "Drone Parts", icon: "🚁" },
  { name: "Batteries, Power Supply And Accessories", icon: "🔋" },
  { name: "3D Printers And Parts", icon: "🖨️" },
  { name: "Sensors", icon: "📡" },
  { name: "Electronic Components", icon: "💡" },
  { name: "Motors | Drivers | Pumps | Actuators", icon: "⚙️" },
  { name: "Electronic Modules And Displays", icon: "🖥️" },
  { name: "IoT And Wireless Modules", icon: "📶" },
  { name: "Mechanical Parts, Measurement & Workbench Tools", icon: "🔧" },
  { name: "DIY And Maker Kits", icon: "🤖" },
  { name: "Electric Vehicle Parts", icon: "⚡" },
];

export default function CategoriesGrid() {
  return (
    <section className="px-4 md:px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
        <button className="border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-semibold px-4 py-1.5 rounded-lg">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="bg-[#FF6A00] rounded-xl aspect-square flex items-center justify-center text-5xl shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span>{cat.icon}</span>
            </div>
            <p className="mt-2.5 text-xs font-bold text-gray-800 text-center leading-snug line-clamp-2">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}