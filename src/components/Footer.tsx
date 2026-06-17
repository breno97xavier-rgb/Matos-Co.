import React from 'react';
import { Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    
    // Smoothly scroll to the corresponding section element with offset (preferring about-block-1 for 'Sobre' section as it is at the top)
    const targetId = id === 'about' ? 'about-block-1' : `${id}-section`;
    const sectionElement = document.getElementById(targetId);
    if (sectionElement) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";
  const instagramUrl = "https://instagram.com/agencia.matos.co";
  const emailAddress = "b.matos.co@gmail.com";

  return (
    <footer id="main-footer" className="bg-navy-dark border-t border-gold/10 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Monogram & Positioning */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="font-sans text-xs text-muted-text max-w-sm leading-relaxed mt-2 uppercase tracking-wide">
              Agência boutique de performance digital, tecnologia e estruturação. Focada em posicionamento local, conteúdo estratégico e anúncios refinados para fortalecer a presença digital do seu negócio.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 id="footer-nav-title" className="font-serif text-sm font-semibold tracking-wider text-gold-light uppercase">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {(['home', 'about', 'services', 'cases', 'contact'] as PageId[]).map((page) => {
                const labels: Record<PageId, string> = {
                  home: 'Home',
                  services: 'Nossos Serviços',
                  about: 'Sobre a Agência',
                  cases: 'Cases & Portfólio',
                  contact: 'Contato Direto',
                };
                return (
                  <li key={page}>
                    <button
                      id={`footer-nav-${page}`}
                      onClick={() => handleNav(page)}
                      className="text-xs font-semibold text-muted-text hover:text-white transition-colors uppercase tracking-[0.1em] text-left cursor-pointer"
                    >
                      {labels[page]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <h4 id="footer-contact-title" className="font-serif text-sm font-semibold tracking-wider text-gold-light uppercase">Conecte-se</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs font-semibold text-muted-text hover:text-gold-light transition-colors uppercase tracking-[0.08em]"
                >
                  <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold-light group-hover:text-navy transition-all">
                    W
                  </span>
                  <span>(41) 98859-5077</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs font-semibold text-muted-text hover:text-gold-light transition-colors uppercase tracking-[0.08em]"
                >
                  <Instagram className="w-5 h-5 text-gold" />
                  <span>@agencia.matos.co</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="group inline-flex items-center gap-2.5 text-xs font-semibold text-muted-text hover:text-gold-light transition-colors uppercase tracking-[0.08em]"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  <span>{emailAddress}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs font-semibold text-muted-text uppercase tracking-[0.08em]">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Curitiba - Atendimento Nacional</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Golden fine line spacer */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[10px] font-medium tracking-widest text-muted-text uppercase">
            © 2026 Matos <span className="amp text-gold-light">&amp;</span> Co. — Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-semibold text-gold tracking-widest uppercase">Agência de Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
