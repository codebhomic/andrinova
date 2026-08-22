import React, { useState } from 'react';

const categoriesData = [
  {
    id: 'smartelex',
    name: 'SmartElex',
    hasSub: true,
    subItems: ['SmartElex Sensors', 'SmartElex Drivers', 'SmartElex Modules', 'SmartElex Robotics']
  },
  {
    id: 'simplifly',
    name: 'SimpliFly',
    hasSub: true,
    subItems: ['Propellers', 'Flight Controllers', 'Drone Motors', 'Frames & Kits']
  },
  {
    id: 'electronic-components',
    name: 'Electronic Components',
    hasSub: true,
    subItems: ['Resistors & Capacitors', 'Diodes & Transistors', 'Integrated Circuits (ICs)', 'Connectors & Relays']
  },
  {
    id: '3d-printers',
    name: '3D Printers and Parts',
    hasSub: true,
    subItems: ['3D Printers', 'PLA & ABS Filaments', 'Extruders & Hotends', 'Nozzles & Bed Accessories']
  },
  {
    id: 'drone-parts',
    name: 'Drone Parts',
    hasSub: true,
    subItems: ['Drone Motors', 'Electronic Speed Controllers (ESC)', 'Flight Controllers', 'FPV Cameras & Transmitters']
  },
  {
    id: 'dev-boards',
    name: 'Development Boards',
    hasSub: true,
    subItems: ['Arduino Boards', 'Raspberry Pi Boards', 'ESP32 & ESP8266', 'STM32 & Micro:bit']
  },
  {
    id: 'batteries',
    name: 'Batteries, Power Supply and Accessories',
    hasSub: true,
    subItems: ['LiPo Batteries', 'Lithium Ion Cells (18650)', 'BMS Protection Boards', 'Battery Chargers & Adapters']
  },
  {
    id: 'sensors',
    name: 'Sensors',
    hasSub: true,
    subItems: ['Ultrasonic & Distance', 'Temperature & Humidity', 'Motion & PIR', 'Gas & Air Quality', 'Optical & Proximity']
  },
  {
    id: 'motors',
    name: 'Motors | Drivers | Pumps | Actuators',
    hasSub: true,
    subItems: ['DC Motors', 'Motor Drivers', 'Motors Accessories', 'DC Pumps and Accessories', 'Solenoids', 'Linear Actuators', 'DC Cooling Fans']
  },
  {
    id: 'iot',
    name: 'IoT and Wireless Modules',
    hasSub: true,
    subItems: ['Wi-Fi Modules', 'Bluetooth Modules', 'LoRa & RF Modules', 'GPS & GSM / GPRS']
  },
  {
    id: 'modules-displays',
    name: 'Electronic Modules and Displays',
    hasSub: true,
    subItems: ['OLED Displays', 'LCD & TFT Displays', 'Relay Modules', 'Voltage Regulators']
  },
  {
    id: 'mechanical',
    name: 'Mechanical Parts, Measurement Tools',
    hasSub: true,
    subItems: ['Soldering Tools', 'Digital Multimeters', 'Screwdrivers & Pliers', 'Hardware, Nuts & Bolts']
  },
  {
    id: 'diy-kits',
    name: 'DIY and Maker Kits',
    hasSub: true,
    subItems: ['Robotics Starter Kits', 'STEM Educational Kits', 'Arduino Learning Kits']
  },
  {
    id: 'ev-parts',
    name: 'Electric Vehicle Parts',
    hasSub: true,
    subItems: ['BLDC Hub Motors', 'EV Motor Controllers', 'Throttles & Foot Pedals']
  },
  {
    id: 'services',
    name: 'Andrinova Services',
    hasSub: false,
    subItems: []
  }
];

export default function Navbar({ activePage = "home", onNavigate }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  const handleCategoryClick = (catId) => {
    setIsCategoriesOpen(false);
    setActiveCategory(null);
    setMobileMenuOpen(false);
    if (catId === 'services' || catId === 'prototyping') {
      onNavigate && onNavigate('services');
    } else {
      onNavigate && onNavigate('shop');
    }
  };

  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    onNavigate && onNavigate(page);
  };

  return (
    <nav className="border-b border-gray-200 px-3 sm:px-6 md:px-12 relative z-40 bg-white">
      <div className="max-w-350 mx-auto flex items-center justify-between">
        
        {/* Left: Categories & Desktop Navigation */}
        <div className="flex items-center gap-4 lg:gap-6">
          
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-900 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Categories Flyout Menu */}
          <div 
            className="relative hidden lg:block"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => {
              setIsCategoriesOpen(false);
              setActiveCategory(null);
            }}
          >
            <button 
              type="button"
              onClick={() => onNavigate && onNavigate('shop')}
              className="flex items-center gap-3 py-3.5 px-4 bg-gray-50 hover:bg-gray-100 border-r border-gray-200 text-gray-900 font-bold cursor-pointer transition-colors"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-xs tracking-tight">All Categories</span>
              <svg 
                className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-b-md py-1 z-50 text-gray-800">
                <div className="flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-gray-900 border-b border-gray-100 bg-slate-50/50">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                  <span>All Categories</span>
                  <span className="ml-auto text-[10px] text-gray-400">▲</span>
                </div>

                <div className="max-h-[75vh] overflow-y-auto">
                  {categoriesData.map((cat) => (
                    <div
                      key={cat.id}
                      onMouseEnter={() => cat.hasSub ? setActiveCategory(cat) : setActiveCategory(null)}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`flex items-center justify-between px-4 py-2 text-[11px] font-bold cursor-pointer transition-colors ${
                        activeCategory?.id === cat.id ? 'bg-purple-50 text-[#2D0B6B]' : 'text-[#0B1E48] hover:bg-slate-50 hover:text-purple-900'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      {cat.hasSub && <span className="text-[10px] text-gray-400">›</span>}
                    </div>
                  ))}
                </div>

                {activeCategory && activeCategory.hasSub && (
                  <div 
                    className="absolute top-0 left-full ml-0.5 w-60 bg-white border border-gray-200 shadow-2xl rounded-r-md py-2 z-50"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                  >
                    <div className="px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-purple-900 border-b border-gray-100 mb-1">
                      {activeCategory.name}
                    </div>
                    {activeCategory.subItems.map((sub, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCategoryClick(activeCategory.id)}
                        className="flex items-center justify-between px-4 py-2 text-[11px] font-semibold text-gray-700 hover:text-purple-900 hover:bg-purple-50 cursor-pointer"
                      >
                        <span>{sub}</span>
                        <span className="text-[10px] text-gray-400">›</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700 text-xs">
            {/* Home */}
            <button 
              onClick={() => handleNavClick('home')} 
              className={`py-3.5 font-bold cursor-pointer ${activePage === 'home' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}
            >
              Home
            </button>

            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('shop')} 
                className={`py-3.5 font-bold cursor-pointer flex items-center gap-1 ${activePage === 'shop' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}
              >
                Shop 
                <svg className={`w-3 h-3 text-gray-500 transition-transform ${isShopOpen ? 'rotate-180 text-orange-500' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isShopOpen && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-md py-2.5 z-50">
                  <button type="button" onClick={() => handleNavClick('shop')} className="w-full text-left px-5 py-2 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 cursor-pointer">
                    Shop
                  </button>
                  <button type="button" onClick={() => handleNavClick('login')} className="w-full text-left px-5 py-2 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 cursor-pointer">
                    Track your order
                  </button>
                  <button type="button" onClick={() => handleNavClick('shop')} className="w-full text-left px-5 py-2 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 cursor-pointer">
                    Featured Brands
                  </button>
                  <button type="button" onClick={() => handleNavClick('shop')} className="w-full text-left px-5 py-2 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 cursor-pointer">
                    Payment Options
                  </button>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-orange-500 py-3.5 font-bold">Forum</a>
            <button onClick={() => handleNavClick('bulk-enquiry')} className={`py-3.5 font-bold cursor-pointer ${activePage === 'bulk-enquiry' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}>
              Bulk Enquiry
            </button>
            <button onClick={() => handleNavClick('new-arrivals')} className={`py-3.5 font-bold cursor-pointer ${activePage === 'new-arrivals' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}>
              New Arrivals
            </button>
            <button onClick={() => handleNavClick('atl-kits')} className={`py-3.5 font-bold cursor-pointer ${activePage === 'atl-kits' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}>
              ATL Kits Enquiry
            </button>

            {/* Blogs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsBlogsOpen(true)}
              onMouseLeave={() => setIsBlogsOpen(false)}
            >
              <button 
                type="button"
                className={`py-3.5 font-bold cursor-pointer flex items-center gap-1 transition-colors ${
                  isBlogsOpen || activePage === 'blogs' 
                    ? 'text-orange-500 border-b-2 border-orange-500' 
                    : 'hover:text-orange-500'
                }`}
              >
                Blogs 
                <svg 
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isBlogsOpen ? 'rotate-180 text-orange-500' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isBlogsOpen && (
                <div className="absolute top-full left-0 w-44 bg-white border border-gray-100 shadow-xl rounded-md py-2.5 z-50 animate-in fade-in duration-100">
                  <button 
                    type="button"
                    onClick={() => { setIsBlogsOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Blogs
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setIsBlogsOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Tutorials
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setIsBlogsOpen(false); }}
                    className="w-full text-left px-5 py-2.5 text-xs font-bold text-[#0B1E48] hover:text-purple-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Videos
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('bom-tool')} className={`py-3.5 font-bold cursor-pointer uppercase ${activePage === 'bom-tool' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}>
              BOM TOOL
            </button>
            <button onClick={() => handleNavClick('careers')} className={`py-3.5 font-bold cursor-pointer ${activePage === 'careers' ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'}`}>
              Careers
            </button>
          </div>
        </div>

        {/* Sell on Andrinova Button */}
        <button 
          type="button"
          onClick={() => handleNavClick('seller-form')}
          className="bg-[#EBF3FE] hover:bg-[#dbe9fc] text-[#2D0B6B] font-bold text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <svg className="w-3.5 h-3.5 text-[#2D0B6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 4l3 14h12l3-14M10 11v6m4-6v6"/>
          </svg>
          <span>Sell on Andrinova</span>
        </button>
      </div>

      {/* Mobile Accordion Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 py-3 px-2 space-y-2 bg-white text-xs font-semibold">
          <button 
            type="button"
            onClick={() => setMobileCatOpen(!mobileCatOpen)}
            className="w-full flex items-center justify-between p-2.5 rounded bg-gray-50 text-gray-900 font-bold"
          >
            <span>All Categories</span>
            <span>{mobileCatOpen ? '▲' : '▼'}</span>
          </button>

          {mobileCatOpen && (
            <div className="pl-3 space-y-1.5 max-h-60 overflow-y-auto border-l-2 border-purple-800 ml-2">
              {categoriesData.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="py-1.5 text-gray-700 hover:text-purple-800 cursor-pointer"
                >
                  {cat.name}
                </div>
              ))}
            </div>
          )}

          <button onClick={() => handleNavClick('home')} className="w-full text-left p-2 hover:bg-purple-50 rounded">Home</button>
          <button onClick={() => handleNavClick('shop')} className="w-full text-left p-2 hover:bg-purple-50 rounded">Shop</button>
          <button onClick={() => handleNavClick('bulk-enquiry')} className="w-full text-left p-2 hover:bg-purple-50 rounded">Bulk Enquiry</button>
          <button onClick={() => handleNavClick('new-arrivals')} className="w-full text-left p-2 hover:bg-purple-50 rounded">New Arrivals</button>
          <button onClick={() => handleNavClick('atl-kits')} className="w-full text-left p-2 hover:bg-purple-50 rounded">ATL Kits Enquiry</button>
          
          {/* Mobile Blogs Toggle */}
          <button 
            type="button"
            onClick={() => setMobileBlogsOpen(!mobileBlogsOpen)}
            className="w-full flex items-center justify-between p-2 hover:bg-purple-50 rounded"
          >
            <span>Blogs</span>
            <span>{mobileBlogsOpen ? '▲' : '▼'}</span>
          </button>

          {mobileBlogsOpen && (
            <div className="pl-4 space-y-1.5 border-l-2 border-purple-800 ml-2">
              <div onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-purple-800 cursor-pointer">Blogs</div>
              <div onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-purple-800 cursor-pointer">Tutorials</div>
              <div onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-purple-800 cursor-pointer">Videos</div>
            </div>
          )}

          <button onClick={() => handleNavClick('bom-tool')} className="w-full text-left p-2 hover:bg-purple-50 rounded">BOM TOOL</button>
          <button onClick={() => handleNavClick('careers')} className="w-full text-left p-2 hover:bg-purple-50 rounded">Careers</button>
          <button onClick={() => handleNavClick('seller-form')} className="w-full text-left p-2 hover:bg-purple-50 rounded text-purple-900 font-bold">Sell on Andrinova</button>
        </div>
      )}
    </nav>
  );
}