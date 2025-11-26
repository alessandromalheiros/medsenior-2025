import { MAKE_WEBHOOK_URL } from '../constants';
import { LeadFormData, WebhookPayload } from '../types';

// Função auxiliar para ler cookies (usada para pegar _fbp e _fbc)
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

/**
 * Envia os dados do lead para o Webhook (Make/Zoho)
 * @param data Dados do formulário
 * @param eventId ID único do evento gerado no frontend para deduplicação (CAPI)
 */
export const submitLeadToWebhook = async (data: LeadFormData, eventId: string): Promise<boolean> => {
  try {
    // Tratamento de Nome e Sobrenome para evitar erros no CRM
    const trimmedName = data.fullName.trim();
    const nameParts = trimmedName.split(' ');
    
    const firstName = nameParts[0];
    // Se não tiver sobrenome, usa um fallback discreto ou repete o primeiro nome
    // para garantir que o campo last_name não vá vazio (o que quebra muitos CRMs)
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '.';

    // Captura cookies do Facebook para melhorar o Match Quality (Opcional, mas recomendado)
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // Construção do Payload
    const payload: WebhookPayload = {
      first_name: firstName,
      last_name: lastName,
      phone: data.phone.replace(/\D/g, ''), // Remove formatação, envia apenas números
      email: data.email.trim(),
      source: 'Landing Page MedSenior Vortex',
      timestamp: new Date().toISOString(),
      event_id: eventId, // Identificador único para o Facebook CAPI
      fbp: fbp,
      fbc: fbc,
      page_url: window.location.href
    };

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Erro no envio para o Webhook:', response.statusText);
      return false;
    }

    return true;

  } catch (error) {
    console.error('Erro crítico ao enviar lead:', error);
    return false;
  }
};