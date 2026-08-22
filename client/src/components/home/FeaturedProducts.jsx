import React from 'react';

const products = [
  { title: "Pro-Range DIY Project Kits", sku: "R266127", price: "939.00", icon: "🧰" },
  { title: "EBYTE ECB31-P4T13SA2ME8...", sku: "R265534", price: "1799.00", icon: "💻" },
  { title: "BWSENSING MSK227S RS48...", sku: "R265120", price: "309.00", icon: "🔌" },
  { title: "BWSENSING LWHD-WM400...", sku: "R265115", price: "515.00", icon: "📦" },
];

export default function FeaturedProducts() {
  return (
    <section className="px-4 md:px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <button className="border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-semibold px-4 py-1.5 rounded-lg">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Promo Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 leading-snug">Welcome to Our Store</h3>
            <p className="text-xs text-gray-500 mt-1">Big Screen in incredibly Slim Designs...</p>
            <button className="mt-4 bg-[#2D0B6B] hover:bg-[#200650] text-white text-xs font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
          <div className="text-center text-5xl mt-4">🔬</div>
        </div>

        {/* Product Cards */}
        {products.map((prod, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative bg-white">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">♡</button>
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center text-4xl mb-3">
              {prod.icon}
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-800 line-clamp-2">{prod.title}</h4>
              <p className="text-[10px] text-gray-400 mt-1">SKU: {prod.sku}</p>
              <div className="text-yellow-400 text-xs mt-1">★★★★★ <span className="text-gray-400 text-[10px]">(0)</span></div>
              <p className="text-sm font-extrabold text-gray-900 mt-2">₹{prod.price} <span className="text-[10px] text-gray-400 font-normal">(Incl. GST)</span></p>
              <button className="w-full mt-3 border border-[#2D0B6B] text-[#2D0B6B] hover:bg-[#2D0B6B] hover:text-white transition-colors text-xs font-bold py-2 rounded flex items-center justify-center gap-1.5">
                Add to Cart 🛍
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}