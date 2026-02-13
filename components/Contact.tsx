import React from 'react';
import { SOCIALS, SITE_INFO } from '../constants';
import { AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="pt-10 pb-10 relative z-10 border-t border-white/5 mt-10 text-center">
      <div className="container mx-auto px-6">
        
        {/* Disclaimer */}
        <div className="bg-[#ff4646]/10 border-l-4 border-[#ff4646] p-4 rounded-r-xl max-w-4xl mx-auto mb-12 text-left flex gap-4 items-start">
          <AlertTriangle className="text-[#ff4646] shrink-0" size={24} />
          <div className="text-sm text-[#ffb3b3]">
            <strong>Внимание:</strong> Сайт носит информационный характер. Азартные игры могут вызывать зависимость. 
            Играйте ответственно и только на средства, которые готовы потерять. 18+
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-8">
          {SOCIALS.map((social) => (
            <a 
              key={social.name} 
              href={social.url}
              className="text-slate-400 hover:text-accent-purple transition-colors"
              title={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <p className="text-slate-500 text-sm">
          © {SITE_INFO.year} {SITE_INFO.name}. Рейтинг составлен на основе ожидаемых тенденций.
        </p>
      </div>
    </footer>
  );
};

export default Footer;