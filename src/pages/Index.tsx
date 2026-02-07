
import { useEffect } from "react";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import AboutSection from "../components/AboutSection";
import StatisticsSection from "../components/StatisticsSection";
import ContactSection from "../components/ContactSection";
import LocationSection from "../components/LocationSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    // Optimized parallax effect with reduced intensity and disabled on mobile
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.05; // Further reduced intensity
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${rate}px)`;
        htmlElement.style.willChange = 'transform';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      {/* Enhanced Background with lighter transparency */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/5 pointer-events-none"></div>
      
      <Header />
      <main className="relative z-10">
        {/* Lighter parallax background elements */}
        <div className="parallax-bg fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-primary/6 to-primary-glow/3 rounded-full opacity-20 float"></div>
          <div className="absolute top-96 right-20 w-60 h-60 bg-gradient-to-br from-primary-glow/5 to-primary/4 rounded-full opacity-15 float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-52 h-52 bg-gradient-to-br from-primary/5 to-primary-glow/3 rounded-full opacity-12 float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <Hero />
        <ProductCategories />
        <AboutSection />
        <StatisticsSection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
