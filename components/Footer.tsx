import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-medgreen-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 lg:col-span-2">
            {/* Logo da Vortex substituindo o texto, sem container branco */}
            <div className="mb-6 h-16 w-auto flex items-center">
               <img 
                src="/logo.png" 
                alt="Vortex Corretagem" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  ((e.target as HTMLImageElement).parentElement as HTMLElement).innerHTML = `<span class="text-xl font-bold text-white">${COMPANY_INFO.name}</span>`;
                }}
              />
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Somos uma corretora especializada em planos de saúde para a terceira idade. 
              Nosso compromisso é encontrar a melhor proteção para você e sua família.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-medgreen-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Atendimento</h4>
             
             <div className="mb-4">
               <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Telefone</p>
               <a href="tel:2137987776" className="text-white hover:text-medgreen-400 transition-colors text-lg font-medium">
                 (21) 3798-7776
               </a>
             </div>

             <div className="mt-6">
               <h4 className="text-white font-bold mb-3">Redes Sociais</h4>
               <div className="flex gap-4">
                 <a 
                   href="https://www.instagram.com/vortexplanosdesaude" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-medgreen-400 transition-colors"
                   aria-label="Instagram"
                 >
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                   </svg>
                 </a>
                 <a 
                   href="https://www.facebook.com/vortexplanosdesaude" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-medgreen-400 transition-colors"
                   aria-label="Facebook"
                 >
                   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                   </svg>
                 </a>
               </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Vortex Corretagem de Seguros - CNPJ: {COMPANY_INFO.cnpj}. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            {COMPANY_INFO.name} é uma corretora autorizada da MedSenior. 
            As informações de preços, carências e rede credenciada podem sofrer alterações pelas operadoras sem aviso prévio. 
            Consulte sempre as condições contratuais atualizadas.
          </p>
        </div>
      </div>
    </footer>
  );
};