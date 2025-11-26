import React, { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_TRIGGER_MSG } from '../constants';

const PLANS_PF = [
  {
    name: "Essencial",
    type: "Enfermaria",
    ans: "494.293/23-1",
    priceEntry: "753,23",
    price54: "903,88",
    price59: "1.184,08",
    features: [
      "Acomodação Enfermaria",
      "Sem Coparticipação",
      "Oficinas de Saúde",
      "Rede Credenciada Básica",
      "Atendimento RJ e Niterói"
    ]
  },
  {
    name: "RJ1",
    type: "Enfermaria Especial",
    ans: "489.488/21-0",
    priceEntry: "900,82",
    price54: "1.080,98",
    price59: "1.416,08",
    features: [
      "Acomodação Enfermaria",
      "Sem Coparticipação",
      "Rede Credenciada Ampliada",
      "Atendimento RJ e Niterói"
    ],
    recommended: true
  },
  {
    name: "RJ2",
    type: "Apartamento",
    ans: "489.487/21-1",
    priceEntry: "1.045,53",
    price54: "1.254,64",
    price59: "1.643,58",
    features: [
      "Acomodação Apartamento",
      "Privacidade Total",
      "Sem Coparticipação",
      "Rede Credenciada Ampliada",
      "Direito a Acompanhante"
    ]
  },
  {
    name: "Black",
    type: "Apartamento Premium",
    ans: "502.795/25-1",
    priceEntry: "1.205,92",
    price54: "1.447,10",
    price59: "1.895,70",
    features: [
      "Hospitais de Elite (Pró-Cardíaco)",
      "Rede Laboratorial Premium",
      "Sem Coparticipação",
      "Concierge Exclusivo",
      "Seguro Viagem Nacional"
    ]
  },
  {
    name: "Infinite",
    type: "Apartamento Exclusive",
    ans: "504.224/25-1",
    priceEntry: "1.653,00",
    price54: "1.983,60",
    price59: "2.598,52",
    features: [
      "Hospitais Top Tier (Sírio Libanês BSB)",
      "Seguro Viagem Nacional (R$ 30k)",
      "Sem Coparticipação",
      "Rede Exclusiva Infinite",
      "Concierge Exclusivo"
    ]
  }
];

const PLANS_PME = [
  {
    name: "RJ1",
    type: "Empresarial",
    ans: "499.670/24-4",
    priceEntry: "810,73",
    price54: "972,88",
    price59: "1.274,47",
    features: [
      "A partir de 1 vida",
      "Aceita MEI (> 6 meses)",
      "Sem Coparticipação",
      "Inclui Pais, Sogros, Avós e Bisavós",
      "Atend. RJ, Niterói e Caxias"
    ]
  },
  {
    name: "RJ2",
    type: "Empresarial",
    ans: "499.671/24-2",
    priceEntry: "972,88",
    price54: "1.167,46",
    price59: "1.529,37",
    features: [
      "Acomodação Privativa",
      "Aceita MEI (> 6 meses)",
      "Sem Coparticipação",
      "Inclui Pais, Sogros, Avós e Bisavós",
      "Atend. RJ, Niterói e Caxias"
    ],
    recommended: true
  },
  {
    name: "Black",
    type: "Premium PME",
    ans: "499.681/24-0",
    priceEntry: "1.085,34",
    price54: "1.302,41",
    price59: "1.706,16",
    features: [
      "Hospitais Premium",
      "Acomodação Apartamento",
      "Sem Coparticipação",
      "Rede Exclusiva Black",
      "Inclui Pais, Sogros, Avós e Bisavós",
      "Seguro Viagem Nacional"
    ]
  },
  {
    name: "Infinite",
    type: "Exclusive PME",
    ans: "504.223/25-2",
    priceEntry: "1.487,70",
    price54: "1.785,24",
    price59: "2.338,66",
    features: [
      "Máxima Exclusividade",
      "Rede Hospitalar Top Tier",
      "Sem Coparticipação",
      "Reembolso Diferenciado",
      "Inclui Pais, Sogros, Avós e Bisavós",
      "Seguro Viagem Nacional"
    ]
  }
];

export const Pricing: React.FC = () => {
  const [isPME, setIsPME] = useState(false);
  const currentPlans = isPME ? PLANS_PME : PLANS_PF;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TRIGGER_MSG)}`;

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Invista na sua Saúde</h2>
          
          <div className="bg-black text-white rounded-xl p-6 mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-medgreen-500 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medgreen-600 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="inline-block bg-medgreen-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-3 animate-pulse">
                IMPERDÍVEL
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-medgreen-400 to-white mb-2">
                BLACK FRIDAY ANTECIPADA
              </h3>
              <p className="text-xl md:text-2xl font-bold mb-4">
                Até <span className="text-medgreen-400 text-3xl">80% DE DESCONTO</span> Total (Progressivo)*
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-medium">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-medgreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Carência ZERO (Exceto CPT)
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-medgreen-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Válido para Novembro/2025
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-8 gap-4 select-none flex-wrap">
            <span 
              className={`text-lg font-bold cursor-pointer transition-colors ${!isPME ? 'text-medgreen-800' : 'text-gray-400'}`}
              onClick={() => setIsPME(false)}
            >
              Individual
            </span>
            
            <button 
              onClick={() => setIsPME(!isPME)}
              className="w-16 h-8 bg-medgreen-800 rounded-full p-1 flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medgreen-600 flex-shrink-0"
              aria-label="Alternar entre Individual e PME"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isPME ? 'translate-x-8' : ''}`} />
            </button>
            
            <span 
              className={`text-lg font-bold cursor-pointer transition-colors ${isPME ? 'text-medgreen-800' : 'text-gray-400'}`}
              onClick={() => setIsPME(true)}
            >
              PME (Inclusive MEI)
            </span>
          </div>

          {isPME && (
            <div className="mt-6 inline-block bg-blue-50 border border-blue-100 px-6 py-3 rounded-lg animate-fade-in shadow-sm">
              <p className="text-blue-800 font-medium text-sm md:text-base">
                <span className="font-bold text-lg">✨ Diferencial Exclusivo PME:</span><br/>
                Contratação a partir de <span className="font-bold underline">1 vida</span> e idade a partir de <span className="font-bold underline">44 anos</span>!
              </p>
            </div>
          )}
        </div>

        <div className={`grid md:grid-cols-2 ${!isPME ? 'xl:grid-cols-5' : 'xl:grid-cols-4'} gap-4 max-w-full mx-auto px-2`}>
          {currentPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.recommended ? 'border-medgreen-600 ring-4 ring-medgreen-100 z-10' : 'border-gray-200'}`}
            >
              {plan.recommended && (
                <div className="bg-medgreen-600 text-white text-center py-1 font-bold uppercase tracking-wider text-xs">
                  Recomendado
                </div>
              )}
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-medgreen-900 mb-1">{plan.name}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <p className="text-sm font-medium text-gray-500">{plan.type}</p>
                  <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200 whitespace-nowrap">ANS: {plan.ans}</span>
                </div>
                
                <div className="mb-6 space-y-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-0.5">
                      {isPME ? "44 a 53 anos (Sem Limite)" : "49 a 53 anos"}
                    </p>
                    <p className="text-xl font-bold text-medgreen-800">R$ {plan.priceEntry}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-2">
                     <p className="text-[10px] text-gray-500 uppercase font-bold mb-0.5">54 a 58 anos</p>
                     <p className="text-xl font-bold text-medgreen-800">R$ {plan.price54}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-2">
                     <p className="text-[10px] text-gray-500 uppercase font-bold mb-0.5">59 Anos ou mais</p>
                     <p className="text-xl font-bold text-medgreen-900">R$ {plan.price59}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <svg className="w-4 h-4 text-medgreen-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a 
                    href={waLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-colors ${
                      plan.recommended 
                      ? 'bg-medgreen-800 text-white hover:bg-medgreen-900' 
                      : 'bg-white border-2 border-medgreen-800 text-medgreen-800 hover:bg-medgreen-50'
                    }`}
                  >
                    QUERO ESTE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-xs text-gray-400 max-w-3xl mx-auto space-y-1">
          <p>* Campanha Black Friday válida para contratos fechados até 30/11/2025. Consulte regras de parcelamento e elegibilidade.</p>
          <p>* Carência Zero Promocional: Exceto Doenças Preexistentes (CPT), mediante análise da operadora.</p>
          {isPME && (
            <p><strong>* PME Diferenciado:</strong> Aceitamos a partir de 1 vida (MEI com &gt;6 meses). Idade mínima reduzida para 44 anos.</p>
          )}
        </div>
      </div>
    </section>
  );
};
