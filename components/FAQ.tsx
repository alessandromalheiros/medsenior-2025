import React, { useState } from 'react';

const QUESTIONS = [
  {
    q: "Como funciona a Black Friday Antecipada?",
    a: "É a nossa melhor campanha do ano! Contratando em Novembro/2025, você ganha até 80% de desconto na 1ª mensalidade (ou descontos progressivos) e aproveita Carência Zero para consultas e exames (exceto doenças preexistentes)."
  },
  {
    q: "O que é a 'Carência Zero' da promoção?",
    a: "Significa que você não precisa esperar os prazos normais (30 dias para consultas, por exemplo) para usar o plano. Fechou, usou! A única exceção é para doenças preexistentes (CPT), que seguem regra da ANS."
  },
  {
    q: "Qual a idade mínima para contratar?",
    a: "Para Pessoa Física, a idade mínima é de 49 anos. Porém, no Plano Empresarial (PME), aceitamos beneficiários a partir de 44 anos de idade."
  },
  {
    q: "Tenho MEI, posso contratar o plano Empresarial?",
    a: "Sim! A MedSênior aceita MEI (Microempreendedor Individual) com no mínimo 6 meses de abertura. O grande diferencial é que aceitamos contratos a partir de 1 vida (apenas o titular), sem obrigação de incluir funcionários."
  },
  {
    q: "Quem posso incluir no plano empresarial (PME)?",
    a: "Este é um grande diferencial da MedSênior: além de cônjuge e filhos, você pode incluir Pai, Mãe, Sogro, Sogra, Tios, Avós e Bisavós como dependentes no contrato empresarial."
  },
  {
    q: "O plano tem coparticipação?",
    a: "Não. A MedSênior (tanto PF quanto PME) oferece planos SEM coparticipação. Você paga um valor fixo mensal e utiliza a rede sem taxas extras."
  },
  {
    q: "Como funcionam as Oficinas de Saúde?",
    a: "São encontros e atividades focadas em prevenção, como arte terapia, grupos de nutrição e atividades físicas, inclusas no plano para promover o envelhecimento ativo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-medgreen-900 mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {QUESTIONS.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-gray-800 pr-8">{item.q}</span>
                <svg 
                  className={`w-6 h-6 text-medgreen-800 transform transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-700 text-lg leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};