import React from 'react';
import { ArrowDown, Bot, Coins } from 'lucide-react';
import { SITE_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 text-center z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
            <Bot className="text-accent-gold" size={48} />
            ТОП-6 КАЗИНО
          </span>
          <span className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">
            2026 ГОДА
            <Coins className="text-accent-gold" size={48} />
          </span>
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Рейтинг составлен на основе надежности, скорости выплат и качества AI-сервиса.
        </p>

        <div className="animate-bounce text-slate-500 mt-8">
          <ArrowDown size={24} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;