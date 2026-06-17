import React from 'react';

export default function About() {
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

    </div>
  );
}
