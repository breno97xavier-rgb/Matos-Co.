import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, BarChart3, Eye, ShieldCheck } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import Logo from '../components/Logo';

export default function About() {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";

  return (
    <div id="about-page" className="w-full">
      
      {/* SECTION 1: HERO ABOUT (Fundo Azul-Marinho) */}
      <section id="about-hero" className="bg-navy text-white pt-36 pb-20 px-6 md:px-12 relative">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,160,88,0.03),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <Logo layout="vertical" size="lg" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-5"
          >
            A ESSÊNCIA DA AGÊNCIA
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6"
          >
            Sobre a Matos <span className="amp text-gold-light">&amp;</span> Co.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-sans text-xs sm:text-sm md:text-base text-muted-text max-w-2xl mx-auto leading-relaxed font-light"
          >
            Estrutura e crescimento digital a serviço do seu negócio.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: QUEM SOMOS (Fundo Creme) */}
      <section id="about-block-1" className="bg-cream text-navy py-20 px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-3 block">BIO DA MARCA</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6 text-navy">
            Quem somos
          </h2>
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-navy/80">
            A Matos &amp;Co. é uma agência de marketing de performance, tecnologia e estruturação sedeada em Curitiba, atendendo clientes de todo o Brasil. Nascemos da convicção de que marketing sério se mede em resultado — não em vaidade. Unimos estratégia, estrutura, tráfego pago, conteúdo e tecnologia em um só lugar, para que sua marca e seu negócio cresça de forma consistente e mensurável.
          </p>
        </div>
      </section>

      {/* SECTION 3: COMO TRABALHAMOS (Fundo Azul-Marinho) */}
      <section id="about-block-2" className="bg-navy text-white py-20 px-6 md:px-12 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-light uppercase mb-3 block">NOSSO MÉTODO</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-6">
            Como trabalhamos
          </h2>
          <div className="w-12 h-[2px] bg-gold-light mb-8"></div>
          <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-muted-text">
            Começamos entendendo o seu negócio e o seu mercado. Definimos a estratégia, estruturamos os canais e colocamos as campanhas para rodar. A partir daí, é otimização contínua: medir, testar, ajustar. Você acompanha cada passo com transparência total.
          </p>
        </div>
      </section>

      {/* SECTION 4: VALORES (Fundo Creme, três colunas) */}
      <section id="about-block-3" className="bg-cream text-navy py-20 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-3">CONVICÇÕES</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4 text-navy">
              Nossos Valores
            </h2>
            <SectionDivider lightBg={true} className="mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Valor 1: Resultado */}
            <div className="bg-[#0A1A2F]/5 border border-gold/25 p-8 rounded-lg flex flex-col justify-between hover:border-gold transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">Resultado</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-navy/70 leading-relaxed mt-2 font-light">
                Tudo o que fazemos é medido. Se não gera posicionamento de autoridade e resultados de crescimento, não faz sentido.
              </p>
            </div>

            {/* Valor 2: Transparência */}
            <div className="bg-[#0A1A2F]/5 border border-gold/25 p-8 rounded-lg flex flex-col justify-between hover:border-gold transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">Transparência</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-navy/70 leading-relaxed mt-2 font-light">
                Você acompanha com clareza todo o posicionamento digital e o retorno que os anúncios trazem para o seu negócio.
              </p>
            </div>

            {/* Valor 3: Tecnologia */}
            <div className="bg-[#0A1A2F]/5 border border-gold/25 p-8 rounded-lg flex flex-col justify-between hover:border-gold transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">Tecnologia</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-navy/70 leading-relaxed mt-2 font-light">
                Dominamos a parte técnica que faz a diferença: sites, estruturas e conteúdo.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CTA FINAL (Fundo Azul-Marinho) */}
      <section 
        id="about-cta-final"
        className="bg-navy text-white py-24 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,88,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase mb-4">MÉTODO COMPROVADO</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
            Seu negócio estruturado e posicionado para crescer.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-text max-w-lg leading-relaxed mb-10">
            Fale com a gente e comece a estruturar sua presença digital hoje mesmo.
          </p>
          <a
            id="about-cta-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-navy bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/25 transform hover:-translate-y-0.5"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
