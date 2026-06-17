import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Cases from './pages/Cases';
import { PageId } from './types';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Automatically update the header's active tab underline indicator based on scroll position
  useEffect(() => {
    const handleScrollActiveState = () => {
      const scrollPosition = window.scrollY + 120; // accounting for sticky header offset plus slight margin

      const zones = [
        { id: 'contact', el: document.getElementById('contact-section') },
        { id: 'cases', el: document.getElementById('cases-section') },
        { id: 'about', el: document.getElementById('about-section') },
        { id: 'services', el: document.getElementById('services-section') },
        { id: 'about', el: document.getElementById('about-block-1') },
        { id: 'home', el: document.getElementById('home-section') },
      ];

      for (const zone of zones) {
        if (zone.el) {
          const top = zone.el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentPage(zone.id as PageId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActiveState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollActiveState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-navy text-white selection:bg-gold/30 selection:text-gold-light antialiased">
      {/* Header element */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main content holding all architectural sections */}
      <main className="flex-grow">
        <div id="home-section" className="w-full">
          <Home setCurrentPage={setCurrentPage} />
        </div>
        <Services />
        <About />
        <Cases />
        <Contact />
      </main>

      {/* Floating fast-access WhatsApp button */}
      <WhatsAppButton />

      {/* LGPD Cookie Consent Banner */}
      <CookieConsent />

      {/* Universal footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
