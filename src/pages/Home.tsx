import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Layout, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import { PageId } from '../types';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";

  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div id="home-page" className="relative w-full overflow-hidden">
      
      {/* COMBINED HERO & SERVICES PREVIEW FOR GEOMETRIC BALANCE DESKTOP SPLIT */}
      <div className="lg:flex lg:flex-row lg:min-h-[90vh] lg:border-b lg:border-white/10 bg-navy">
        
        {/* SECTION 1: HERO (Left 55% Column on Desktop) */}
        <section 
          id="hero-section" 
          className="relative text-white pt-24 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 flex flex-col justify-center lg:w-[55%] lg:border-r lg:border-white/10 shrink-0 select-none"
        >
          {/* Abstract classy graphic backgrounds */}
          <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,160,88,0.03),transparent)] pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-10 relative z-10 flex flex-col items-start text-left">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] md:text-xs font-semibold tracking-[0.18em] text-gold uppercase mb-5"
            >
              ESTRATÉGIA <span className="amp text-gold-light lowercase text-xs">&amp;</span> ESTRUTURA
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white mb-6"
            >
              Seu negócio estruturado e posicionado para crescer<span className="text-gold">.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="font-sans text-xs sm:text-sm md:text-base text-muted-text leading-relaxed mb-8 max-w-md font-light"
            >
              Marketing de performance, conteúdo estratégico e tecnologia para estruturar e fortalecer a presença digital do seu negócio.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                id="hero-primary-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.1em] text-navy bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/15 transform hover:-translate-y-0.5"
              >
                Fale com a gente
              </a>
              <button
                id="hero-secondary-cta"
                onClick={() => handleNav('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.1em] text-gold border border-gold hover:bg-gold/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Conheça os serviços
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS PREVIEW (Right 45% Column on Desktop) */}
        <section 
          id="services-preview-section"
          className="bg-navy-dark text-white pt-16 pb-20 lg:pt-36 lg:pb-24 px-6 md:px-12 flex flex-col justify-center lg:w-[45%] shrink-0"
        >
          <div className="max-w-xl mx-auto lg:mx-0 lg:mr-auto lg:ml-10">
            
            <div className="text-left mb-10">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase mb-2 block">O QUE FAZEMOS</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                Estruturação e Presença Digital
              </h2>
              <div className="w-16 h-[1px] bg-gold opacity-40 mt-3 mb-6"></div>
            </div>

            {/* Grid layout cards with refined geometric aesthetic */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
            >
              
              {/* Card 1: Tráfego Pago */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/[0.03] border border-gold/20 p-5 rounded-lg hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2 tracking-wide">Tráfego Pago (Meta Ads)</h3>
                <p className="font-sans text-[11px] text-muted-text leading-relaxed">
                  Campanhas estruturadas no Instagram e Facebook com foco em atração consciente de clientes qualificados.
                </p>
              </motion.div>

              {/* Card 2: Sites & Landing Pages */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/[0.03] border border-gold/20 p-5 rounded-lg hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Layout className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2 tracking-wide">Sites <span className="amp text-gold-light">&amp;</span> LPs</h3>
                <p className="font-sans text-[11px] text-muted-text leading-relaxed">
                  Páginas profissionais, rápidas e memoráveis, projetadas para passar a máxima credibilidade.
                </p>
              </motion.div>

              {/* Card 3: Conteúdo & Social */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/[0.03] border border-gold/20 p-5 rounded-lg hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2 tracking-wide">Conteúdo <span className="amp text-gold-light">&amp;</span> Redes</h3>
                <p className="font-sans text-[11px] text-muted-text leading-relaxed">
                  Criação e organização de postagens elegantes que traduzem o valor e a autoridade da sua marca.
                </p>
              </motion.div>

              {/* Card 4: Google Meu Negócio & Portfólios */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/[0.03] border border-gold/20 p-5 rounded-lg hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2 tracking-wide">Google Meu Negócio <span className="amp text-gold-light">&amp;</span> Portfólios</h3>
                <p className="font-sans text-[11px] text-muted-text leading-relaxed">
                  Sua empresa localizada e bem posicionada no Google Maps, junto a portfólios digitais para expor seu trabalho.
                </p>
              </motion.div>

            </motion.div>

            {/* CTA Link to all services */}
            <div className="text-left">
              <button
                id="services-all-cta"
                onClick={() => handleNav('services')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors cursor-pointer group"
              >
                <span>Ver todos os serviços</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform text-lg inline-block leading-none">→</span>
              </button>
            </div>

          </div>
        </section>

      </div>

      {/* SECTION 2: QUEM SOMOS (Fundo Creme) */}
      <section 
        id="about-summary-section"
        className="bg-cream text-navy py-24 px-6 md:px-12 relative"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-3">QUEM SOMOS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-4 text-navy">
              Uma agência de marketing de performance, tecnologia e estruturação.
            </h2>
            <div className="w-12 h-[2px] bg-gold mt-2"></div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="font-sans text-sm md:text-base leading-relaxed text-navy/80">
              Nascemos para alavancar, estruturar e fortalecer a presença digital do seu negócio através de anúncios refinados, conteúdo estratégico e tecnologia. Acreditamos que o crescimento de vendas saudável é consequência direta de uma estrutura organizada e de um posicionamento forte no mercado.
            </p>
            <div>
              <button
                id="about-summary-link"
                onClick={() => handleNav('about')}
                className="inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors cursor-pointer"
              >
                <span>Saiba mais sobre nós</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: DIFERENCIAL (Fundo Creme) */}
      <section 
        id="diferencial-section"
        className="bg-cream text-navy py-24 px-6 md:px-12 relative border-t border-gold/15"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
            
            <div className="md:col-span-6">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-3 block">NOSSO DIFERENCIAL</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-navy mb-4 max-w-lg">
                Estrutura sólida para colher novos resultados.
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mt-2"></div>
            </div>

            <div className="md:col-span-6">
              <p className="font-sans text-sm md:text-base leading-relaxed text-navy/80">
                Fugimos do amadorismo. Unimos organização digital, posicionamento de autoridade e tráfego pago de forma consistente. O resultado? Seu negócio se consolida e as vendas crescem naturalmente.
              </p>
            </div>

          </div>

          {/* Elegant Single Card for Clientes Atendidos that links to the Cases page */}
          <div className="pt-8 border-t border-gold/20 flex justify-center">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleNav('cases')}
              className="w-full max-w-2xl bg-[#0A1A2F]/5 border border-gold/30 hover:border-gold p-8 rounded-xl text-center flex flex-col items-center justify-between cursor-pointer transition-all duration-300 shadow-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold/[0.01] group-hover:bg-gold/[0.03] transition-colors pointer-events-none" />
              
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-3 block">Cases <span className="amp">&amp;</span> Portfólio</span>
              
              <h3 className="font-serif text-2xl font-medium text-navy mb-4 tracking-wide">
                Nossos Clientes Atendidos <span className="amp">&amp;</span> Estruturações
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-navy/70 leading-relaxed max-w-lg mb-6 font-light">
                Clique aqui para acessar nossa nova página de portfólio. Lá você poderá visualizar exemplos de criativos de anúncios, de feed e da organização de presença local que desenvolvemos.
              </p>
              
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold group-hover:text-gold-light mt-2 transition-colors">
                <span>Explorar Galeria de Cases</span>
                <span className="transform group-hover:translate-x-1 transition-transform text-base select-none">→</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CTA FINAL (Fundo Azul-Marinho) */}
      <section 
        id="cta-final-section"
        className="bg-navy text-white py-24 px-6 md:px-12 relative overflow-hidden"
      >
        {/* Glow detail */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,88,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase mb-4 font-semibold">FAÇA PARTE DO MÉTODO</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
            Seu negócio com posicionamento de destaque.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-text max-w-lg leading-relaxed mb-10">
            Fale conosco hoje mesmo. Vamos estruturar, organizar e consolidar a presença digital da sua empresa.
          </p>
          
          <a
            id="cta-final-whatsapp-btn"
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
