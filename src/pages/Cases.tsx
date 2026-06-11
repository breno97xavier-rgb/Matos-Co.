import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ExternalLink, 
  MousePointer, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Instagram,
  CheckCircle,
  Layout,
  Layers,
  ArrowUpRight,
  Heart,
  MessageCircle,
  Shield,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Settings,
  Calendar,
  Layers3,
  Users,
  Grid,
  Bookmark,
  UserCheck
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tag: string;
  category: 'website' | 'salespage';
  url: string;
  imageUrl?: string;
  description: string;
  techs: string[];
  mockupType: 'desktop' | 'mobile';
  displayUrl: string;
}

interface SocialCase {
  id: string;
  title: string;
  tag: string;
  url: string;
  logoUrl: string;
  feedImageUrl: string;
  description: string;
  highlights: string[];
  instagramHandle: string;
  categoryName: string;
  bioText: string;
  webLink: string;
  stats: { posts: string; followers: string; following: string };
  metrics: { label: string; value: string };
}

// Elegant Showcase component using static screenshots of real, high-quality work
function SocialMediaShowcase({ sc }: { sc: SocialCase }) {
  return (
    <div className="w-full bg-[#030d1b] border border-gold/15 rounded-xl overflow-hidden shadow-2xl relative transition-all duration-500 hover:border-gold/30">
      
      {/* Top Simulated App/Browser Header */}
      <div className="bg-navy-light px-4 py-3 border-b border-white/5 flex items-center justify-between select-none">
        {/* Circle controls */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Instagram Handle & External Link */}
        <a 
          href={sc.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-navy px-3 py-1 rounded text-[10px] text-muted-text hover:text-gold transition-colors font-mono w-56 md:w-80 text-center truncate flex items-center justify-center gap-1.5 border border-white/5"
          title="Clique para ir ao perfil oficial"
        >
          <Instagram className="w-3.5 h-3.5 text-gold/80" />
          <span>instagram.com/{sc.instagramHandle}</span>
          <ExternalLink className="w-2.5 h-2.5 text-gold/50" />
        </a>

        {/* Status Badge */}
        <div className="bg-gold/10 text-gold border border-gold/20 rounded-full px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider shrink-0 hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>Case de Elite</span>
        </div>
      </div>

      {/* Main Image container representing actual work */}
      <a 
        href={sc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square overflow-hidden bg-[#020b16] group/shot"
        title="Clique para abrir o Instagram oficial"
      >
        <img 
          src={sc.feedImageUrl} 
          alt={`Visual Grid da ${sc.title}`}
          className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover/shot:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Hover Highlight Layer */}
        <div className="absolute inset-0 bg-[#020b16]/75 opacity-0 group-hover/shot:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/30 mb-3 transform scale-90 group-hover/shot:scale-100 transition-transform duration-500">
            <Instagram className="w-6 h-6" />
          </div>
          <p className="font-serif text-lg font-medium text-white mb-1">Acessar @{sc.instagramHandle}</p>
          <p className="font-sans text-[10px] uppercase text-gold tracking-widest font-bold">Ver Conteúdo no Instagram</p>
        </div>
      </a>

      {/* Minimalistic Instagram Footer Header bar inside card */}
      <div className="p-4 bg-gradient-to-b from-[#040f20] to-[#020914] border-t border-white/5 text-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img 
              src={sc.logoUrl} 
              alt={`${sc.title} Logo`}
              className="w-10 h-10 rounded-full object-cover border border-gold/20 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <h4 className="font-serif font-semibold text-xs text-white truncate">@{sc.instagramHandle}</h4>
                <span className="w-3.5 h-3.5 rounded-full bg-gold flex items-center justify-center text-[7px] text-navy font-bold shrink-0">✓</span>
              </div>
              <p className="font-sans text-[9px] text-muted-text truncate">{sc.categoryName}</p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] font-semibold text-gold-light block">{sc.stats.followers}</span>
            <span className="text-[8px] text-muted-text uppercase tracking-wider block">Seguidores</span>
          </div>
        </div>

        {/* Action button inside card device */}
        <div className="mt-4">
          <a 
            href={sc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#051427] hover:bg-gold border border-gold/30 hover:border-gold hover:text-navy text-gold-light font-sans text-[9px] font-bold uppercase tracking-widest py-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Ver no Instagram</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
}

const brandLogos = [
  { name: 'ChatGPT Generated', url: 'https://i.ibb.co/1fg5xnp3/Chat-GPT-Image-30-de-mai-de-2026-22-17-37.png' },
  { name: 'Surfing Club', url: 'https://i.ibb.co/XkyrqpyM/Blue-and-White-Circle-Surfing-Club-Logo-2.png' },
  { name: 'Fisioterapia Moderna', url: 'https://i.ibb.co/hJPkH7CN/Logotipo-Fisioterapia-Fisioterapeuta-Moderno-Verde-e-Azul.png' },
  { name: 'Business Mag', url: 'https://i.ibb.co/dwjH9cLX/Black-White-Minimal-Modern-Simple-Bold-Business-Mag-Logo.png' },
  { name: 'Faculdade Unyleya', url: 'https://i.ibb.co/bjJWSYQh/271666009-977020573240113-3838525852371125015-n.jpg' },
  { name: 'Sócio Parceiro', url: 'https://i.ibb.co/ym95yPH0/285343927-2065018407006001-5053502450342763810-n.jpg' },
  { name: 'Studio Fitness', url: 'https://i.ibb.co/JwcVDYsq/416503159-617833847102507-6309608712364052740-n.jpg' },
  { name: 'Bioquality', url: 'https://i.ibb.co/9kLdz4yv/459138203-1048110760028779-2834887209004754625-n.jpg' },
  { name: 'Dentistry Care', url: 'https://i.ibb.co/whkKjnC5/615395214-18353807698202821-2767395155429311626-n.jpg' },
  { name: 'ASTEC Contabilidade', url: 'https://i.ibb.co/bjD7ZXHW/617531097-18069706739531693-2443114435507891874-n.jpg' },
  { name: 'Grupo IETAAM', url: 'https://i.ibb.co/tTMpQR7z/698582816-18353762047243151-4343069879979779241-n.jpg' },
  { name: 'Studio Estética', url: 'https://i.ibb.co/MkNCG1X4/713624300-18054486884725470-6764333290606199863-n.jpg' }
];

export default function Cases() {
  const [filter, setFilter] = useState<'all' | 'web' | 'social'>('all');

  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Gostei%20dos%20cases%20no%20site%20e%20gostaria%20de%20estruturar%20o%20meu%20projeto.";

  // Part 1: Estruturação & Desenvolvimento de Websites (Statically clean, razor sharp screenshot)
  const projects: Project[] = [
    {
      id: 'edital-home',
      title: 'Editora Edital Concursos — Portal Principal',
      tag: 'Criação de Portal & SEO',
      category: 'website',
      url: 'https://www.editoraeditalconcursos.com.br/',
      imageUrl: 'https://i.ibb.co/7xKfrXjs/Captura-de-tela-2026-06-07-220436.png',
      description: 'Portal completo estruturado para venda de preparatórios de concursos públicos. Foco em SEO institucional, credibilidade visual imponente e navegação hierárquica ideal.',
      techs: ['Vendas Scale', 'SEO Orgânico', 'Design Corporativo', 'Alta Performance'],
      mockupType: 'desktop',
      displayUrl: 'editoraeditalconcursos.com.br'
    },
    {
      id: 'ingles-zero',
      title: 'Inglês do Zero',
      tag: 'Infoproduto / Lançamento',
      category: 'salespage',
      url: 'https://inglesdozerocom.vercel.app/',
      imageUrl: 'https://i.ibb.co/pBgzzN0F/Captura-de-tela-2026-06-07-220824.png',
      description: 'Landing Page ultra moderna estilo Premium Dark desenvolvida para curso extensivo de inglês. Layout impactante projetado para campanhas de Meta & Google Ads.',
      techs: ['Visual Dark', 'Gatilhos de Conversão', 'Alta Performance', 'Integrado com Vendas'],
      mockupType: 'desktop',
      displayUrl: 'inglesdozerocom.vercel.app'
    },
    {
      id: 'cem-drinks',
      title: 'O Livro dos Cem Drinks',
      tag: 'Infoproduto Responsivo',
      category: 'salespage',
      url: 'https://o-livro-dos-cem-drinks.vercel.app/',
      imageUrl: 'https://i.ibb.co/F4swR8Q8/Captura-de-tela-2026-06-07-221035.png',
      description: 'Estruturação de venda premium mobile-first para livro digital interativo sobre coquetelaria avançada. Visual vibrante de alta conversão, focado em tráfego de redes sociais.',
      techs: ['Mobile First', 'Design Jovem / Trendy', 'Canais Sociais', 'Carregamento < 1s'],
      mockupType: 'desktop',
      displayUrl: 'o-livro-dos-cem-drinks.vercel.app'
    }
  ];

  // Part 2: Posicionamento & Conteúdo de Performance (Social Media & Creation)
  const socialCases: SocialCase[] = [
    {
      id: 'astec',
      title: 'ASTEC Contabilidade',
      tag: 'Design de Autoridade & Performance',
      url: 'https://www.instagram.com/astec_contabil/',
      logoUrl: 'https://i.ibb.co/bjD7ZXHW/617531097-18069706739531693-24431144355078918474-n.jpg', // corrected typo
      feedImageUrl: 'https://i.ibb.co/xtsSry5B/Whats-App-Image-2026-06-10-at-20-14-32.jpg',
      categoryName: 'Assessoria Empresarial',
      bioText: 'Transformamos burocracia em inteligência estratégica.\nFoco total em elisão tributária, holding familiar e BPO fiscal e financeiro. 🏢📊',
      webLink: 'asteccontabil.com.br',
      stats: { posts: '142', followers: '10.8 mil', following: '381' },
      description: 'Redesenho completo do posicionamento digital para contabilidade estratégica corporativa. Grid organizado com paleta refinada para transmitir solidez, segurança e alta confiabilidade no ambiente B2B.',
      highlights: ['Autoridade Visual', 'Conteúdo Consultivo B2B', 'Paleta Sólida & Corporativa'],
      instagramHandle: 'astec_contabil',
      metrics: { label: 'Posicionamento', value: 'Referência Premium' }
    },
    {
      id: 'bioquality',
      title: 'BioQuality Consultoria',
      tag: 'Estratégia de Conteúdo Ambiental',
      url: 'https://www.instagram.com/bioqualityconsult/',
      logoUrl: 'https://i.ibb.co/9kLdz4yv/459138203-1048110760028779-2834887209004754625-n.jpg',
      feedImageUrl: 'https://i.ibb.co/LXV1fhSk/Whats-App-Image-2026-06-10-at-20-14-45.jpg',
      categoryName: 'Engenharia Ambiental',
      bioText: 'Estratégia e Engenharia Ambiental de alta performance corporativa.\nSoluções completas em outorgas, licenciamentos e estruturação de práticas ESG. 🌱🌍',
      webLink: 'bioqualityconsult.com.br',
      stats: { posts: '98', followers: '6.4 mil', following: '215' },
      description: 'Estruturação de conteúdo e marca verde focada em soluções sustentáveis e engenharia ambiental corporativa. Linha de design elegante, educativa e de alto impacto de captação.',
      highlights: ['Informativos Práticos', 'Linhas de Base Minimalistas', 'Brand Ambiental'],
      instagramHandle: 'bioqualityconsult',
      metrics: { label: 'Conexão B2B', value: 'Sustentabilidade Ativa' }
    },
    {
      id: 'unyleya',
      title: 'Faculdade Unyleya',
      tag: 'Branding Acadêmico de Alta Performance',
      url: 'https://www.instagram.com/faculdadeunyleya/',
      logoUrl: 'https://i.ibb.co/bjJWSYQh/271666009-977020573240113-3838525852371125015-n.jpg',
      feedImageUrl: 'https://i.ibb.co/YBsqtMm6/Whats-App-Image-2026-06-10-at-20-14-57.jpg',
      categoryName: 'Instituição de Ensino',
      bioText: 'Cursos de Graduação, MBA e Pós-Graduação 100% Online.\nNota Máxima 5 confirmada pelo MEC. Mais de 300.000 alunos transformados com diploma de prestígio. 🎓💻',
      webLink: 'unyleya.edu.br',
      stats: { posts: '1.2 mil', followers: '145 mil', following: '492' },
      description: 'Criação de anúncios gráficos, editoriais de social media e design visual escalável para um dos maiores nomes em educação a distância do Brasil. Campanhas de impulso coordenadas.',
      highlights: ['Alcance de Alto Escopo', 'Campanhas Visuais EaD', 'Design de Conversão'],
      instagramHandle: 'faculdadeunyleya',
      metrics: { label: 'Escala Social', value: 'Padrão Acadêmico' }
    },
    {
      id: 'ietaam',
      title: 'Grupo Educacional IETAAM',
      tag: 'Atração de Alunos & Grid Estruturado',
      url: 'https://www.instagram.com/grupoietaam/',
      logoUrl: 'https://i.ibb.co/tTMpQR7z/698582816-18353762047243151-4343069879979779241-n.jpg',
      feedImageUrl: 'https://i.ibb.co/S7Z93ZL6/Whats-App-Image-2026-06-10-at-20-15-12.jpg',
      categoryName: 'Centro de Formação de Elite',
      bioText: 'Referência regional em ensino técnico industrial.\nLaboratórios modernos e ágeis. Estética focada em alta empregabilidade imediatista na indústria nacional. ⚡👷',
      webLink: 'grupoietaam.com.br',
      stats: { posts: '540', followers: '28.2 mil', following: '510' },
      description: 'Estratégia visual em blocos e infográficos com apelo focado em empregabilidade técnica. Layout vibrante e limpo estruturado para engajar o público jovem e otimizar faturamento.',
      highlights: ['Cores de Alta Captura', 'Blocos de Design Dinâmicos', 'Estratégia Conversiva'],
      instagramHandle: 'grupoietaam',
      metrics: { label: 'Foco Captação', value: 'Líder Regional' }
    }
  ];

  return (
    <div id="cases-section" className="pt-24 pb-24 px-6 md:px-12 bg-navy text-white relative border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(circle_at_top,rgba(200,160,88,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">PORTFÓLIO <span className="amp">&amp;</span> CASES</span>
          <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4">
            Clientes Atendidos <span className="amp">&amp;</span> Estruturações
          </h1>
          <div className="w-16 h-[2.5px] bg-gold opacity-75 my-4"></div>
          <p className="font-sans text-base sm:text-lg md:text-xl text-muted-text/95 max-w-3xl leading-relaxed font-light">
            Explore os projetos estratégicos desenvolvidos pela nossa agência. Divididos entre desenvolvimentos estruturais de alta velocidade (websites corporativos) e engenharia de posicionamento estético (conteúdo de social media de elite).
          </p>
        </div>

        {/* Carousel / Logo Slider Track */}
        <div className="mb-20">
          <div className="relative w-full overflow-hidden py-4 rounded-2xl bg-[#071627]/30 border border-gold/10 backdrop-blur-sm px-1 md:px-4">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-logos {
                animation: marquee 35s linear infinite;
              }
            `}</style>
            
            {/* Elegant fade masks */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-navy via-navy/55 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-navy via-navy/55 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling track */}
            <div className="flex w-max gap-8 md:gap-14 animate-marquee-logos hover:[animation-play-state:paused] py-4 items-center">
              {/* Duplicated list for infinite seamless visual illusion */}
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <div key={`brand-logo-${i}`} className="shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border border-gold/15 bg-[#030d1b] p-1.5 flex items-center justify-center transition-all duration-300 hover:border-gold hover:scale-105 shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="w-full h-full object-contain rounded-full select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 border-b border-white/5 pb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gold text-navy shadow-lg shadow-gold/10' 
                : 'text-muted-text hover:text-white hover:bg-white/5'
            }`}
          >
            Todos os Projetos
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              filter === 'web' 
                ? 'bg-gold text-navy shadow-lg shadow-gold/10' 
                : 'text-muted-text hover:text-white hover:bg-white/5'
            }`}
          >
            Estruturação de Websites
          </button>
          <button
            onClick={() => setFilter('social')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              filter === 'social' 
                ? 'bg-gold text-navy shadow-lg shadow-gold/10' 
                : 'text-muted-text hover:text-white hover:bg-white/5'
            }`}
          >
            Conteúdo de Performance
          </button>
        </div>

        {/* PORTFOLIO GRID AREA */}
        <div className="space-y-32">
          
          {/* DIVISION 1: ESTRUTURAÇÃO DE WEBSITES */}
          <AnimatePresence mode="popLayout">
            {(filter === 'all' || filter === 'web') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-16"
              >
                {/* Division Title */}
                <div className="flex items-center gap-4 border-b border-gold/10 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                  <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-white uppercase">
                    Estruturação <span className="amp text-gold">&amp;</span> Desenvolvimento de Websites
                  </h2>
                </div>

                <div className="flex flex-col gap-24 font-sans">
                  {projects.map((p, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={p.id}
                        layout
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${
                          isEven ? '' : 'lg:flex-row-reverse'
                        }`}
                      >
                        
                        {/* Desktop Browser visual column */}
                        <a 
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full lg:w-[55%] shrink-0 block group/visual"
                        >
                          <div className="bg-[#0b1d33] border border-gold/15 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover/visual:border-gold/30 group-hover/visual:shadow-gold/5 relative">
                            {/* Browser Top Tab Bar */}
                            <div className="bg-navy-light px-4 py-3 border-b border-gold/10 flex items-center justify-between">
                              {/* Dot controls */}
                              <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                              </div>
                              
                              {/* URL Bar */}
                              <div className="bg-navy px-3 py-1 rounded text-xs text-muted-text/70 font-mono w-64 text-center truncate flex items-center justify-center gap-1.5 border border-white/5">
                                <Globe className="w-3.5 h-3.5 text-gold/60" />
                                <span>{p.displayUrl}</span>
                              </div>
                              
                              {/* Direct action link indicator */}
                              <div className="flex items-center gap-1 text-[11px] text-gold/70 font-mono uppercase tracking-wider group-hover/visual:text-gold transition-colors">
                                <span>Acessar</span>
                                <ExternalLink className="w-3 h-3" />
                              </div>
                            </div>

                            {/* Static screenshot container (Pristine High Quality ratio, no blurred stretch) */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-[#030d1b]">
                              {p.imageUrl ? (
                                <img 
                                  src={p.imageUrl} 
                                  alt={p.title} 
                                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover/visual:scale-[1.03]"
                                  referrerPolicy="no-referrer"
                               />
                              ) : (
                                <div className="h-full flex items-center justify-center p-8 text-center text-muted-text font-serif text-lg">
                                  Carregando captura...
                                </div>
                              )}
                              {/* Fine radial overlay to match dark blue grading */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#020b16]/25 to-transparent pointer-events-none" />
                            </div>
                          </div>
                        </a>

                        {/* Informational Column */}
                        <div className="w-full lg:w-[45%] flex flex-col items-start select-none">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gold mb-3 block border-l-2 border-gold pl-3 font-sans">
                            {p.tag}
                          </span>
                          
                          <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-wide leading-tight">
                            {p.title}
                          </h3>
                          
                          <p className="font-sans text-base sm:text-lg md:text-xl text-muted-text/95 leading-relaxed mb-6 font-light">
                            {p.description}
                          </p>

                          {/* Tech highlights */}
                          <div className="flex flex-wrap gap-2 mb-8 font-sans">
                            {p.techs.map(t => (
                              <span 
                                key={t}
                                className="bg-[#0b1d33] text-muted-text text-xs font-medium px-3.5 py-1.5 border border-white/5 rounded-full uppercase tracking-wider"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Direct Button */}
                          <div className="flex items-center gap-4">
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-navy bg-gold hover:bg-gold-light hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 font-sans"
                            >
                              <span>Acessar Site Completo</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DIVISION 2: POSICIONAMENTO & CONTEÚDO DE PERFORMANCE */}
          <AnimatePresence mode="popLayout">
            {(filter === 'all' || filter === 'social') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-16 mt-16 font-sans"
              >
                {/* Division Title */}
                <div className="flex items-center gap-4 border-b border-gold/10 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                  <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-white uppercase">
                    Posicionamento <span className="amp text-gold">&amp;</span> Conteúdo de Performance (Social Media)
                  </h2>
                </div>

                {/* Grid Container for Social cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {socialCases.map((sc) => {
                    return (
                      <motion.div
                        key={sc.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#071627]/60 border border-gold/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                      >
                        {/* Upper Section holding Customized Instagram live simulator */}
                        <div>
                          
                          {/* Custom high fidelity social showcase */}
                          <SocialMediaShowcase sc={sc} />

                          {/* Info area layout below device frame */}
                          <div className="p-6">
                            <div className="flex justify-between items-start gap-4 mb-3">
                              <span className="text-xs font-bold uppercase tracking-widest text-gold text-left shrink-0">
                                {sc.tag}
                              </span>
                              <div className="bg-gold/10 text-gold border border-gold/30 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest shrink-0">
                                {sc.metrics.value}
                              </div>
                            </div>

                            <p className="font-sans text-base sm:text-lg text-muted-text/95 leading-relaxed font-light mb-4">
                              {sc.description}
                            </p>
                          </div>
                        </div>

                        {/* Highlights as badges and action redirect */}
                        <div className="px-6 pb-6 border-t border-white/5 pt-4 bg-navy-light/10">
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {sc.highlights.map(hl => (
                              <span 
                                key={hl} 
                                className="bg-[#0b1d33]/60 text-muted-text text-[10px] font-medium px-2.5 py-1 border border-white/5 rounded uppercase tracking-wider"
                              >
                                {hl}
                              </span>
                            ))}
                          </div>
                          
                          {/* Visit case link */}
                          <a
                            href={sc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-gold hover:text-white transition-colors"
                          >
                            <span>Visitar Perfil no Instagram Oficial</span>
                            <ArrowUpRight className="w-4 h-4 animate-pulse" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic CTA at bottom of cases page */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-12 md:p-14 rounded-2xl bg-[#071627]/50 border border-gold/15 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,88,0.03),transparent_75%)] pointer-events-none" />
          <span className="text-3xl mb-4 block">📈</span>
          <h3 className="font-serif text-2xl sm:text-4.5xl font-semibold text-white mb-3 leading-tight">
            Deseja uma estrutura focada em alta performance?
          </h3>
          <p className="font-sans text-base sm:text-lg text-muted-text/95 max-w-xl mb-8 font-light">
            Não criamos apenas sites elegantes. Desenhamos funis completos de aquisição e geramos conteúdo premium altamente estratégico para alavancar sua autoridade e resultados.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-navy bg-gold hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Quero estruturar meu negócio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
