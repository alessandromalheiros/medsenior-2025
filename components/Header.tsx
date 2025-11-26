import React, { useState } from 'react';
import { NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_TRIGGER_MSG } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TRIGGER_MSG)}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-4 hover:opacity-90 transition-opacity"
        >
          {/* Logo MedSenior */}
          <div className="h-8 md:h-12 w-auto">
            <img 
              src="/medsenior-logo.png" 
              alt="MedSenior Logo" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                ((e.target as HTMLImageElement).parentElement as HTMLElement).innerHTML = '<span class="text-lg font-bold text-medgreen-800">MedSenior</span>';
              }}
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-700 font-medium hover:text-medgreen-800 transition-colors text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-medgreen-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-medgreen-900 transition-all shadow-md"
          >
            Falar com Especialista
          </a>
        </nav>

        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 font-medium text-lg py-2 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
             <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-medgreen-800 text-white text-center py-3 rounded-lg font-bold mt-2"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};