import React from 'react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: "Oficinas de Saúde",
    description: "Programas exclusivos como Arte Terapia, NutriSaber, Cabeça Boa e Educa a Dor para manter o corpo e a mente ativos.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Medicina Preventiva",
    description: "Acompanhamento contínuo com enfermeiros gestores de cuidado para prevenir doenças antes que elas aconteçam.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Pronto Atendimento Virtual",
    description: "Teleconsulta 24 horas por videochamada com médicos, sem precisar sair de casa. Segurança e comodidade.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Desconto em Farmácias",
    description: "Descontos exclusivos nas redes Drogasil, Droga Raia, Pacheco e Santa Lúcia para clientes MedSênior.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medgreen-900 mb-4">Cuidado além da consulta médica</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Muito mais que um plano de saúde, um projeto de vida com oficinas e programas especiais.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow bg-medgreen-50 group">
              <div className="w-20 h-20 bg-medgreen-800 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};