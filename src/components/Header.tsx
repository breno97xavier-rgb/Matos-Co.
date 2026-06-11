import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll listener for design polish
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'cases', label: 'Cases' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    
    // Smoothly scroll to the corresponding section element with offset (preferring about-block-1 for 'Sobre' section as it is at the top)
    const targetId = id === 'about' ? 'about-block-1' : `${id}-section`;
    const sectionElement = document.getElementById(targetId);
    if (sectionElement) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-gold/15'
          : 'bg-gradient-to-b from-navy-dark/85 via-navy-dark/45 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Monograma */}
        <button 
          id="logo-button"
          onClick={() => handleNav('home')} 
          className="focus:outline-none cursor-pointer group"
          aria-label="Matos & Co. Home"
        >
          <Logo className="group-hover:opacity-95 transition-opacity" />
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                    currentPage === item.id
                      ? 'text-gold-light'
                      : scrolled
                        ? 'text-white/90 hover:text-gold-light'
                        : 'text-white hover:text-gold-light [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {item.label}
                </button>
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Golden CTA Button */}
          <a
            id="header-cta-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.1em] text-navy bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 transform hover:-translate-y-0.5"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-4">
          <a
            id="mobile-header-phone-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gold/10 border border-gold/30 text-gold-light"
            aria-label="Falar no WhatsApp"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-gold transition-colors focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-navy-dark border-b border-gold/10 select-none overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-8">
              <ul className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <li key={item.id} className="border-b border-white/5 pb-2">
                    <button
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => handleNav(item.id)}
                      className={`text-[13px] font-semibold uppercase tracking-[0.15em] w-full text-left py-1 cursor-pointer ${
                        currentPage === item.id ? 'text-gold-light font-bold' : 'text-white/90'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <a
                id="mobile-drawer-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-navy bg-gold hover:bg-gold-light transition-colors"
              >
                Fale conosco no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
