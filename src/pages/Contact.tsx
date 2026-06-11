import React from 'react';
import { Mail, Instagram, MapPin, PhoneCall } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";
  const instagramUrl = "https://instagram.com/agencia.matos.co";
  const emailAddress = "b.matos.co@gmail.com";

  return (
    <div id="contact-section" className="w-full">
      
      {/* SECTION 1: ELEGANT INTEGRATED HEADER (No Redundant Banners) */}
      <section id="contact-hero-section" className="bg-navy text-white py-24 px-6 md:px-12 relative border-t border-white/5 overflow-hidden">
        {/* Deep, glowing light overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,160,88,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,26,47,0.8),transparent)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text content of the prompt */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-xs font-bold tracking-[0.3em] text-gold-light uppercase mb-4 block">
                VAMOS DAR O PRÓXIMO PASSO
              </span>
              <h2 className="font-serif text-3.5xl sm:text-5xl md:text-5.5xl font-medium tracking-tight mb-6 leading-tight">
                Inicie seu <br className="hidden sm:inline" />Posicionamento
              </h2>
              <div className="w-16 h-[2px] bg-gold mb-6"></div>
              <p className="font-sans text-base sm:text-lg md:text-xl text-muted-text/90 leading-relaxed font-light mb-8 max-w-xl">
                Conte sobre o seu negócio e descubra como a Matos &amp; Co. pode ajudar na estruturação, organização e posicionamento digital da sua empresa de maneira ágil, clara e profissional.
              </p>
              
              {/* Desktop quick button anchor to ease navigation to the channels */}
              <button 
                onClick={() => {
                  const el = document.getElementById('contact-content');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden lg:inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors cursor-pointer"
              >
                <span>Ver canais de atendimento</span>
                <span className="transform group-hover:translate-y-1 transition-transform">↓</span>
              </button>
            </div>

            {/* Right Column: Premium, highly stylized and large illustration with elegant offset frames */}
            <div className="lg:col-span-6 relative group h-[350px] sm:h-[450px] md:h-[520px] lg:h-[480px] xl:h-[540px] w-full flex items-center justify-center">
              {/* Outer Elegant Offset gold border accent specifically stylized for dark navy backgrounds */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-gold/30 rounded-2xl translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 pointer-events-none" />
              {/* Inner ambient luxury glow background for deep-navy theme */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#0A1A2F]/80 rounded-2xl translate-x-2 -translate-y-2 border border-white/5 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.45)] bg-navy-dark/40">
                <img 
                  src="https://i.ibb.co/cc5sPbsJ/pexels-mikael-blomkvist-6476245.jpg" 
                  alt="Conversa estratégica e alinhamento de negócio na Matos & Co." 
                  className="w-full h-full object-cover select-none transform hover:scale-[1.03] transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual rich shading & brand-coloring overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/10 to-transparent pointer-events-none mix-blend-multiply" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPAL CONTENT (Fundo Creme) */}
      <section id="contact-content" className="bg-cream text-navy py-24 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Atendimento Principal */}
            <div className="bg-[#0A1A2F]/5 border border-gold/25 p-8 md:p-12 rounded-xl flex flex-col justify-between hover:border-gold/55 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block">CANAL PRINCIPAL</span>
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-navy leading-tight">
                  Atendimento Instantâneo
                </h3>
                <div className="w-12 h-[2px] bg-gold"></div>
                <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-navy/90 font-light">
                  Respondemos preferencialmente por mensagem instantânea para maior agilidade no briefing inicial. Clique no botão abaixo para iniciar a conversa directly.
                </p>
              </div>

              <div className="mt-8">
                <a
                  id="contact-main-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-white bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Details list (Replaces Form Side) */}
            <div className="bg-[#0A1A2F]/5 border border-gold/25 p-8 md:p-12 rounded-xl flex flex-col justify-between hover:border-gold/55 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block">MEIOS DIRETOS</span>
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-navy leading-tight">
                  Contatos Rápidos
                </h3>
                <div className="w-12 h-[2px] bg-gold"></div>
                
                <ul className="flex flex-col gap-6 mt-4">
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs block font-bold tracking-wider text-navy/50 uppercase">WhatsApp</span>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-base sm:text-lg hover:underline text-navy/90">(41) 98859-5077</a>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs block font-bold tracking-wider text-navy/50 uppercase">Instagram</span>
                      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-base sm:text-lg hover:underline text-navy/90">@agencia.matos.co</a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs block font-bold tracking-wider text-navy/50 uppercase">E-mail Corporativo</span>
                      <a href={`mailto:${emailAddress}`} className="font-sans font-semibold text-base sm:text-lg hover:underline text-navy/90">{emailAddress}</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs block font-bold tracking-wider text-navy/50 uppercase">Sede Curitiba</span>
                      <p className="font-sans font-semibold text-base sm:text-lg text-navy/90 leading-tight">PR — Atendimento em todo o Brasil.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
