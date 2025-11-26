import React from 'react';

const ownUnits = [
  { name: "Barra da Tijuca", desc: "Shopping Uptown - 24h" },
  { name: "Botafogo", desc: "Centro Empresarial Mourisco" },
  { name: "Tijuca", desc: "Shopping Tijuca" },
  { name: "Niterói", desc: "Icaraí" },
  { name: "Campo Grande", desc: "Pronto Atendimento 24h" },
  { name: "Centro", desc: "Rua da Assembleia (Comercial)" }
];

const highlightedHospitals = [
  "Hospital Pró-Cardíaco",
  "Casa de Saúde São José",
  "Hospital Vitória",
  "Hospital São Lucas",
  "Complexo das Américas",
  "Hospital Badim"
];

const premiumLabs = [
  "Sérgio Franco",
  "Bronstein",
  "Lâmina",
  "Richet",
  "Alta Excelência Diagnóstica"
];

export const Hospitals: React.FC = () => {
  return (
    <section id="hospitais" className="py-0">
      
      <div className="bg-medgreen-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-medgreen-800 text-medgreen-100 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-wider">
                Exclusividade MedSênior
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Estrutura Própria de Elite <br/>no Rio de Janeiro
              </h2>
              <p className="text-medgreen-100 text-lg leading-relaxed mb-8">
                Além da rede credenciada, você conta com unidades próprias modernas e exclusivas para o público sênior.
                Foco total em agilidade, conforto e resolução rápida.
              </p>
              
              <div className="p-5 bg-medgreen-800/50 rounded-xl border border-medgreen-700">
                <p className="flex items-center gap-3 font-semibold">
                  <span className="text-2xl">🚀</span>
                  Em breve: Nova Mega Unidade no Méier!
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ownUnits.map((unit, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors group">
                  <h4 className="font-bold text-lg text-white group-hover:text-medgreen-300 transition-colors">{unit.name}</h4>
                  <p className="text-sm text-medgreen-200 mt-1">{unit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medgreen-900 mb-4">Rede Credenciada Premium</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Parceria com os hospitais e laboratórios mais respeitados do Rio de Janeiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hospitais Destaque</h3>
              </div>
              <div className="space-y-3">
                {highlightedHospitals.map((hospital, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="w-5 h-5 text-medgreen-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="font-semibold text-gray-700">{hospital}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6">* Disponibilidade conforme categoria do plano (Black/Infinite).</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Laboratórios</h3>
              </div>
              <div className="space-y-3">
                {premiumLabs.map((lab, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="font-semibold text-gray-700">{lab}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100 text-purple-800 text-sm font-medium">
                ✅ Coleta Domiciliar disponível em todos os planos (sem custo extra).
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};