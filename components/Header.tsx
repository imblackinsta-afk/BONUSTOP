import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Топ 2026', href: '#casinos' },
    { name: 'Тренды', href: '#trends' },
    { name: 'Контакты', href: '#footer' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <a href="#" className="text-2xl font-extrabold tracking-wider flex items-center gap-2">
            <span className="text-gradient">CASINO FUTURE</span>
            <Crown size={24} className="text-accent-gold" />
          </a>
          <span className="text-xs text-slate-400 font-light tracking-wide">только проверенные бренды 2026</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-accent-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/50 bg-accent-purple/10 backdrop-blur shadow-[0_0_15px_rgba(166,120,255,0.3)]">
            <span className="text-white font-bold text-lg">2026</span>
            <span className="text-accent-green text-xs uppercase">лидеры</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary border-b border-white/10 p-6 md:hidden shadow-xl flex flex-col gap-4 z-50">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-300 hover:text-accent-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;