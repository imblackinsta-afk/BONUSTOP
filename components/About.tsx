import React from 'react';
import { COMPARISON_STATS } from '../constants';
import { CheckCircle } from 'lucide-react';

const Trends: React.FC = () => {
  return (
    <section id="trends" className="py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[40px] p-8 md:p-12 border border-accent-purple/40">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            📊 Ключевые тренды 2026
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {COMPARISON_STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-accent-purple/10 transition-colors">
                <div className="text-3xl md:text-4xl font-extrabold text-accent-green mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-indigo-200 flex items-center justify-center gap-2 text-sm md:text-base">
            <CheckCircle className="text-accent-green" size={20} />
            В 2026 году лидеры индустрии окончательно перешли на децентрализацию и нейросети.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trends;