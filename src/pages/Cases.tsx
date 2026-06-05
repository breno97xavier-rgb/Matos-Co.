import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Image, CheckCircle, ArrowRight, Share2 } from 'lucide-react';

export default function Cases() {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Trago%2520os%2520dados%2520de%2520clientes%2520e%2520criativos%2520para%2520o%2520site.";

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
      
      {/* Page Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-3 block">PORTFÓLIO & CASES</span>
        <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
          Clientes Atendidos &amp; Estruturações
        </h1>
        <div className="w-16 h-[1.5px] bg-gold opacity-50 my-4"></div>
        <p className="font-sans text-xs sm:text-sm text-muted-text max-w-xl leading-relaxed font-light">
          Um espaço dedicado para apresentar histórias de crescimento, reestruturações digitais, identidade de criativos e posicionamento local desenvolvidos por nossa agência.
        </p>
      </div>

      {/* Elegant Golden Frame Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0A1A2F]/40 border border-gold/15 p-8 md:p-12 rounded-lg relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[350px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,88,0.04),transparent_65%)] pointer-events-none" />
        
        {/* Abstract visual art lines inside preview */}
        <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-6 relative z-10 animate-pulse">
          <Image className="w-6 h-6 text-gold" />
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-3 tracking-wide relative z-10">
          Galeria de Cases em Preparação
        </h3>
        
        <p className="font-sans text-xs sm:text-sm text-muted-text max-w-md leading-relaxed mb-8 font-light relative z-10">
          Esta nova página está pronta para receber os logos dos clientes, capturas de tela das estruturações, feeds organizados, e posts de criativos em formato de carrossel.
        </p>

        {/* Structure guidelines list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto border-t border-white/5 pt-8 w-full relative z-10">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span className="text-[11px] text-muted-text font-normal">Identidades Visuais &amp; Feeds</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span className="text-[11px] text-muted-text font-normal">Criativos para Meta Ads</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span className="text-[11px] text-muted-text font-normal">Estruturas de Google Meu Negócio</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span className="text-[11px] text-muted-text font-normal">Resultados de Crescimento Digital</span>
          </div>
        </div>

        <div className="mt-10 relative z-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-navy bg-gold hover:bg-gold-light transition-all duration-300"
          >
            <span>Enviar materiais dos clientes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

    </div>
  );
}
