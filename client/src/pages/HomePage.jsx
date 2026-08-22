import React from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import CategoriesGrid from '../components/home/CategoriesGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CustomServices from '../components/home/CustomServices';
import ReviewsSection from '../components/home/ReviewsSection';
import PromoBanners from '../components/home/PromoBanners';
import VideoSection from '../components/home/VideoSection';
import BlogSection from '../components/home/BlogSection';
import BrandShowcase from '../components/home/BrandShowcase';
import Footer from '../components/layout/Footer';

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <TopBar />
      <Header onNavigate={onNavigate} />
      <Navbar activePage="home" onNavigate={onNavigate} />
      
      {/* CRITICAL: onNavigate must be passed here so the buttons work */}
      <HeroSection onNavigate={onNavigate} />
      <CategoriesGrid onNavigate={onNavigate} />
      <FeaturedProducts onNavigate={onNavigate} />
      <CustomServices onNavigate={onNavigate} />
      
      <ReviewsSection />
      <PromoBanners />
      <VideoSection />
      <BlogSection />
      <BrandShowcase />
      <Footer />
    </div>
  );
}