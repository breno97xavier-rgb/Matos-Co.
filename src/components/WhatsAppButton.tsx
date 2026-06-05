import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a gentle tooltip helper after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Hide it automatically after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Dynamic greeting chip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-navy-dark text-white text-xs border border-gold/30 rounded-lg px-4 py-2.5 shadow-xl font-medium tracking-wide max-w-[200px]"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-gold uppercase tracking-[0.1em] font-semibold">Atendimento Direto</span>
              <span className="text-zinc-200">Fale com a Matos &amp; Co.</span>
            </div>
            {/* Minimal line decoration */}
            <div className="absolute right-0 top-1/2 -mr-1.5 -mt-1 w-2 h-2 bg-navy-dark border-r border-t border-gold/30 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Decorative Ring pulses */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none"></span>
        
        {/* Custom SVG icon of WhatsApp with consistent look */}
        <svg 
          className="w-7 h-7 fill-current relative z-10" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.442 4.814 1.443 5.433 0 9.85-4.417 9.853-9.853.002-2.634-1.02-5.109-2.877-6.97C15.717 1.912 13.25 1.884 11.45 1.884c-5.432 0-9.85 4.416-9.852 9.853-.001 1.745.503 3.327 1.455 4.8l-.348 1.275 1.293-.339-.333 1.258zM17.47 15.65c-.3-.15-1.782-.88-2.063-.982-.281-.102-.485-.15-.69.15-.205.3-.79.982-.97 1.182-.18.2-.36.223-.66.073-.301-.15-1.27-.47-2.42-1.493-.895-.8-1.5-1.786-1.676-2.086-.177-.3-.02-.462.13-.61.135-.135.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.69-1.66-.945-2.275-.249-.599-.5-.518-.69-.527h-.59c-.201 0-.529.075-.805.375-.276.3-1.054 1.03-1.054 2.515 0 1.485 1.079 2.919 1.229 3.119.15.2 2.124 3.243 5.145 4.548.72.311 1.28.497 1.724.638.721.23 1.378.197 1.895.12.579-.086 1.782-.73 2.031-1.433.249-.705.249-1.309.174-1.433-.075-.124-.275-.201-.575-.351z"/>
        </svg>
      </a>
    </div>
  );
}
