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
      descColor: 'text-navy/80',
      icon: <Target className="w-8 h-8 text-gold" />,
      content: 'Planejamento, criação e gestão de anúncios estratégicos no Instagram e Facebook (Meta Ads). Focamos no direcionamento para atrair clientes realmente qualificados para o seu negócio de maneira consciente e sustentável.'
    },
    {
      id: 'pages',
      title: 'Sites & Landing Pages',
      bg: 'bg-navy',
      textColor: 'text-white',
      descColor: 'text-muted-text',
      icon: <Layout className="w-8 h-8 text-gold-light" />,
      content: 'Desenvolvimento de sites e páginas profissionais, eficientes, rápidas e responsivas. Projetadas para transmitir alta credibilidade e consolidar o posicionamento seguro da sua marca no mercado.'
    },
    {
      id: 'content',
      title: 'Conteúdo & Redes',
      bg: 'bg-cream',
      textColor: 'text-navy',
      descColor: 'text-navy/80',
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      content: 'Criação de identidades visuais modernas e planejamento semanal de posts estratégicos. Ajudamos a organizar suas redes de forma que sua empresa transmita profissionalismo e gere prestígio direto.'
    },
    {
      id: 'local',
      title: 'Google Meu Negócio & Portfólios',
      bg: 'bg-navy',
      textColor: 'text-white',
      descColor: 'text-muted-text',
      icon: <Cpu className="w-8 h-8 text-gold-light" />,
      content: 'Estruturação e organização de sua presença no Google Maps e ficha do Google Meu Negócio para atração local do seu comércio ou serviço. Também construímos catálogos e portfólios digitais elegantes para você expor seu portfólio de cases.'
    }
  ];

  return (
    <div id="services-page" className="w-full">
      
      {/* SECTION 1: HERO SERVICES (Fundo Azul-Marinho) */}
      <section id="services-hero" className="bg-navy text-white pt-36 pb-20 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,160,88,0.03),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-5"
          >
            Nossas Especialidades
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6"
          >
            Serviços
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-xs sm:text-sm md:text-base text-muted-text max-w-2xl mx-auto leading-relaxed"
          >
            Organização, posicionamento digital e anúncios estratégicos para o seu negócio crescer de forma consistente.
          </motion.p>
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
              className={`${service.bg} ${service.textColor} py-20 px-6 md:px-12 relative border-b border-gold/5`}
            >
              <div className="max-w-4xl mx-auto">
                
                {/* Visual Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-[0.25em] ${isLight ? 'text-gold' : 'text-gold-light'} uppercase`}>
                    0{index + 1} . Serviço Especializado
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-6 tracking-wide">
                  {service.title}
                </h3>

                {/* Elegant separator line */}
                <div className={`w-full border-t ${isLight ? 'border-gold/30' : 'border-gold/25'} mb-8`}></div>

                {/* Description Text */}
                <p className={`font-sans text-xs sm:text-sm md:text-base leading-relaxed ${service.descColor} mb-10 max-w-3xl font-light`}>
                  {service.content}
                </p>

                {/* WhatsApp Trigger Button specifically for this service */}
                <div>
                  <a
                    id={`service-cta-btn-${service.id}`}
                    href={getWhatsappServiceUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 transform hover:-translate-y-0.5 ${
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
            </section>
          );
        })}
      </div>

      {/* SECTION 3: CTA FINAL (Fundo Azul-Marinho / Comum) */}
      <section 
        id="services-cta-final"
        className="bg-navy text-white py-24 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,88,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase mb-4">MÉTODO COMPROVADO</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
            Seu negócio estruturado e posicionado para crescer.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted-text max-w-lg leading-relaxed mb-10">
            Falar com a gente e comece a estruturar sua presença digital hoje mesmo.
          </p>
          <a
            id="services-cta-whatsapp-btn"
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
