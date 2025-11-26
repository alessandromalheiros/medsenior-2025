import React from 'react';

// Definição global para o Facebook Pixel
declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, any>,
      options?: { eventID: string }
    ) => void;
  }
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string; // Agora OBRIGATÓRIO
}

export interface WebhookPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  source: string;
  timestamp: string;
  event_id: string; // Adicionado para CAPI (Deduplicação)
  fbp?: string; // Facebook Browser ID (Cookie _fbp)
  fbc?: string; // Facebook Click ID (Cookie _fbc)
  page_url?: string; // URL da conversão
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}