import React, { useState } from 'react';
import { submitLeadToWebhook } from '../services/leadService';
import { LeadFormData } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_TRIGGER_MSG } from '../constants';

// Ícones SVG nativos para evitar dependências externas e erros de build
const Icons = {
  ShieldCheck: () => (
    <svg className="w-5 h-5 text-medgreen-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  CheckCircle: () => (
    <svg className="w-5 h-5 text-medgreen-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  ),
  ArrowRight: ({ className }: { className?: string }) => (
    <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  ),
  Phone: () => (
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Mail: () => (
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  User: () => (
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ),
  WhatsApp: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
};

// Utilitário para gerar ID único (compatível com browsers antigos)
const generateEventId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `lead-${timestamp}-${random}`;
};

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TRIGGER_MSG)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Máscara simples de telefone visual
    if (name === 'phone') {
      const numbers = value.replace(/\D/g, '');
      let maskedValue = numbers;
      if (numbers.length > 2) maskedValue = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      if (numbers.length > 7) maskedValue = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      setFormData(prev => ({ ...prev, [name]: maskedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    // 1. Validações Básicas
    if (!formData.fullName || formData.fullName.split(' ').length < 2) {
      setErrorMsg('Por favor, digite seu nome e sobrenome.');
      setIsLoading(false);
      return;
    }
    // Validação simples de telefone (pelo menos DDD + 8 dígitos)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Por favor, digite um telefone válido com DDD.');
      setIsLoading(false);
      return;
    }
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMsg('Por favor, digite um e-mail válido.');
      setIsLoading(false);
      return;
    }

    // 2. Geração do Event ID Único (Chave para o CAPI)
    const eventId = generateEventId();

    try {
      // 3. Disparo do Pixel (Browser Side) com Event ID
      // Isso permite que o Facebook cruze este evento com o que enviaremos via Webhook
      if (window.fbq) {
        window.fbq(
          'track', 
          'Lead', 
          { 
            content_name: 'Cadastro LP MedSenior', 
            currency: 'BRL', 
            value: 0.00 
          }, 
          { eventID: eventId } // O Segredo da blindagem iOS 14
        );
      }

      // 4. Envio para o Backend (Server Side) via Webhook
      const success = await submitLeadToWebhook(formData, eventId);

      if (success) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', email: '' });
        // Redirecionamento opcional para página de obrigado
        // window.location.href = '/obrigado';
      } else {
        setErrorMsg('Houve um erro ao enviar. Tente novamente pelo WhatsApp.');
      }

    } catch (err) {
      console.error(err);
      setErrorMsg('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden pb-16 pt-24 lg:pt-32">
      
      {/* Background Abstract Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Lado Esquerdo: Copywriting */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-700/50 px-4 py-2 rounded-full border border-green-500/30 backdrop-blur-sm">
              <Icons.ShieldCheck />
              <span className="text-sm font-semibold text-green-100 uppercase tracking-wide">Especialista na Terceira Idade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Saúde de Excelência para <span className="text-green-300">Viver Melhor</span> a Partir dos 49 Anos.
            </h1>
            
            <p className="text-lg text-green-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O único plano com foco total em medicina preventiva e envelhecimento ativo.
            </p>

            <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-y-3 gap-x-4 justify-center lg:justify-start pt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-green-200">
                <Icons.CheckCircle /> Sem Coparticipação
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-green-200">
                <Icons.CheckCircle /> Carência Reduzida
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-green-200">
                <Icons.CheckCircle /> Oficinas de Saúde
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-green-200">
                <Icons.CheckCircle /> Hospitais Próprios
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário de Alta Conversão */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border-4 border-green-700/20">
              
              {!isSuccess ? (
                <>
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-green-900">Simule seu Plano</h2>
                    <p className="text-gray-600 text-sm mt-1">Preencha para receber sua cotação personalizada.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 ml-1">Nome Completo</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Icons.User />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all outline-none"
                          placeholder="Ex: Maria da Silva"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">WhatsApp / Telefone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Icons.Phone />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all outline-none"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    {/* Campo de Email Agora Obrigatório */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">E-mail</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Icons.Mail />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all outline-none"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="text-red-600 text-sm bg-red-50 p-2 rounded text-center border border-red-200">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2 text-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? 'Enviando...' : 'COTAR AGORA'}
                      {!isLoading && <Icons.ArrowRight />}
                    </button>
                    
                    <p className="text-xs text-gray-400 text-center mt-4">
                      Seus dados estão 100% seguros e protegidos.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Icons.CheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Solicitação Recebida!</h3>
                  <p className="text-gray-600">
                    Nossa equipe especialista em MedSenior entrará em contato em instantes pelo WhatsApp para enviar sua cotação.
                  </p>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline justify-center"
                  >
                    Chamar no WhatsApp agora <Icons.ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};