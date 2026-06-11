import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, BarChart3, Eye, ShieldCheck } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import Logo from '../components/Logo';

export default function About() {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";

  return (
    <div id="about-section" className="w-full">
      
      {/* SECTION 3: COMO TRABALHAMOS (Fundo Azul-Marinho) */}
      <section id="about-block-2" className="bg-navy text-white py-24 px-6 md:px-12 relative border-b border-white/5 border-t border-gold/15">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-gold-light uppercase mb-3 block">NOSSO MÉTODO</span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-medium mb-6">
            Como trabalhamos
          </h2>
          <div className="w-12 h-[2px] bg-gold-light mb-8"></div>
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-muted-text/95 font-light">
            Começamos entendendo o seu negócio e o seu mercado. Definimos a estratégia, estruturamos os canais de vendas e colocamos as campanhas publicitárias em execução. A partir daí, é otimização contínua: medir, testar, e calibrar. Você acompanha cada passo com transparência total e dados compreensíveis.
          </p>
        </div>
      </section>

      {/* SECTION 4: VALORES (Fundo Creme, três colunas coladas e cheias) */}
      <section id="about-block-3" className="bg-cream text-navy py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3">CONVICÇÕES</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold mb-4 text-navy">
              Nossos Valores
            </h2>
            <SectionDivider lightBg={true} className="mt-2" />
          </div>
        </div>

        {/* The 3 columns glued together spanning the entire session width */}
        <div className="w-full border-t border-b border-gold/20 grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {/* Valor 1: Resultado */}
          <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gold/20 p-10 md:p-14 min-h-[340px] md:min-h-[400px] flex flex-col justify-between transition-colors duration-300 hover:bg-gold/[0.02]">
            {/* Transparent background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.11] filter grayscale hover:scale-105 transition-transform duration-[2000ms] ease-out pointer-events-none"
              style={{ backgroundImage: `url('https://i.ibb.co/99xsWww2/pexels-rdne-7948055.jpg')` }}
            />
            {/* Subtle visual depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 shadow-sm border border-gold/10">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy tracking-wide mb-4">Resultado</h3>
              <p className="font-sans text-sm sm:text-base text-navy/85 leading-relaxed font-light">
                Tudo o que fazemos é medido. Se não gera posicionamento de autoridade e resultados de crescimento tangíveis, não faz sentido para o negócio.
              </p>
            </div>
            
            {/* Premium decoration bar */}
            <div className="relative z-10 w-8 h-[1px] bg-gold/50 group-hover:w-16 transition-all duration-500 mt-6" />
          </div>

          {/* Valor 2: Transparência */}
          <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gold/20 p-10 md:p-14 min-h-[340px] md:min-h-[400px] flex flex-col justify-between transition-colors duration-300 hover:bg-gold/[0.02]">
            {/* Transparent background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.11] filter grayscale hover:scale-105 transition-transform duration-[2000ms] ease-out pointer-events-none"
              style={{ backgroundImage: `url('https://i.ibb.co/23b9nh5m/pexels-mart-production-7644016.jpg')` }}
            />
            {/* Subtle visual depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 shadow-sm border border-gold/10">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy tracking-wide mb-4">Transparência</h3>
              <p className="font-sans text-sm sm:text-base text-navy/85 leading-relaxed font-light">
                Você acompanha com clareza todo o posicionamento digital e o retorno real que os anúncios de tráfego trazem para o seu negócio.
              </p>
            </div>
            
            {/* Premium decoration bar */}
            <div className="relative z-10 w-8 h-[1px] bg-gold/50 group-hover:w-16 transition-all duration-500 mt-6" />
          </div>

          {/* Valor 3: Tecnologia */}
          <div className="relative group overflow-hidden p-10 md:p-14 min-h-[340px] md:min-h-[400px] flex flex-col justify-between transition-colors duration-300 hover:bg-gold/[0.02]">
            {/* Transparent background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.11] filter grayscale hover:scale-105 transition-transform duration-[2000ms] ease-out pointer-events-none"
              style={{ backgroundImage: `url('https://i.ibb.co/845rT8qJ/pexels-bibekghosh-14553720.jpg')` }}
            />
            {/* Subtle visual depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 shadow-sm border border-gold/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy tracking-wide mb-4">Tecnologia</h3>
              <p className="font-sans text-sm sm:text-base text-navy/85 leading-relaxed font-light">
                Dominamos as ferramentas técnicas avançadas e linguagens que fazem toda a diferença: sites ultra-velozes, estruturas estáveis e conteúdo premium.
              </p>
            </div>
            
            {/* Premium decoration bar */}
            <div className="relative z-10 w-8 h-[1px] bg-gold/50 group-hover:w-16 transition-all duration-500 mt-6" />
          </div>

        </div>
      </section>

    </div>
  );
}
