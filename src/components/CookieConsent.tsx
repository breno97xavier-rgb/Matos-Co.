import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Check, Shield, Settings, AlertCircle } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true and blocked
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if the user has already set their preferences
    const storedConsent = localStorage.getItem('matos_co_cookie_consent');
    if (!storedConsent) {
      // Delay display slightly for premium editorial pacing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('matos_co_cookie_consent', JSON.stringify({
      preferences: allAccepted,
      timestamp: new Date().toISOString(),
      accepted: 'all'
    }));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('matos_co_cookie_consent', JSON.stringify({
      preferences: onlyEssential,
      timestamp: new Date().toISOString(),
      accepted: 'essential_only'
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('matos_co_cookie_consent', JSON.stringify({
      preferences,
      timestamp: new Date().toISOString(),
      accepted: 'custom'
    }));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-banner"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md w-auto z-50 pointer-events-auto"
        >
          <div className="bg-[#030d1b] border border-gold/25 rounded-2xl p-6 shadow-[0_24px_50px_rgba(0,0,0,0.65)] backdrop-blur-xl relative overflow-hidden">
            {/* Elegant visual backdrop line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                <Cookie className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  Privacidade & Cookies
                </h4>
                <p className="font-sans text-[11px] text-gold/60 uppercase tracking-widest font-mono mt-0.5">
                  Matos & Co. Agência de Marketing
                </p>
              </div>
              <button
                id="close-cookie-banner"
                onClick={handleDeclineAll}
                className="text-muted-text/60 hover:text-white transition-colors p-1"
                title="Fechar e aceitar apenas essenciais"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!showCustomize ? (
              <>
                <p className="font-sans text-xs sm:text-sm text-muted-text/90 leading-relaxed font-light mb-5">
                  Valorizamos sua privacidade de forma intransigente. Utilizamos cookies cuidadosamente para otimizar, analisar e aprimorar sua experiência de navegação exclusiva em nosso portal de elite.
                </p>

                <div className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id="cookie-btn-decline"
                      onClick={handleDeclineAll}
                      className="bg-transparent hover:bg-white/5 text-muted-text border border-white/10 hover:text-white transition-all py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase font-mono"
                    >
                      Recusar
                    </button>
                    <button
                      id="cookie-btn-customize"
                      onClick={() => setShowCustomize(true)}
                      className="bg-transparent hover:bg-gold/5 text-gold border border-gold/20 hover:border-gold/30 transition-all py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase font-mono flex items-center justify-center gap-1.5"
                    >
                      <Settings className="w-3.5 h-3.5" />
                      Ajustar
                    </button>
                  </div>
                  
                  <button
                    id="cookie-btn-accept-all"
                    onClick={handleAcceptAll}
                    className="w-full bg-gold hover:bg-gold-light text-[#020b16] transition-all py-3.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase font-sans shadow-lg shadow-gold/10 hover:shadow-gold/20"
                  >
                    Aceitar Todos
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <p className="font-sans text-[11px] text-muted-text/85 mb-4 leading-relaxed">
                  Gerencie detalhadamente quais dados você concorda em compartilhar conosco:
                </p>

                {/* Preference Toggles */}
                <div className="space-y-2.5 mb-5">
                  
                  {/* Essential (Static) */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#05142a]/80 border border-white/5">
                    <div className="flex flex-col pr-4">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-xs font-bold text-white">Necessários</span>
                        <span className="text-[8px] bg-gold/15 text-gold font-mono px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Obrigatório</span>
                      </div>
                      <span className="font-sans text-[10px] text-muted-text/70 mt-0.5 leading-snug">
                        Essenciais para o portal funcionar perfeitamente e navegar seguro.
                      </span>
                    </div>
                    <div className="w-10 h-6 bg-gold/20 rounded-full p-0.5 flex items-center justify-end pointer-events-none border border-gold/30 select-none">
                      <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#020b16]" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div 
                    onClick={() => togglePreference('analytics')}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#05142a]/80 border border-white/5 hover:border-gold/20 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col pr-4">
                      <span className="font-serif text-xs font-bold text-white">Desempenho & Métricas</span>
                      <span className="font-sans text-[10px] text-muted-text/70 mt-0.5 leading-snug">
                        Permite a medição de audiência e insights técnicos de velocidade e navegação.
                      </span>
                    </div>
                    <div className={`w-10 h-6 rounded-full p-0.5 flex items-center transition-colors duration-300 ${preferences.analytics ? 'bg-gold/20 border border-gold/30 justify-end' : 'bg-white/5 border border-white/10 justify-start'}`}>
                      <div className={`w-5 h-5 rounded-full transition-all duration-300 ${preferences.analytics ? 'bg-gold' : 'bg-muted-text/50'}`} />
                    </div>
                  </div>

                  {/* Marketing */}
                  <div 
                    onClick={() => togglePreference('marketing')}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#05142a]/80 border border-white/5 hover:border-gold/20 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col pr-4">
                      <span className="font-serif text-xs font-bold text-white">Publicidade Dirigida</span>
                      <span className="font-sans text-[10px] text-muted-text/70 mt-0.5 leading-snug">
                        Mapeia o remarketing sofisticado em canais parceiros e redes sociais (Meta/Google).
                      </span>
                    </div>
                    <div className={`w-10 h-6 rounded-full p-0.5 flex items-center transition-colors duration-300 ${preferences.marketing ? 'bg-gold/20 border border-gold/30 justify-end' : 'bg-white/5 border border-white/10 justify-start'}`}>
                      <div className={`w-5 h-5 rounded-full transition-all duration-300 ${preferences.marketing ? 'bg-gold' : 'bg-muted-text/50'}`} />
                    </div>
                  </div>

                </div>

                <div className="flex gap-2">
                  <button
                    id="cookie-btn-back"
                    onClick={() => setShowCustomize(false)}
                    className="bg-transparent hover:bg-white/5 text-muted-text border border-white/10 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase font-mono"
                  >
                    Voltar
                  </button>
                  <button
                    id="cookie-btn-save-custom"
                    onClick={handleSavePreferences}
                    className="flex-grow bg-gold hover:bg-gold-light text-[#020b16] transition-all py-3 px-4 rounded-xl text-xs font-bold tracking-widest uppercase font-sans text-center"
                  >
                    Salvar Preferências
                  </button>
                </div>
              </motion.div>
            )}

            {/* Micro details indicator */}
            <div className="mt-4 flex items-center justify-center gap-1.5 opacity-40 text-[9px] font-mono select-none">
              <Shield className="w-3 h-3 text-gold" />
              <span>Em conformidade com a LGPD</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
