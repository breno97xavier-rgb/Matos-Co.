import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, MapPin, PhoneCall, Check, Send } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

// CONFIGURAÇÃO DE E-MAIL:
// Para fazer com que as mensagens enviadas no formulário cheguem direto no seu e-mail de negócios da agência,
// basta criar uma chave de acesso gratuita em https://web3forms.com e colar o código gerado no campo abaixo.
// O formulário de contato usará essa API para lhe entregar o email imediatamente.
// Caso nenhuma chave seja inserida, ele abrirá automaticamente o aplicativo de e-mail integrado para envio fallback.
const WEB3FORMS_ACCESS_KEY = "YOUR_FREE_WEB3FORMS_ACCESS_KEY"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = "https://wa.me/5541988595077?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Matos%20%26%20Co.";
  const instagramUrl = "https://instagram.com/b.matos.co";
  const emailAddress = "b.matos.co@gmail.com";

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Novo Contato - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`Olá Breno,\n\nRecebi um contato pelo site da Matos & Co.:\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nEmpresa: ${formData.company || 'Não informada'}\n\nMensagem:\n${formData.message}\n\nPor favor, retorne o contato com o cliente.`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);

    // Se o usuário ainda não configurou uma chave real ou deixou a padrão, use o fallback interativo mailto
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_FREE_WEB3FORMS_ACCESS_KEY") {
      setTimeout(() => {
        setIsSubmitting(false);
        triggerMailtoFallback();
      }, 800);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Novo Contato do Site: ${formData.company || formData.name}`,
          from_name: "Site Matos & Co.",
          message: `Nome Completo: ${formData.name}\nE-mail para Retorno: ${formData.email}\nEmpresa/Negócio: ${formData.company || 'Não informada'}\n\nMensagem:\n${formData.message}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        console.warn("Retorno negativo da API Web3Forms, usando fallback mailto.");
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error("Erro ao enviar via API Web3Forms:", err);
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="w-full">
      
      {/* SECTION 1: HERO CONTACT (Fundo Azul-Marinho) */}
      <section id="contact-hero" className="bg-navy text-white pt-36 pb-16 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(200,160,88,0.04),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-5"
          >
            VAMOS DAR O PRÓXIMO PASSO
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6"
          >
            Vamos conversar.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-xs sm:text-sm md:text-base text-muted-text max-w-2xl mx-auto leading-relaxed"
          >
            Conte sobre o seu negócio e descubra como a Matos <span className="amp text-gold-light">&amp;</span> Co. pode ajudar na estruturação, organização e posicionamento digital da sua empresa.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: PRINCIPAL CONTENT (Fundo Creme) */}
      <section id="contact-content" className="bg-cream text-navy py-20 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Brand info & Direct CTA */}
            <div className="lg:col-span-6 flex flex-col gap-10">
              
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-3 block">CANAL PRINCIPAL</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4 text-navy">
                  Atendimento Focado
                </h2>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-navy/80 mb-8">
                  Respondemos preferencialmente por mensagem instantânea para maior agilidade no briefing inicial. Clique abaixo para iniciar a conversa directly.
                </p>

                {/* Main WhatsApp Button */}
                <a
                  id="contact-main-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-white bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

              {/* Fine horizontal line */}
              <div className="border-t border-gold/30"></div>

              {/* Direct Details list */}
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-5 block">INFORMAÇÕES DE CONTATO</span>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] block font-bold tracking-wider text-navy/50 uppercase">WhatsApp</span>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-sm hover:underline">(41) 98859-5077</a>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] block font-bold tracking-wider text-navy/50 uppercase">Instagram</span>
                      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-sm hover:underline">@b.matos.co</a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] block font-bold tracking-wider text-navy/50 uppercase">E-mail</span>
                      <a href={`mailto:${emailAddress}`} className="font-sans font-semibold text-sm hover:underline">{emailAddress}</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] block font-bold tracking-wider text-navy/50 uppercase">Sede da Agência</span>
                      <p className="font-sans font-semibold text-sm text-navy/90">Curitiba, PR — Atendimento em todo o Brasil.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Side: Simple fallback contact form */}
            <div className="lg:col-span-6 bg-white border border-gold/10 p-8 md:p-10 rounded-lg shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-3 block">ALTERNATIVAMENTE</span>
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Envie uma mensagem</h3>
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label htmlFor="name-input" className="block text-[10px] uppercase font-bold tracking-wider text-navy/60 mb-2">Seu Nome completo *</label>
                      <input 
                        id="name-input"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-cream/30 border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-xs text-navy tracking-wide font-medium placeholder-navy/30 focus:outline-none transition-colors"
                        placeholder="Ex: João da Silva"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-[10px] uppercase font-bold tracking-wider text-navy/60 mb-2">Seu Melhor E-mail *</label>
                      <input 
                        id="email-input"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-cream/30 border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-xs text-navy tracking-wide font-medium placeholder-navy/30 focus:outline-none transition-colors"
                        placeholder="Ex: joao@empresa.com.br"
                      />
                    </div>

                    <div>
                      <label htmlFor="company-input" className="block text-[10px] uppercase font-bold tracking-wider text-navy/60 mb-2">Nome de sua Empresa (Opcional)</label>
                      <input 
                        id="company-input"
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-cream/30 border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-xs text-navy tracking-wide font-medium placeholder-navy/30 focus:outline-none transition-colors"
                        placeholder="Ex: Sua Marca S.A."
                      />
                    </div>

                    <div>
                      <label htmlFor="message-input" className="block text-[10px] uppercase font-bold tracking-wider text-navy/60 mb-2">Mensagem ou Resumo do Negócio *</label>
                      <textarea 
                        id="message-input"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-cream/30 border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-xs text-navy tracking-wide font-medium placeholder-navy/30 focus:outline-none transition-colors resize-none"
                        placeholder="Descreva brevemente seu negócio e quais serviços precisa..."
                      />
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-white bg-navy hover:bg-navy-dark disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-navy">Mensagem Enviada!</h4>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed max-w-sm">
                      Obrigado por entrar em contato. Analisaremos as informações da sua empresa e responderemos no e-mail informado o mais breve possível.
                    </p>
                    <button
                      id="contact-back-form-btn"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-[11px] font-bold uppercase tracking-widest text-gold hover:text-gold-light transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
