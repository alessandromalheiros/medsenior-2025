import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { number: "92%", label: "de Satisfação dos Beneficiários" },
    { number: "45", label: "Unidades Próprias" },
    { number: "148", label: "Hospitais na Rede Credenciada" },
    { number: "08", label: "Estados de Atuação" },
  ];

  return (
    <section className="bg-medgreen-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-medgreen-100">{stat.number}</span>
              <span className="text-sm md:text-base font-medium opacity-90 max-w-[150px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};