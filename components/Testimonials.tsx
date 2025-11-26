import React from 'react';

const testimonials = [
  {
    name: "Maria de Lourdes",
    age: "68 anos",
    text: "Eu tinha muito medo de mudar de plano e perder meus médicos, mas a MedSenior me surpreendeu. O atendimento no hospital próprio é maravilhoso e não pago nada a mais por isso.",
    role: "Cliente há 2 anos"
  },
  {
    name: "João Carlos",
    age: "72 anos",
    text: "O preço cabe no meu bolso. Em outras operadoras, o aumento por idade era absurdo e inviável. Aqui me sinto respeitado e bem cuidado.",
    role: "Cliente RJ1"
  },
  {
    name: "Ana Clara",
    age: "Filha da D. Neide",
    text: "Contratei para minha mãe e a oficina de memória (Cabeça Boa) mudou a vida dela. Ela está muito mais ativa, fez amizades e adora os encontros!",
    role: "Familiar"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-medgreen-50 border-y border-medgreen-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medgreen-900 mb-4">Quem tem, recomenda</h2>
          <p className="text-xl text-gray-600">Veja o que nossos beneficiários dizem sobre o cuidado MedSenior.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-medgreen-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{item.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.age} • {item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};