import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import PcbServicesPage from './pages/PcbServicesPage';
import PrintingServicesPage from './pages/PrintingServicesPage';
import LaserCuttingPage from './pages/LaserCuttingPage';
import BatteryServicesPage from './pages/BatteryServicesPage';
import BulkEnquiryPage from './pages/BulkEnquiryPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import AtalKitPage from './pages/AtalKitPage';
import LoginPage from './pages/LoginPage';
import CareersPage from './pages/CareersPage';
import ComparePage from './pages/ComparePage';
import SellerFormPage from './pages/SellerFormPage';
import CheckoutPage from './pages/CheckoutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} />}
      
      {/* Seller Application Route */}
      {currentPage === 'seller-form' && <SellerFormPage onNavigate={handleNavigate} />}

      {/* Services Pages */}
      {currentPage === 'pcb-manufacturing' && <PcbServicesPage onNavigate={handleNavigate} />}
      {currentPage === '3d-printing' && <PrintingServicesPage onNavigate={handleNavigate} />}
      {currentPage === 'laser-cutting' && <LaserCuttingPage onNavigate={handleNavigate} />}
      {currentPage === 'custom-battery' && <BatteryServicesPage onNavigate={handleNavigate} />}

      {/* Static Information & Form Pages */}
      {currentPage === 'bulk-enquiry' && <BulkEnquiryPage onNavigate={handleNavigate} />}
      {currentPage === 'new-arrivals' && <NewArrivalsPage onNavigate={handleNavigate} />}
      {currentPage === 'atl-kits' && <AtalKitPage onNavigate={handleNavigate} />}
      {currentPage === 'careers' && <CareersPage onNavigate={handleNavigate} />}
      {currentPage === 'compare' && <ComparePage onNavigate={handleNavigate} />}
      
      {/* Login Routes */}
      {currentPage === 'bom-tool' && <LoginPage onNavigate={handleNavigate} activeNav="bom-tool" />}
      {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} activeNav="" />}
      {currentPage === 'checkout' && <CheckoutPage onNavigate={handleNavigate} activeNav="" />}
      {/* {currentPage === 'checkout' && <Route path="/checkout" element={<CheckoutPage />} />} */}
    </div>
  );
}