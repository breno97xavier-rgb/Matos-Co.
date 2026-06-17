import React from 'react';
import { motion } from 'motion/react';
import { Target, Layout, Sparkles, Cpu, ArrowUpRight } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

export default function Services() {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";
  
  const getWhatsappServiceUrl = (serviceName: string) => {
    return `https://wa.me/5541988595077?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(serviceName)}%20da%20Matos%20%26%20Co.`;
  };

  const servicesList = [
    {
      id: 'traffic',
      title: 'Tráfego Pago (Meta Ads)',
      bg: 'bg-cream',
      textColor: 'text-navy',
      descColor: 'text-navy/95',
      icon: <Target className="w-8 h-8 text-gold" />,
      image: 'https://i.ibb.co/Xx69gVWJ/pexels-negativespace-110078.jpg',
      content: 'Planejamento, criação e gestão de anúncios estratégicos no Instagram e Facebook (Meta Ads). Focamos no direcionamento para atrair clientes realmente qualificados para o seu negócio de maneira consciente, direta e sustentável.'
    },
    {
      id: 'pages',
      title: 'Sites & Landing Pages',
      bg: 'bg-navy',
      textColor: 'text-white',
      descColor: 'text-muted-text/95',
      icon: <Layout className="w-8 h-8 text-gold-light" />,
      image: 'https://i.ibb.co/KxJFVjBN/pexels-marcial-comeron-177639337-11952304.jpg',
      content: 'Desenvolvimento de sites corporativos e páginas profissionais, eficientes, rápidas, responsivas e fáceis de ler. Projetadas para transmitir alta credibilidade e consolidar o posicionamento seguro da sua marca no mercado.'
    },
    {
      id: 'content',
      title: 'Conteúdo & Redes',
      bg: 'bg-cream',
      textColor: 'text-navy',
      descColor: 'text-navy/95',
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      image: 'https://i.ibb.co/nV3YwhD/pexels-cottonbro-5054354.jpg',
      content: 'Criação de identidades visuais modernas e planejamento semanal de posts estratégicos. Ajudamos a organizar suas redes de forma que sua empresa transmita profissionalismo e gere prestígio direto na mente do seu público.'
    },
    {
      id: 'local',
      title: 'Google Meu Negócio & Portfólios',
      bg: 'bg-navy',
      textColor: 'text-white',
      descColor: 'text-muted-text/95',
      icon: <Cpu className="w-8 h-8 text-gold-light" />,
      image: 'https://i.ibb.co/6kRKrL3/pexels-cottonbro-6986455.jpg',
      content: 'Estruturação e organização de sua presença no Google Maps e ficha do Google Meu Negócio para atração local do seu comércio ou serviço. Também construímos catálogos e portfólios digitais elegantes para você expor seu portfólio de cases.'
    }
  ];

  return (
    <div id="services-section" className="w-full">
      
      {/* SECTION 1: ELEGANT TITLE SECTION (No Redundant Banners) */}
      <section id="services-hero-section" className="bg-navy text-white py-24 px-6 md:px-12 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,160,88,0.03),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4 block">
            NOSSAS ESPECIALIDADES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-5.5xl font-medium tracking-tight mb-6">
            Especialidades de Atuação
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-base sm:text-lg md:text-xl text-muted-text/90 max-w-2xl mx-auto leading-relaxed font-light">
            Organização, posicionamento digital e anúncios estratégicos com leitura ampliada para o seu negócio crescer de forma segura.
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICES ALTERNATED */}
      <div id="services-list-container">
        {servicesList.map((service, index) => {
          const isLight = service.bg === 'bg-cream';
          return (
            <section 
              key={service.id} 
              id={`service-item-${service.id}`}
              className={`${service.bg} ${service.textColor} py-24 px-6 md:px-12 relative border-b border-gold/5 overflow-hidden`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Column for Content */}
                  <div className={`lg:col-span-7 flex flex-col items-start ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Visual Icon Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        {service.icon}
                      </div>
                      <span className={`text-xs font-bold tracking-[0.25em] ${isLight ? 'text-gold' : 'text-gold-light'} uppercase`}>
                        0{index + 1} . Serviço Especializado
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl sm:text-4.5xl font-semibold mb-6 tracking-wide">
                      {service.title}
                    </h3>

                    {/* Elegant separator line */}
                    <div className={`w-full border-t ${isLight ? 'border-gold/30' : 'border-gold/25'} mb-8`}></div>

                    {/* Description Text */}
                    <p className={`font-sans text-base sm:text-lg md:text-xl leading-relaxed ${service.descColor} mb-10 font-light`}>
                      {service.content}
                    </p>

                    {/* WhatsApp Trigger Button specifically for this service */}
                    <div>
                      <a
                        id={`service-cta-btn-${service.id}`}
                        href={getWhatsappServiceUrl(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 transform hover:-translate-y-0.5 ${
                          isLight 
                            ? 'bg-navy text-white hover:bg-navy-dark hover:shadow-lg hover:shadow-navy/15' 
                            : 'bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/15'
                        }`}
                      >
                        <span>Falar sobre este serviço</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Column for Premium Image Block with Custom Floating Frame Accent */}
                  <div className={`lg:col-span-5 relative group h-[300px] sm:h-[400px] lg:h-[450px] w-full flex items-center justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Floating Gold Border Framework on the opposite direction based on alignment */}
                    <div className={`absolute top-4 left-4 right-4 bottom-4 border-2 ${isLight ? 'border-gold/30' : 'border-gold-light/20'} rounded-2xl transition-transform duration-500 pointer-events-none ${
                      index % 2 === 0 
                        ? 'translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2' 
                        : '-translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2'
                    }`} />
                    
                    {/* Inner ambient glow background shadow behind card */}
                    <div className={`absolute top-4 left-4 right-4 bottom-4 ${isLight ? 'bg-navy-dark/5' : 'bg-white/5'} rounded-2xl pointer-events-none ${
                      index % 2 === 0 ? 'translate-x-2 -translate-y-2' : '-translate-x-2 -translate-y-2'
                    }`} />

                    {/* Main Image Wrapper */}
                    <div className={`relative w-full h-full rounded-2xl overflow-hidden border ${isLight ? 'border-gold/25' : 'border-gold-light/25'} shadow-[0_20px_50px_rgba(0,0,0,0.18)] bg-navy/5`}>
                      <motion.img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                        initial={{ scale: 1.0, opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        animate={{
                          scale: [1.0, 1.06, 1.0]
                        }}
                        transition={{
                          opacity: { duration: 1.5, ease: "easeOut" },
                          scale: {
                            duration: 16,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror"
                          }
                        }}
                        whileHover={{ 
                          scale: 1.09,
                          transition: { duration: 0.6, ease: "easeOut" }
                        }}
                      />
                      {/* Multi-layered dark blend overlay to fit typography */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/10 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
