import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Copy, Star } from 'lucide-react';
import { CASINOS } from '../constants';
import { Casino } from '../types';

const highlightPromo = (text: string) => {
  const codes = ['ARMADOT', 'LUDICOFF'];
  // Create regex to match codes
  const regex = new RegExp(`(${codes.join('|')})`, 'g');
  const parts = text.split(regex);
  
  return parts.map((part, i) => {
    if (codes.includes(part)) {
      return (
        <span 
          key={i} 
          className="inline-flex items-center gap-1 bg-accent-gold text-primary font-black px-2 py-0.5 rounded shadow-[0_0_15px_rgba(255,204,0,0.5)] mx-1 cursor-pointer hover:scale-105 transition-transform select-all align-middle"
          title="Скопировать код"
          onClick={(e) => {
             e.preventDefault();
             navigator.clipboard.writeText(part);
          }}
        >
          {part}
          <Copy size={12} className="opacity-60" />
        </span>
      );
    }
    return part;
  });
};

const CasinoCard: React.FC<{ casino: Casino; index: number }> = ({ casino, index }) => {
  const [userRating, setUserRating] = useState<number>(0);
  const [avgRating, setAvgRating] = useState<number>(casino.rating);
  const [voteCount, setVoteCount] = useState<number>(casino.votes);
  const [hoverRating, setHoverRating] = useState<number>(0);

  useEffect(() => {
    const storedRating = localStorage.getItem(`userRating_${casino.id}`);
    if (storedRating) {
      setUserRating(parseInt(storedRating));
    }
  }, [casino.id]);

  const handleRate = (rating: number) => {
    // If already rated, we adjust the average
    // Since we don't have a backend, we perform a weighted average simulation locally
    let newAvg = avgRating;
    let newCount = voteCount;

    if (userRating === 0) {
      // First time rating
      newCount = voteCount + 1;
      newAvg = ((avgRating * voteCount) + rating) / newCount;
    } else {
      // Update rating
      newAvg = ((avgRating * voteCount) - userRating + rating) / voteCount;
    }

    setUserRating(rating);
    setAvgRating(newAvg);
    setVoteCount(newCount);
    localStorage.setItem(`userRating_${casino.id}`, rating.toString());
  };

  return (
    <div 
      className="casino-card opacity-0 glass-card rounded-[30px] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(74,255,158,0.3)] hover:border-accent-green group flex flex-col h-full"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Rank */}
      <div className="absolute top-4 right-5 text-5xl font-extrabold text-white/5 leading-none select-none">
        #{casino.rank}
      </div>

      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold to-orange-500 text-primary font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-5 tracking-wider shadow-lg w-fit">
        <casino.topBadge.icon size={12} />
        {casino.topBadge.text}
      </div>

      {/* Name */}
      <h3 className="text-3xl font-bold text-white mb-2">{casino.name}</h3>

      {/* Rating System */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-0.5 bg-black/30 rounded-full px-2 py-1">
           {[1, 2, 3, 4, 5].map((star) => (
             <button
               key={star}
               onClick={(e) => {
                 e.preventDefault();
                 handleRate(star);
               }}
               onMouseEnter={() => setHoverRating(star)}
               onMouseLeave={() => setHoverRating(0)}
               className="focus:outline-none transition-transform hover:scale-110 p-0.5"
             >
               <Star 
                 size={16} 
                 className={`${
                   star <= (hoverRating || userRating || Math.round(avgRating)) 
                     ? 'text-accent-gold fill-accent-gold' 
                     : 'text-slate-600'
                 } transition-colors`} 
               />
             </button>
           ))}
        </div>
        <div className="text-sm text-slate-400 font-medium">
          <span className="text-white font-bold">{avgRating.toFixed(1)}</span>
          <span className="mx-1.5 text-slate-600">•</span>
          <span className="text-xs">{voteCount.toLocaleString()} отзывов</span>
        </div>
      </div>

      {/* Types */}
      <div className="flex flex-wrap gap-2 mb-6">
        {casino.types.map((type, idx) => (
          <span key={idx} className="flex items-center gap-1.5 bg-accent-green/15 text-accent-green border border-accent-green rounded-full px-3 py-1 text-sm">
            <type.icon size={14} />
            {type.text}
          </span>
        ))}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-grow">
        {casino.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-slate-200">
            <feature.icon size={18} className="text-accent-green shrink-0" />
            <span className="text-sm leading-relaxed">{highlightPromo(feature.text)}</span>
          </li>
        ))}
      </ul>

      {/* Bonus Block */}
      <div className="bg-black/40 border border-dashed border-accent-purple/50 rounded-2xl p-4 text-center mb-6 hover:border-accent-gold/50 transition-colors">
        <div className="text-xl font-bold text-accent-gold mb-1">{casino.bonus.value}</div>
        <div className="text-xs text-slate-300">{highlightPromo(casino.bonus.description)}</div>
      </div>

      {/* Action Button */}
      <a 
        href={casino.link} 
        className="block w-full py-4 rounded-full bg-gradient-to-r from-accent-purple to-[#8255ee] text-white font-bold text-center border border-white/20 shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_#a678ff]"
      >
        <span className="flex items-center justify-center gap-2">
          Играть сейчас
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </div>
  );
};

const CasinoList: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in-up');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const cards = document.querySelectorAll('.casino-card');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="casinos" className="pb-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASINOS.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoList;