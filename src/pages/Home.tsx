import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Layout, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  BarChart3,
  Eye
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
    const element = document.getElementById(`${id}-section`);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
          className="relative text-white pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 md:px-12 flex flex-col justify-center lg:w-[55%] lg:border-r lg:border-white/10 shrink-0 select-none overflow-hidden"
        >
          {/* Real Background Image on the Hero with low opacity for atmosphere while maintaining premium text contrast */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]" 
            style={{ backgroundImage: `url('https://i.ibb.co/B2wv7nDv/pexels-kindelmedia-7688360.jpg')` }}
          />
          {/* Abstract classy graphic backgrounds */}
          <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,160,88,0.03),transparent)] pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-10 relative z-10 flex flex-col items-start text-left">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm font-semibold tracking-[0.18em] text-gold uppercase mb-5"
            >
              ESTRATÉGIA <span className="amp text-gold-light lowercase text-sm">&amp;</span> ESTRUTURA
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-medium tracking-tight leading-[1.15] text-white mb-6"
            >
              Seu negócio estruturado e posicionado para crescer<span className="text-gold shadow-sm">.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-muted-text/90 leading-relaxed mb-8 max-w-lg font-light"
            >
              Marketing de performance, conteúdo estratégico e tecnologia com leitura ultra-clara para estruturar e fortalecer a presença digital do seu negócio.
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-[0.1em] text-navy bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/15 transform hover:-translate-y-0.5"
              >
                Fale com a gente
              </a>
              <button
                id="hero-secondary-cta"
                onClick={() => handleNav('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-[0.1em] text-gold border border-gold hover:bg-gold/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Conheça os serviços
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: ESTÉTICA IMAGEM DE PRODUÇÃO (Right 45% Column on Desktop - Replaces Services Preview) */}
        <section 
          id="hero-media-showcase"
          className="relative lg:w-[45%] shrink-0 min-h-[450px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10 p-6 md:p-12 flex flex-col justify-end overflow-hidden group select-none"
        >
          {/* Production Background Image with rich zoom transitions */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url('https://i.ibb.co/ZzmLL9jV/pexels-a-darmel-7710218.jpg')` }}
          />
          {/* Multilayered rich dark masterly gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#020b16]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          
          {/* Golden luxury thin border outline frame */}
          <div className="absolute inset-4 md:inset-6 border border-gold/25 pointer-events-none z-10 transition-all duration-500 group-hover:border-gold/45" />

          {/* Floating Premium glassmorphic showcase card */}
          <div className="relative z-20 bg-navy-dark/95 backdrop-blur-md border border-gold/25 p-6 md:p-8 rounded-lg shadow-2xl max-w-sm ml-auto mr-auto lg:mr-0 lg:ml-auto transition-all duration-300 transform group-hover:border-gold/50">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-2 block animate-pulse">
              Presença de Destaque
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3 tracking-wide">
              Estética &amp; Performance
            </h3>
            <div className="w-12 h-[1px] bg-gold opacity-50 mb-3" />
            <p className="font-sans text-sm sm:text-base text-muted-text/95 leading-relaxed font-light mb-4 text-left">
              Uma presença digital bem estruturada atrai os clientes qualificados que seu negócio merece, eliminando objeções e acelerando o fechamento de projetos.
            </p>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-light uppercase tracking-wider transition-colors group/btn cursor-pointer"
            >
              <span>Conhecer Estruturação</span>
              <span className="transform group-hover/btn:translate-x-1.5 transition-transform select-none">→</span>
            </button>
          </div>
        </section>

      </div>

      {/* SECTION 2: QUEM SOMOS (Fundo Creme) */}
      <section id="about-block-1" className="bg-cream text-navy py-24 relative border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left Column: Descriptive Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">QUEM SOMOS</span>
              <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold mb-6 text-navy">
                Sobre a Agência
              </h2>
              <div className="w-12 h-[2px] bg-gold mb-8"></div>
              <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-navy/90 font-light">
                A Matos &amp; Co. é uma agência de marketing de performance, tecnologia e estruturação estratégica sediada em Curitiba, atendendo parceiros em todo o território nacional. Nascemos da convicção de que o marketing sério deve ser medido em resultados reais e duradouros, não em métricas de vaidade. Unimos planejamento estratégico de posicionamento, design de altíssimo nível, tráfego pago de alta precisão, conteúdo especializado e tecnologia avançada em um único ecossistema, garantindo que sua marca se consolide e seu negócio cresça de forma altamente consistente, legível e mensurável.
              </p>
            </div>

            {/* Right Column: Illustrative Premium Image with Offset Gold Frames */}
            <div className="lg:col-span-6 relative group h-[350px] sm:h-[450px] md:h-[520px] lg:h-[480px] xl:h-[520px] w-full flex items-center justify-center">
              {/* Outer Elegant Offset gold border accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-gold/40 rounded-2xl translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 pointer-events-none" />
              {/* Inner ambient glow background */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-navy-dark/5 rounded-2xl translate-x-2 -translate-y-2 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.22)] bg-navy/5">
                <motion.img 
                  src="https://i.ibb.co/7cHhqLj/pexels-fauxels-3184360.jpg" 
                  alt="Equipe Matos & Co planejando estratégia de performance" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.0, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  animate={{
                    scale: [1.0, 1.05, 1.0]
                  }}
                  transition={{
                    opacity: { duration: 1.6, ease: "easeOut" },
                    scale: {
                      duration: 18,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />
                
                {/* Multi-layered visual depth shadow edge guard */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/15 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
              </div>
            </div>

          </div>

          {/* SECTION 4: VALORES Title */}
          <div className="text-center mb-16 flex flex-col items-center pt-8 border-t border-gold/15">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3">CONVICÇÕES</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold mb-4 text-navy">
              Nossos Valores
            </h2>
            <SectionDivider lightBg={true} className="mt-2" />
          </div>
        </div>

        {/* The 3 columns glued together spanning the entire session width */}
        <div className="w-full border-t border-b border-gold/25 grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {/* Valor 1: Resultado */}
          <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gold/25 p-10 md:p-14 min-h-[340px] md:min-h-[400px] flex flex-col justify-between transition-colors duration-300 hover:bg-gold/[0.02]">
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
          <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gold/25 p-10 md:p-14 min-h-[340px] md:min-h-[400px] flex flex-col justify-between transition-colors duration-300 hover:bg-gold/[0.02]">
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

      {/* SECTION 4: DIFERENCIAL (Fundo Creme) */}
      <section 
        id="diferencial-section"
        className="bg-cream text-navy py-24 px-6 md:px-12 relative border-t border-gold/15"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-6">
              <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">NOSSO DIFERENCIAL</span>
              <h2 className="font-serif text-3xl md:text-4.5xl font-semibold leading-tight text-navy mb-4 max-w-lg">
                Estrutura sólida para colher novos resultados.
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mt-2"></div>
            </div>

            <div className="md:col-span-6">
              <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-navy/90 font-light">
                Fugimos do amadorismo. Unimos organização digital, posicionamento de autoridade e tráfego pago de forma consistente e com visualização ultra-legível. O resultado? Seu negócio se consolida e as vendas crescem de forma sólida e natural.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
